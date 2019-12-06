import React, { useState } from "react";
import api from "../../services/api"
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import Header from '../../components/Header'
import CardClienteList from '../../components/CardClienteList'

import { Styles } from './styles';

export default function Cliente() {
  // const [validated, setValidated] = React.useState(false);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmitValid = event => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // } else {
    api.post(`/cliente/create/`, {
      nome: nome,
      endereco: endereco,
      email: email
    });
    console.log({
      nome: nome,
      endereco: endereco,
      email: email
    })
    event.preventDefault();
    // }
  };


  return (
    <Styles>
      <Header></Header>
      <main>
        <Container fluid={true}>
          <Row>
            <Form onSubmit={handleSubmitValid} id="panel">
              <Form.Group >
                <Form.Label>Nome</Form.Label>
                <Form.Control required type="text" placeholder="Digite o nome do cliente" onChange={event => setNome(event.target.value)} />
                <Form.Label>Endereço</Form.Label>
                <Form.Control required type="text" placeholder="Digite o endereço do cliente" onChange={event => setEndereco(event.target.value)} />
                <Form.Label>E-mail</Form.Label>
                <Form.Control required type="email" placeholder="Digite o e-mail do cliente" onChange={event => setEmail(event.target.value)} />
                <Col className="col text-center">
                  <Button className="col-lg-12" type="submit" id="salvarCliente">
                    Salvar
                       </Button>
                </Col>
              </Form.Group>
            </Form>
            <Col>
              <CardClienteList />
            </Col>
          </Row>
        </Container>
        <h1>Açaí ∆</h1>
      </main>
    </Styles >
  );
}
