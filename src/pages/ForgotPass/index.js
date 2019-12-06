import React from "react";
import { Styles } from "./styles";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ForgotPass() {
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Styles>
      <Container fluid={true}>
        <Row>
          <Col lg={10} xs={6}></Col>
          <Col lg={2} xs={6}>
            <Button type="submit" href="/" id="loginBack">
              Voltar ao Login
          </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={3}></Col>
          <Col lg={5}>
            <h2>Açaí ∆</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h3>Recuperar acesso</h3>
              <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control required type="email" />
                <Form.Text className="text-muted">
                  *Será encaminhado um link para o seu e-mail, você poderá alterar usa senha através dele.
            </Form.Text>
              </Form.Group>
              <Col className="col text-center">
                <Button className="col-lg-12" type="submit" id="forgotEnviar">
                  Enviar
            </Button>
              </Col>
            </Form>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </Styles>
  );
}