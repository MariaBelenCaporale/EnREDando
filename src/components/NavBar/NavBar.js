import logo from '../Assets/logo.png';
import { Col, Container, Image, Row } from 'react-bootstrap';


import './NavBar.css';
import { NavLink } from 'react-router-dom';
// import BurguerButton from './BurguerButton';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';import React, { useState } from 'react';
import Redes from './Redes';


    
    const CollapsibleExample = () => {

      const [clicked, setClicked] = useState(false)

      const handleClick = () => {
  
          setClicked(!clicked)
      }

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

            <Col className={`lista ${clicked ? 'active' : ''}`}>
                    <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}  to='QuienesSomos' href="#QuienesSomos">¿QUIÉNES SOMOS?</NavLink>

                    <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='QueHacemos' href="#QueHacemos">¿QUÉ HACEMOS?</NavLink>
                    <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}  to='QueOfrecemos' href="#QueOfrecemos">¿QUÉ OFRECEMOS?</NavLink>
                    <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}  to='Agenda' href="#Agenda">AGENDA</NavLink>
                    <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}  to='Colaboracion' href="#Colaboracion">COLABORACIÓN</NavLink>
                    <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}  to='Contacto' href="#Contacto">CONTACTO</NavLink>
            </Col>

                   
                </Nav>
               
                </Navbar.Collapse>
          </Container>




   
        </Navbar>
      );
    }
    
    export default CollapsibleExample;
    


            

