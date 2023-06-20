import logo from '../Assets/logo.png';


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
                <NavLink to='/' href="#home">
                <img src={logo} alt='logo enredandosalud'/>
            </NavLink>
                    <NavLink className='link' to='QuienesSomos' href="#QuienesSomos">¿QUIÉNES SOMOS?</NavLink>
                    <NavLink className='link' to='QueHacemos' href="#QueHacemos">¿QUÉ HACEMOS?</NavLink>
                    <NavLink className='link' to='QueOfrecemos' href="#QueOfrecemos">¿QUÉ OFRECEMOS?</NavLink>
                    <NavLink className='link' to='Agenda' href="#Agenda">AGENDA</NavLink>
                    <NavLink className='link' to='Colaboracion' href="#Colaboracion">COLABORACIÓN</NavLink>
                    <NavLink className='link' to='Contacto' href="#Contacto">CONTACTO</NavLink>
                </Nav>
               
                </Navbar.Collapse>
          </Container>




   
        </Navbar>
      );
    }
    
    export default CollapsibleExample;
    


            

