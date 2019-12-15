import React, { Component } from 'react';
import { ListGroup } from "react-bootstrap";

import { Styles } from './styles';


export default class ListProdutoVenda extends Component {


  render() {
    return (
      <Styles>
        <ListGroup.Item>
          <p>{this.props.todo.descricao}</p>
          <div id="item-info">
            <p id="qtd-info">Qtd: {this.props.todo.quantidade.$numberDecimal}un</p>
            <p id="valor-info">R$: {this.props.todo.valor.$numberDecimal}</p>
          </div>
        </ListGroup.Item>
      </Styles>
    );
  }
}