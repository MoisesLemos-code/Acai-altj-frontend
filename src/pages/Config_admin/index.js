import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";

import { Styles } from './styles';



export default class Produto extends Component {


  render() {
    return (
      <Styles>
        <Container fluid={true}>
          <h2 id="title">Configuração Geral</h2>
          <Row>

          </Row>
        </Container>
      </Styles >
    );
  }
}