import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import {
   logout,
} from '../../services/auth';

import { Styles } from './styles';

export default class header extends Component {
   state = {
      user: ''
   }

   async componentDidMount() {
      this.setState(
         {
            user: localStorage.getItem('@MYAPP/user')
         }
      )
   }

   handleLogoff() {
      logout()
   }
   render() {
      return (
         <Styles>
            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
               <Navbar.Brand id="navbar-brand" href="/">Açaí ∆</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                     <NavDropdown title="Cadastros" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/Clientes/">Clientes</NavDropdown.Item>
                        <NavDropdown.Item href="/Produtos/">Produtos</NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
                  <Nav>
                     <Navbar.Brand id="navbar-User">
                        {this.state.user}
                        <Button variant="outline" type="submit" id="btn-logoff" onClick={this.handleLogoff}>Sair</Button>
                     </Navbar.Brand>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </Styles>
      );
   }
} 