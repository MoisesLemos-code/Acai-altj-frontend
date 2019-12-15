import React, { Component } from 'react';
import { InputGroup, Form, FormControl, Container } from "react-bootstrap";

import { Styles } from './styles';

export default class BuscaProduto extends Component {

  state = {
    quantidade: 1,
    valor: 0,
    total: 0
  }

  async componentDidMount() {
    this.setState({
      quantidade: 1, valor: 0, total: 0
    });
  }

  handleQuantidade(e) {
    if (isNaN(e.target.value)) {
      this.setState({ ...this.state, quantidade: 1 })
    } else {
      this.setState({ ...this.state, quantidade: e.target.value })
    }
  }

  handleValor(e) {
    if (isNaN(e.target.value)) {
      this.setState({ ...this.state, valor: 1 })
    } else {
      this.setState({ ...this.state, valor: e.target.value })
    }
  }

  render() {
    return (
      <Styles>
        <div id="Panel-Venda">
          <Form>
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
                  value={this.state.quantidade}
                  onChange={e => this.handleQuantidade(e)} />
              </InputGroup>
              <div id="item-valor">
                <Form.Label
                  id="valor-text"
                >R${this.props.item.valor}</Form.Label>
              </div>
            </Form.Group>
            <div id="total-item">
              <h3>R${this.state.total = this.state.quantidade * this.props.item.valor}</h3>
            </div>
          </Form>
        </div>
      </Styles>
    );
  }
}