import React, { Component } from 'react';
import { Card } from "react-bootstrap";

import { Styles } from './styles';

export default class SearchProduto extends Component {

  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick(file) {
    this.props.onClick(file)
  }

  render() {
    return (
      <Styles>
        <Card onClick={this.onHandleClick.bind(this, this.props.todo)}>
          <Card.Body>
            <Card.Title>{this.props.todo.descricao}</Card.Title>
            <Card.Text id="Search-estoque">
              Estoque disponível: {this.props.todo.estoque.$numberDecimal}
            </Card.Text>
            <Card.Text id="Search-tamanho">
              Tamanho: {this.props.todo.tamanho}
            </Card.Text>
            <Card.Text id="Search-valor">
              Valor: R${this.props.todo.valor.$numberDecimal}
            </Card.Text>
          </Card.Body>
        </Card>
      </Styles>
    );
  }
}