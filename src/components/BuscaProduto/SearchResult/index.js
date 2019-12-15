import React, { Component } from 'react';

import { Styles } from './styles';
import SearchItem from '../SearchItem'

export default class SearchProduto extends Component {

  onSelectItem = async item => {
    this.props.onClick(item)
  }

  render() {
    return (
      <Styles>
        {this.props.produtos.map(i => {
          return <SearchItem
            key={i._id}
            todo={i}
            onClick={this.onSelectItem}
          />
        }
        )}
      </Styles>
    );
  }
}