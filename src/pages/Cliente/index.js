import React, { Component } from 'react';
import api from "../../services/api"
import { Form, Button, Modal, Card, Container, Row } from "react-bootstrap";
import { toast } from 'react-toastify';
// import socket from 'socket.io-client'

import CardCliente from '../../components/CardCliente'
import { Styles } from './styles';



export default class Cliente extends Component {

  state = { card: [], showModal: false }
  cliente = {
    nome: String,
    endereco: String,
    email: String
  }

  async componentDidMount() {
    this.atualizarCards();
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    const response = await api.get(`/cliente/list/`);
    this.setState({ card: response.data, showModal: false, loading: true });
  }

  atualizarCards = () => {
    // const io = socket("http://localhost:3333");
    // io.emit('connectRoom', localStorage.getItem('@MYAPP/token'))
    // io.on('file', data => {
    //   this.setState({ card: [...this.state.card, data] })
    // })
  }

  handleShow() {
    this.setState({
      ...this.state, showModal: true
    })
  }

  handleClose() {
    this.setState({
      ...this.state, showModal: false
    })
  }

  alertLoading() {
    toast.warn('Aguarde o carregamento!')
  }

  async handleSubmit(e) {
    e.preventDefault()
    this.setState({
      ...this.state, showModal: false
    })
    await api.post(`/cliente/create/`, this.cliente);
    toast.success('Cliente cadastrado com sucesso!');
    window.location.reload()
  }


  render() {
    return (
      <Styles>
        <Container fluid={true}>
          <h2 id="title">Cadastro de Clientes</h2>
          <Row>
            <Modal show={this.state.showModal} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cadastrar novo cliente</Modal.Title>
              </Modal.Header>
              <Form onSubmit={this.handleSubmit} id="panel">
                <Modal.Body>
                  <Form.Group >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control required type="text" placeholder="Digite o nome do cliente" onChange={event => this.cliente.nome = event.target.value} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control required type="text" placeholder="Digite o endereço do cliente" onChange={event => this.cliente.endereco = event.target.value} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control required type="email" placeholder="Digite o e-mail do cliente" onChange={event => this.cliente.email = event.target.value} />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={(this.handleClose)}>
                    Fechar
          </Button>
                  <Button type="submit" id="salvarCliente">
                    Salvar
          </Button>
                </Modal.Footer>
              </Form>
            </Modal>

            <Card text="white" id="addCliente" onClick={this.state.loading ? this.handleShow : this.alertLoading}>
              <Card.Text id="textAdd">
                +
             </Card.Text>
            </Card>
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