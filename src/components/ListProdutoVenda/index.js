import React, { Component } from 'react';
import api from "../../services/api"
import { ListGroup } from "react-bootstrap";

import { Styles } from './styles';
import ListProdutoVendaItem from '../ListProdutoVendaItem'

export default class ListProdutoVenda extends Component {
  state = {
    produtos: []
  }

  async componentDidUpdate(props) {
    if (this.props.venda._id !== 0) {
      const response = await api.get(`/venda/${this.props.venda._id}`);
      this.setState({ produtos: response.data.produtos })
    }
  }

  render() {
    return (
      <Styles>
        <div id="list-produto">
          <ListGroup>
            {this.state.produtos && this.state.produtos.map(i => {
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