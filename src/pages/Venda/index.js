import React, { Component } from 'react';
import api from "../../services/api"
import { Button, Container, Row, Col } from "react-bootstrap";
import { toast } from 'react-toastify';

import { Styles } from './styles';

import SearchProduto from '../../components/BuscaProduto/SearchProduto'
import SearchResult from '../../components/BuscaProduto/SearchResult'
import PainelVenda from '../../components/PainelVenda'
import ListProdutoVenda from '../../components/ListProdutoVenda'

export default class Venda extends Component {

  state = {
    venda: {
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
    },
    btn: "Iniciar venda",
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
      ...this.state, itemVenda: {
        descricao: item.descricao,
        tamanho: item.tamanho,
        estoque: item.estoque.$numberDecimal,
        valor: item.valor.$numberDecimal
      }
    })
  }
  async onHandleBtn() {
    await this.setState({ ...this.state, vendaStatus: true })

    if (this.state.first) {
      await api.post(`/venda/create/`, this.state.venda);
      await this.setState({ ...this.state, first: false })
      toast.success('Venda iniciada!');
    }

  }

  render() {
    return (
      <Styles>
        <Container fluid={true}>
          <h2 id="title">Venda</h2>
          <Row >
            <Col xs lg="4">
              <ListProdutoVenda />
            </Col>
            <Col xs lg="4">
              <PainelVenda item={this.state.itemVenda} />
              <div id="total-venda">
                <h4>Total</h4>
                <h3>R${this.state.venda.totalFinal}</h3>
              </div>
              <Button id="btn-inserir"
                onClick={this.onHandleBtn.bind(this)}
              >
                {this.state.vendaStatus ? "Inserir" : this.state.btn}
              </Button>
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