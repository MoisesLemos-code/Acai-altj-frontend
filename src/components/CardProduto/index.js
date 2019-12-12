import React, { Component } from 'react';
import { Card, Container, Row, Button, Form, Col } from "react-bootstrap";
import api from "../../services/api"
import { toast } from 'react-toastify';

import { Styles } from './styles';


export default class CardProduto extends Component {
  state = {
    descricao: String,
    tamanho: '250ml',
    estoque: 0,
    valor: 0,
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
        descricao: file.descricao,
        tamanho: file.tamanho,
        estoque: file.estoque.$numberDecimal,
        valor: file.valor.$numberDecimal,
        id: file._id,
        status: true
      }
    )
  }
  async cardDelete(file) {
    await api.delete(`/produto/delete/${file._id}`, {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem('@MYAPP/token'))
      }
    });
    window.location.reload()
  }

  async cardUpdate(file, event) {
    if (isNaN(file.estoque)) {
      event.preventDefault()
      toast.warn('Valor de estoque inválido!');
    } if (isNaN(file.valor)) {
      event.preventDefault()
      toast.warn('Valor de produto inválido!');
    } if (!isNaN(file.estoque) && !isNaN(file.valor)) {
      event.preventDefault()
      await api.put(`/produto/update/${file.id}`, {
        descricao: file.descricao,
        tamanho: file.tamanho,
        estoque: file.estoque,
        valor: file.valor
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(localStorage.getItem('@MYAPP/token'))
        }
      });
      window.location.reload();
    }
  }


  render() {
    return (
      <Styles>
        <Container fluid={true}>
          <Row>
            <Card bg="dark" text="white" style={{ width: '18rem' }}>
              <Card.Header>{this.props.todo.descricao}</Card.Header>
              <Card.Body>
                < Form onSubmit={e => this.cardUpdate(this.state, e)} id="formCard">
                  {this.state.status ?
                    <>
                      <Form.Group >
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control required type="text" value={this.state.descricao} placeholder="Digite a descrição" onChange={event => this.setState({ ...this.state, descricao: event.target.value })} />
                        <Form.Label>Tamanho</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={event => this.setState({ ...this.state, tamanho: event.target.value })}
                        >
                          <option value="250ml">250ml</option>
                          <option value="300ml">300ml</option>
                          <option value="400ml">400ml</option>
                          <option value="500ml">500ml</option>
                          <option value="600ml">600ml</option>
                          <option value="770ml">770ml</option>
                        </Form.Control>
                        <Form.Label>Estoque</Form.Label>
                        <Form.Control required type="text" value={this.state.estoque} placeholder="Digite o valor de estoque" onChange={event => this.setState({ ...this.state, estoque: event.target.value })} />
                        <Form.Label>Valor</Form.Label>
                        <Form.Control required type="text" value={this.state.valor} placeholder="Digite o valor" onChange={event => this.setState({ ...this.state, valor: event.target.value })} />
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
                        Tamanho: {this.props.todo.tamanho}
                      </Card.Text>
                      <Card.Text>
                        Estoque: {this.props.todo.estoque.$numberDecimal}
                      </Card.Text>
                      <Card.Text>
                        Valor: {this.props.todo.valor.$numberDecimal}
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