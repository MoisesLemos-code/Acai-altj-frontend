import React, { useState } from "react";
import api from "../../services/api"
import { Styles } from "./styles";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from 'react-toastify';

export default function Login({ history }) {
  const [validated, setValidated] = React.useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  async function handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      try {
        await api.post('/user/create/', {
          name: nome,
          password: senha,
          email: email
        })
        toast.success("Usuário Cadastrado com sucesso!")
        history.push('/SignIn')
      } catch (err) {
        toast.error('Este usuário já existe!');

      }
    }

    setValidated(true);
  };

  return (
    <Styles>
      <Container fluid={true}>
        <Row>
          <Col lg={10} xs={6}>
            <h2>Açaí ∆</h2>
          </Col>
          <Col lg={2} xs={6}>
            <Button type="submit" href="/" id="loginBack">
              Voltar ao Login
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={3}></Col>
          <Col lg={5}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
              <h3>Cadastre-se</h3>
              <Form.Group>
                <Form.Label>Usuário *</Form.Label>
                <Form.Control required type="text"
                  value={nome}
                  onChange={event => setNome(event.target.value)}
                  placeholder="Digite seu usuário..." />
              </Form.Group>
              <Form.Group>
                <Form.Label>E-mail *</Form.Label>
                <Form.Control required type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder="Digite seu e-mail..." />
              </Form.Group>
              <Form.Group>
                <Form.Label>Senha *</Form.Label>
                <Form.Control required type="password"
                  value={senha}
                  onChange={event => setSenha(event.target.value)}
                  placeholder="Digite sua senha..." />
              </Form.Group>

              <Col className="col text-center">
                <Button className="col-lg-12" type="sumit" id="signUP">Enviar</Button>
              </Col>
            </Form>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </Styles>
  );
}