
import mail from '../Assets/mail.png';
import Whatsapp from '../Assets/Whatsapp.png';
import íconofb from '../Assets/íconofb.png';
import íconoinstagram from '../Assets/íconoinstagram.png';
import iconoTwitter from '../Assets/iconoTwitter.png';
import íconolinkedin from '../Assets/íconolinkedin.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './Redes.css';


    
    function Redes() {
      return (
        <div>
          <div className='containerRedes'>
            <div className='contactos'>
                    <div className='mail'>
                        <img className='redM' src={mail} alt='facebook'/>
                        <p>ENREDANDOSALUD@GMAIL.COM</p>
                        </div>
                        <div className='tel'>
                        <img className='redW' src={Whatsapp} alt='facebook'/>
                        <p>+54 1 234 567-1234</p>
                        </div>
                        </div>  
                   
                <Nav className="me-autos">
                    <Nav.Link href="#redes">
   
                    
                        <img src={íconofb} alt='facebook'/>
                        <img src={íconoinstagram} alt='instagram'/>
                        <img src={iconoTwitter} alt='twitter'/>
                        <img src={íconolinkedin} alt='linkedin'/>
                    </Nav.Link>        
                </Nav>
          </div>
        </div>
      );
    }
    
    export default Redes;
    


            

