
import mail from '../Assets/mail.png';
import Whatsapp from '../Assets/Whatsapp.png';
import íconofb from '../Assets/íconofb.png';
import íconoinstagram from '../Assets/íconoinstagram.png';
import iconoTwitter from '../Assets/iconoTwitter.png';
import íconolinkedin from '../Assets/íconolinkedin.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './Redes.css';


    
    function Redes() {
      return (
        <div>
          <div className='containerRedes'>
            <div className='contactos'>
                    <div className='mail'>
                        <img className='redM' src={mail} alt='Mail'/>
                        <p>ENREDANDOSALUD@GMAIL.COM</p>
                        </div>
                        <div className='tel'>
                        <img className='redW' src={Whatsapp} alt='Whatsapp'/>
                        <p>+54 9 341 545-5341</p>
                        </div>
                        </div>  
                   
                <Nav className="me-autos">
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
                </Nav>
          </div>
        </div>
      );
    }
    
    export default Redes;
    


            

