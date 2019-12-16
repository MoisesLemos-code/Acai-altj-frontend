import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api"
import { Spinner, Container, Form, Button, Col, Row } from "react-bootstrap";
import {
    login,
} from '../../services/auth';


import { toast } from 'react-toastify';
import { Styles } from "./styles";

function Loader() {
    return (
        <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
        />
    )
}


function ButtonLoad({ isLoading, acesso, children, ...props }) {
    return (
        <Button {...props}
            className="col-lg-12"
            type="submit"
            id={acesso ? 'loginOut' : 'loginEnter'}
        >
            {isLoading ? <Loader /> : children}
        </Button>
    );
}

export default function Login({ history }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [acesso, setAcesso] = useState(false)
    const [isButtonLoading, setIsButtonLoading] = useState(false);


    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.post('/sessions', {
                name: usuario,
                password: senha
            });
            const { token, user: userData } = response.data;
            login(token, userData.name, userData.isAdmin);
            setAcesso(true)
            setTimeout(() => {
                history.push('/')
            }, 1000);
        } catch (err) {
            toast.error('Email ou senha inválido!');
            setIsButtonLoading(false);
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
                        <Form onSubmit={handleSubmit} id={acesso ? 'formOut' : 'formIn'} >
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
                                <ButtonLoad
                                    type="submit"
                                    onClick={() => {
                                        setIsButtonLoading(true);
                                    }}
                                    isLoading={isButtonLoading}
                                    acesso={acesso}
                                >
                                    Entrar
                              </ButtonLoad>
                            </Col>
                        </Form>
                    </Col>
                    <Col lg={3}></Col>

                </Row>
            </Container>
        </Styles>
    );
}
