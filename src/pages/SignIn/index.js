import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api"
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import {
    login,
} from '../../services/auth';


import { toast } from 'react-toastify';
import { Styles } from "./styles";

export default function Login({ history }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.post('/sessions', {
                name: usuario,
                password: senha
            });
            login(response.data.token, response.data.user.name);
            history.push('/')
        } catch (err) {
            toast.error('Email ou senha inválido!');
        }
    }


    return (
        <Styles>
            <Container fluid={true}>
                <Row >
                    <Col lg={10}></Col>
                    <Col lg={2} id="head">
                        <Button type="submit" href="/SignUp/" id="loginSignUp">
                            Cadastre-se
                       </Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={3}></Col>
                    <Col lg={5}>
                        <h2>Açaí ∆</h2>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group controlId="formUser">
                                <Form.Label>Usuário</Form.Label>
                                <Form.Control required type="text"
                                    placeholder="Digite seu usuário..."
                                    value={usuario}
                                    onChange={event => setUsuario(event.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control required type="password"
                                    placeholder="Digite sua senha..."
                                    value={senha}
                                    onChange={event => setSenha(event.target.value)} />
                                <Link to="/ForgotPass/"> <Form.Label id="loginForgot">Esqueci a senha</Form.Label> </Link>
                            </Form.Group>
                            {/* <Form.Group controlId="formCheckbox">
                                <Form.Check type="checkbox" label="Manter conectado" />
                            </Form.Group> */}
                            <Col className="col text-center">
                                <Button
                                    className="col-lg-12"
                                    type="submit"
                                    id="loginEnter"
                                >
                                    Entrar
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
