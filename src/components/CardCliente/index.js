import React, { Component } from 'react';
import { Card, Container, Row, Button, Form, Col } from "react-bootstrap";
import api from "../../services/api"

import { Styles } from './styles';


export default class CardCliente extends Component {
  state = {
    nome: "",
    endereco: "",
    email: "",
    id: "",
    status: false
  }
  constructor(props) {
    super(props);
    this.cardEdit = this.cardEdit.bind(this);
  }

  cardEdit(file) {
    this.setState(
      {
        nome: file.nome,
        endereco: file.endereco,
        email: file.email,
        id: file._id,
        status: true
      }
    )
  }
  cardDelete(file) {
    api.delete(`/cliente/delete/${file._id}`, {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem('@MYAPP/token'))
      }
    });
    window.location.reload()
  }
  cardUpdate(file) {
    api.put(`/cliente/update/${file.id}`, {
      nome: file.nome,
      endereco: file.endereco,
      email: file.email
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer ".concat(localStorage.getItem('@MYAPP/token'))
      }
    });
  }


  render() {
    return (
      <Styles>
        <Container fluid={true}>
          <Row>
            <Card bg="dark" text="white" style={{ width: '18rem' }}>
              <Card.Header>{this.props.todo.nome}</Card.Header>
              <Card.Body>
                < Form onSubmit={this.cardUpdate.bind(this, this.state)} id="formCard">
                  {this.state.status ?
                    <>
                      <Form.Group >
                        <Form.Label>Nome</Form.Label>
                        <Form.Control required type="text" value={this.state.nome} placeholder="Digite o nome do cliente" onChange={event => this.setState({ ...this.state, nome: event.target.value })} />
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control required type="text" value={this.state.endereco} placeholder="Digite o endereço do cliente" onChange={event => this.setState({ ...this.state, endereco: event.target.value })} />
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control required type="email" value={this.state.email} placeholder="Digite o e-mail do cliente" onChange={event => this.setState({ ...this.state, email: event.target.value })} />
                        <Col className="col">
                          <Button variant="secondary" className="col-lg-12 btnEdit" onClick={event => this.setState({ ...this.state, status: false })}>
                            Cancelar
                          </Button>
                          <Button className="col-lg-12 btn-card btnEdit" type="submit">
                            Salvar
                        </Button>
                        </Col>
                      </Form.Group>

                    </>
                    :
                    <>
                      <Card.Text>
                        Endereço: {this.props.todo.endereco}
                      </Card.Text>
                      <Card.Text>
                        E-mail: {this.props.todo.email}
                      </Card.Text>
                      <div id="infoBtn">
                        <Button variant="light" onClick={this.cardDelete.bind(this, this.props.todo)}>Excluir</Button>
                        <Button className="btn-card" onClick={this.cardEdit.bind(this, this.props.todo)} >Editar</Button>
                      </div>
                    </>
                  }
                </Form >
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Styles >
    );
  }
}