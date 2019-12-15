import React, { Component } from 'react';
import { Form, FormControl, Button } from "react-bootstrap";

import { Styles } from './styles';


export default class SearchProduto extends Component {

  state = { text: '' }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.text)
  }

  render() {
    return (
      <Styles>
        <Form onSubmit={this.onFormSubmit} id="form-search">
          <FormControl type="text"
            placeholder="Digite a descrição do produto..."
            className="mr-sm-2"
            id="searchInput"
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
          />
          <Button variant="outline"
            type="submit"
            id="btn-search"
          >Pesquisar</Button>
        </Form>
      </Styles>
    );
  }
}