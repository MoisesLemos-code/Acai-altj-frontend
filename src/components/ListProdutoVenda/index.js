import React, { Component } from 'react';
import api from "../../services/api"
import { ListGroup } from "react-bootstrap";

import { Styles } from './styles';
import ListProdutoVendaItem from '../ListProdutoVendaItem'

export default class ListProdutoVenda extends Component {
  state = {
    produtos: []
  }

  // async componentDidUpdate(props) {
  //   if (this.props.venda !== undefined) {
  //     const response = this.props.venda//await api.get(`/venda/${this.props.venda._id}`);
  //     await this.setState({ produtos: response })

  // const valorTotal = await response.reduce(
  //   (contador, produto) => contador + produto.valor.$numberDecimal * produto.quantidade.$numberDecimal,
  //   0
  // )
  //     this.props.onChange(valorTotal)
  //   }
  // }

  render() {
    return (
      <Styles>
        <div id="list-produto">
          <ListGroup>
            {this.props.venda !== undefined && this.props.venda.map(i => {
              return <ListProdutoVendaItem
                key={i._id}
                todo={i}
                onClick={this.onSelectItem}
              />
            }
            )}
          </ListGroup>
        </div>
      </Styles>
    );
  }
}