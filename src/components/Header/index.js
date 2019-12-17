import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown, DropdownButton } from "react-bootstrap";
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
                     <Nav.Link href="/Venda/">Venda</Nav.Link>
                  </Nav>
                  <Nav>
                     <DropdownButton
                        alignRight
                        title={this.state.user}
                        id="dropdown-menu-align-right"
                     >
                        <Dropdown.Item href="/Config/">Configurações</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item id="btn-logoff" href="/SignIn" onClick={this.handleLogoff}>Sair</Dropdown.Item>
                     </DropdownButton>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </Styles>
      );
   }
} 