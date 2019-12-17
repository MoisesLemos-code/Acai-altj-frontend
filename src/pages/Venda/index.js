import React, { Component } from 'react';
import api from "../../services/api"
import { Container, Row, Col } from "react-bootstrap";
import { toast } from 'react-toastify';

import { Styles } from './styles';

import SearchProduto from '../../components/BuscaProduto/SearchProduto'
import SearchResult from '../../components/BuscaProduto/SearchResult'
import PainelVenda from '../../components/PainelVenda'
import ListProdutoVenda from '../../components/ListProdutoVenda'

export default class Venda extends Component {

  state = {
    venda: {
      _id: 0,
      numero: 101,
      statusVenda: false,
      totalBruto: 0,
      totalFinal: 0,
      produtos: [],
      cliente_id: String
    },
    produtos: [], itemVenda: {
      descricao: "Selecione um produto",
      tamanho: "250ml",
      estoque: 0,
      valor: 0
    }, produtosVenda: [],
    btn: "Iniciar venda",
    prodSelect: false,
    vendaStatus: false,
    first: true
  }

  constructor(props) {
    super(props);
    this.onHandleBtn = this.onHandleBtn.bind(this);
  }

  async componentDidMount() {
    const response = await api.get(`/produto/list/`);
    this.setState({ produtos: response.data })
  }

  onSearchSubmit = async text => {

    if (text !== '') {
      const response = await api.get(`/produto/search/${text}`);
      this.setState({ produtos: response.data })
    } else {
      const response = await api.get(`/produto/list/`);
      this.setState({ produtos: response.data })
    }
  }
  onSelectItem = async item => {
    this.setState({
      ...this.state,
      itemVenda: {
        produto_id: item._id,
        descricao: item.descricao,
        tamanho: item.tamanho,
        quantidade: 1,
        valor: item.valor.$numberDecimal,
      },
      prodSelect: true
    })
  }

  async onHandleBtn(item) {
    await this.setState({ ...this.state, vendaStatus: true })
    this.setState({
      ...this.state, itemVenda: {
        ...this.state.itemVenda, quantidade: item
      }
    })
    if (this.state.first) {
      const response = await api.post(`/venda/create/`, this.state.venda);
      await this.setState({ ...this.state, first: false })
      this.setState({
        ...this.state, venda:
        {
          _id: response.data._id,
          numero: response.data.numero,
          statusVenda: response.data.statusVenda,
          totalBruto: response.data.totalBruto.$numberDecimal,
          totalFinal: response.data.totalFinal.$numberDecimal,
          cliente_id: response.data.cliente_id,
        }
      })
      toast.success('Venda iniciada!');
    } else {
      if (this.state.prodSelect) {
        this.setState({
          ...this.state,
          produtosVenda: [
            ...this.state.produtosVenda,
            this.state.itemVenda
          ]
        })
        try {
          const valorTotal = await this.state.produtosVenda.reduce(
            (contador, produto) => contador + produto.valor * produto.quantidade,
            0
          )
          await this.setState({
            ...this.state, venda: {
              ...this.state.venda,
              totalBruto: valorTotal,
              totalFinal: valorTotal
            }
          })

          await api.put(`/venda/update/${this.state.venda._id}`, {
            numero: this.state.venda.numero,
            statusVenda: this.state.venda.statusVenda,
            totalBruto: this.state.venda.totalBruto,
            totalFinal: this.state.venda.totalFinal,
            cliente_id: this.state.venda.cliente_id,
            produtos: this.state.produtosVenda
          }, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer ".concat(localStorage.getItem('@MYAPP/token'))
            }
          });
        } catch (err) {
          toast.error('Falha ao inserir produto!');
        }
      } else {
        toast.warn('Selecione um produto!');
      }
    }
  }

  render() {
    return (
      <Styles>
        <Container fluid={true}>
          <h2 id="title">Venda</h2>
          <Row >
            <Col xs lg="4">
              <ListProdutoVenda venda={this.state.produtosVenda} onChange={value => this.setState({
                ...this.state,
                venda: {
                  ...this.state.venda,
                  totalBruto: value,
                  totalFinal: value
                }
              })} />
            </Col>
            <Col xs lg="4">
              <PainelVenda
                item={this.state.itemVenda}
                vendaStatus={this.state.vendaStatus}
                btn={this.state.btn}
                onClick={this.onHandleBtn} />
              <div id="total-venda">
                <h4>Total</h4>
                <h3>R${this.state.venda.totalFinal}</h3>
              </div>
            </Col>
            <Col xs lg="4">
              <div id="content">
                <SearchProduto onSubmit={this.onSearchSubmit} />
                <SearchResult produtos={this.state.produtos} onClick={this.onSelectItem} />
              </div>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}