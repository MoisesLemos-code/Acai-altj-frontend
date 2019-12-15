import React, { Component } from 'react';

import { Styles } from './styles';


export default class ListProdutoVenda extends Component {

  onSelectItem = async item => {
    this.props.onClick(item)
  }

  render() {
    return (
      <Styles>
        <div id="list-produto">
          <h2>LISTA</h2>
        </div>
      </Styles>
    );
  }
}