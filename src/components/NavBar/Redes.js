
import mail from '../Assets/mail.png';
import Whatsapp from '../Assets/Whatsapp.png';
import íconofb from '../Assets/íconofb.png';
import íconoinstagram from '../Assets/íconoinstagram.png';
import iconoTwitter from '../Assets/iconoTwitter.png';
import íconolinkedin from '../Assets/íconolinkedin.png';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './Redes.css';

import { Col, Container, Image, Row } from 'react-bootstrap';

    
    function Redes() {
      return (
        <Container>
        
          <Row className='redesA'>
            <Col xxl={12} xl={12} lg={12} md={12}  className="mailW">
              <Col className='cont'>
              <Image  src={mail} alt='Mail'/>
              <p className='mail'>ENREDANDOSALUD@GMAIL.COM</p>
              </Col>
              <Col className='cont'>
              <Image fluid src={Whatsapp} alt='Whatsapp'/>
              <p className='mail'>+54 9 341 545-5341</p>
              </Col>
              
              <Col xxl={2} xl={3} lg={3} md={4} >
                    <Nav.Link href="#redes">

                      <Link  to={"https://www.facebook.com/enREDandoSalud/"}>
                      <img className='redes' src={íconofb} alt='logo Enredandosalud'/>
                      </Link>

                      <Link to={"https://www.instagram.com/enredandosalud/?hl=es"}>
                      <img className='redes' src={íconoinstagram} alt='logo Enredandosalud'/>
                      </Link>

                      <Link to={"https://twitter.com/EnredandoS"}>
                      <img className='redes' src={iconoTwitter} alt='logo Enredandosalud'/>
                      </Link>

                      <Link to={"https://www.linkedin.com/in/enredando-salud-53767920b/?originalSubdomain=ar"}>
                      <img className='redes' src={íconolinkedin} alt='logo Enredandosalud'/>
                      </Link>
                    </Nav.Link>
              </Col>
            </Col>

          

                
          </Row>

        </Container>
      );
    }
    
    export default Redes;
    


            

