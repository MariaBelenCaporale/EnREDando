import logo from '../Assets/logo.png';
import mail from '../Assets/mail.png';
import Whatsapp from '../Assets/Whatsapp.png';
import íconofb from '../Assets/íconofb.png';
import íconoinstagram from '../Assets/íconoinstagram.png';
import iconoTwitter from '../Assets/iconoTwitter.png';
import íconolinkedin from '../Assets/íconolinkedin.png';

import './NavBar.css';
import { NavLink } from 'react-router-dom';
// import BurguerButton from './BurguerButton';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';import React, { useState } from 'react';
import Redes from './Redes';


    
    function CollapsibleExample() {
      return (
        <Navbar collapseOnSelect expand="lg">
          <Container>
<Redes />

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Navbar.Brand href="#home">
                <img src={logo} alt='logo enredandosalud'/>
            </Navbar.Brand>
                    <Nav.Link href="#QuienesSomos">¿QUIÉNES SOMOS?</Nav.Link>
                    <Nav.Link href="#QueHacemos">¿QUÉ HACEMOS?</Nav.Link>
                    <Nav.Link href="#QueOfrecemos">¿QUÉ OFRECEMOS?</Nav.Link>
                    <Nav.Link href="#Agenda">AGENDA</Nav.Link>
                    <Nav.Link href="#Colaboracion">COLABORACIÓN</Nav.Link>
                    <Nav.Link href="#Contacto">CONTACTO</Nav.Link>
                </Nav>
               
                </Navbar.Collapse>
          </Container>




   
        </Navbar>
      );
    }
    
    export default CollapsibleExample;
    


            

