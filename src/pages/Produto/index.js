import React, { Component } from 'react';
import api from "../../services/api"
import { InputGroup, Form, Button, Modal, Card, Container, Row, Col } from "react-bootstrap";
import { toast } from 'react-toastify';
// import socket from 'socket.io-client'

import CardProduto from '../../components/CardProduto'
import { Styles } from './styles';



export default class Produto extends Component {

  state = { card: [], showModal: false }
  produto = {
    descricao: String,
    tamanho: '250ml',
    estoque: 0,
    valor: 0
  }

  async componentDidMount() {
    this.atualizarCards();
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    const response = await api.get(`/produto/list/`);
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

  async handleSubmit(event) {

    if (isNaN(this.produto.estoque)) {
      event.preventDefault()
      toast.warn('Valor de estoque inválido!');
    } if (isNaN(this.produto.valor)) {
      event.preventDefault()
      toast.warn('Valor de produto inválido!');
    } if (!isNaN(this.produto.estoque) && !isNaN(this.produto.valor)) {
      event.preventDefault()
      this.setState({
        ...this.state, showModal: false
      })
      await api.post(`/produto/create/`, this.produto);
      toast.success('Produto cadastrado com sucesso!');
      window.location.reload();
    }
  }

  render() {
    return (
      <Styles>
        <Container fluid={true}>
          <h2 id="title">Cadastro de Produtos</h2>
          <Row>
            <Modal show={this.state.showModal} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cadastrar novo produto</Modal.Title>
              </Modal.Header>
              <Form onSubmit={e => this.handleSubmit(e)} id="panel">
                <Modal.Body>
                  <Form.Row>
                    <Col as={Col} md="7">
                      <Form.Group>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control required type="text" placeholder="Digite a descrição do produto" onChange={event => this.produto.descricao = event.target.value} />
                      </Form.Group>
                    </Col>
                    <Col as={Col} md="3">
                      <Form.Group >
                        <Form.Label>Tamanho</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={e => this.produto.tamanho = e.target.value}
                        >
                          <option value="250ml">250ml</option>
                          <option value="300ml">300ml</option>
                          <option value="400ml">400ml</option>
                          <option value="500ml">500ml</option>
                          <option value="600ml">600ml</option>
                          <option value="770ml">770ml</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col as={Col} md="6">
                      <Form.Group>
                        <Form.Label>Estoque</Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>Qtd</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control required type="text" placeholder="Digite a quantidade" onChange={event => this.produto.estoque = event.target.value} />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col as={Col} md="5">
                      <Form.Group>
                        <Form.Label>Valor</Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>R$</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control required type="text" placeholder="Digite o valor" onChange={event => this.produto.valor = event.target.value} />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Form.Row>


                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={(this.handleClose)}>
                    Fechar
          </Button>
                  <Button variant="primary" type="submit">
                    Salvar
          </Button>
                </Modal.Footer>
              </Form>
            </Modal>

            <Card text="white" id="addProduto" onClick={this.state.loading ? this.handleShow : this.alertLoading}>
              <Card.Text id="textAdd">
                +
             </Card.Text>
            </Card>
            {this.state.card && this.state.card.map((todo, index) => (
              <CardProduto
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