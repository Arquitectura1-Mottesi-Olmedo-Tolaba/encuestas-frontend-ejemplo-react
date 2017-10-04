import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render(){
    return (
      <Navbar className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <span>Pepe!!</span>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
