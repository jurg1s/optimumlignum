import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import React, { useState, useEffect } from "react";

import "./Navbar.css";

export default function navbar() {






  return (


    
    <Navbar

    
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"} >
          <img
            alt=""
            src="/images/logo/optimumlignum_logo-wood-grad.svg"
            width="121"
            height="35"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle   aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav>
            <Nav className="gap-3">
              <NavDropdown   title="Baldai" id="collasible-nav-dropdown"  renderMenuOnMount={true}>
                <NavDropdown.Item
                  as={Link}
                  to={"/baldurestauravimas"}
                  eventKey="1"
                >
                  baldų restauravimas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/baldugamyba"} eventKey="2">
                  vienetinų baldų gamyba
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/interjeras"} eventKey="3">
                  interjeras
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Įgyvendinti projektai"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item as={Link} to={"/visuomeniniai"} eventKey="4">
                  Visuomeniniai projektai
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/individualus"} eventKey="5">
                  Individualūs projektai
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/apiemus"} eventKey="6">
                Apie mus
              </Nav.Link>
              <Nav.Link  as={Link} to={"/kontaktai"} eventKey="7">
                Kontaktai
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

