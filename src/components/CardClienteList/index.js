import React, { Component } from 'react';
import api from "../../services/api"
import { Container, Row } from "react-bootstrap";
import socket from 'socket.io-client'

import CardCliente from '../CardCliente'
import { Styles } from './styles';



export default class CardClienteList extends Component {

  state = { card: [] }

  async componentDidMount() {
    this.atualizarCards();

    const response = await api.get(`/cliente/list/`);
    this.setState({ card: response.data });
  }

  atualizarCards = () => {
    // const io = socket("http://localhost:3333");
    // io.emit('connectRoom', localStorage.getItem('@MYAPP/token'))
    // io.on('file', data => {
    //   this.setState({ card: [...this.state.card, data] })
    // })
  }

  render() {
    return (
      <Styles>
        <Container fluid={true}>
          <Row>
            {this.state.card && this.state.card.map((todo, index) => (
              <CardCliente
                key={index}
                todo={todo}
              />
            ))}
          </Row>
        </Container>
      </Styles >
    );
  }
}