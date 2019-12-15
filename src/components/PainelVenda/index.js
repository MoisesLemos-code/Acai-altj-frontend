import React, { Component } from 'react';
import { InputGroup, Form, FormControl, Button } from "react-bootstrap";

import { Styles } from './styles';

export default class BuscaProduto extends Component {
  _isMounted = false;
  state = {
    item: {
      descricao: String,
      tamanho: String,
      quantidade: 1,
      valor: 0
    },
    total: 0
  }
  constructor(props) {
    super(props);
    this.onHandleBtn = this.onHandleBtn.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;
    this.setState({
      item: {
        quantidade: 1, valor: 0
      },
      total: 0
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }


  handleQuantidade(e) {
    if (isNaN(e.target.value)) {
      this.setState({ ...this.state, item: { ...this.state.item, quantidade: 1 } })
    } else {
      this.setState({ ...this.state, item: { ...this.state.item, quantidade: e.target.value } })
    }
  }
  onHandleBtn(e) {
    e.preventDefault();
    this.props.onClick(this.state.item.quantidade)
  }

  render() {
    return (
      <Styles>

        <Form onSubmit={this.onHandleBtn.bind(this)}>
          <div id="Panel-Venda">
            <Form.Group id="item-descricao">
              <Form.Label id="descricao-text">{this.props.item.descricao}</Form.Label>
            </Form.Group>
            <Form.Group id="item-tamanho">
              <Form.Label id="tamanho-text">{this.props.item.tamanho}</Form.Label>
            </Form.Group>
            <Form.Group id="group-item" >
              <InputGroup className="mb-3" id="item-quantidade">
                <InputGroup.Prepend>
                  <InputGroup.Text>Qtd</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="item-venda-qtd-valor"
                  placeholder="quantidade"
                  value={this.state.item.quantidade}
                  onChange={e => this.handleQuantidade(e)} />
              </InputGroup>
              <div id="item-valor">
                <Form.Label
                  id="valor-text"
                >R${this.props.item.valor}</Form.Label>
              </div>
            </Form.Group>
            <div id="total-item">
              <h3>R${this.state.total = this.state.item.quantidade * this.props.item.valor}</h3>
            </div>
            <Button id="btn-inserir"
              type="submit"
            >
              {this.props.vendaStatus ? "Inserir" : this.props.btn}
            </Button>
          </div>
        </Form>
      </Styles>
    );
  }
}