import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../Assets/logo.png'
import mail from '../Assets/mail.png';

import íconofb from '../Assets/íconofb.png';
import íconoinstagram from '../Assets/íconoinstagram.png';
import iconoTwitter from '../Assets/iconoTwitter.png';
import íconolinkedin from '../Assets/íconolinkedin.png';
import { Link, NavLink } from 'react-router-dom';
import QuienesSomos from '../../Pages/QuienesSomos/QuienesSomos';



const Footer = () => {
    return (
        <Container className='containerFooter'>

            <Row xxl={12} xl={12} lg={12} md={12}>
                <Col xxl={2} xl={2} lg={2} className='containerLogoRedesFooter'>
                    <NavLink to={"/"}>
                        <div className='containerLogoFooter'>
                        <img className='logoFooter' src={logo} alt='logo Enredandosalud'/>
                        </div>
                    </NavLink>
                    
                    <div className='containerRedesSocialesFooter'>
                        <Link className="enlaces-cuentas" to={"https://www.facebook.com/enREDandoSalud/"}>
                        <img className='redes' src={íconofb} alt='logo Enredandosalud'/>
                        </Link>

                        <Link className="enlaces-cuentas" to={"https://www.instagram.com/enredandosalud/?hl=es"}>
                        <img className='redes' src={íconoinstagram} alt='logo Enredandosalud'/>
                        </Link>

                        <Link className="enlaces-cuentas" to={"https://twitter.com/EnredandoS"}>
                        <img className='redes' src={iconoTwitter} alt='logo Enredandosalud'/>
                        </Link>

                        <Link className="enlaces-cuentas" to={"https://www.linkedin.com/in/enredando-salud-53767920b/?originalSubdomain=ar"}>
                        <img className='redes' src={íconolinkedin} alt='logo Enredandosalud'/>
                        </Link>
                    </div>
                </Col>
         

            
                <Col xxl={2} xl={2} lg={2}   >
                <div className='containerTextFooter'> 
                    <Link to='QuienesSomos'>
                    <h4 className='footerText'>¿Quiénes somos?</h4>
                    </Link>

                    <Link to='QueHacemos'>
                    <h4 className='footerText'>¿Qué hacemos?</h4>
                    </Link>

                    <Link to='QueOfrecemos'>
                    <h4 className='footerText'>¿Qué ofrecemos?</h4>
                    </Link>

                    <Link to='Agenda'>
                    <h4 className='footerText'>Agenda</h4>
                    </Link>

                    <Link to='Colaboracion'>
                    <h4 className='footerText'>Colaboración</h4>
                    </Link>

                </div>
                </Col>


                <Col xxl={6} xl={6} lg={6} >
                <div className='contieneContact'>
                    <div className='containerDatosFooter'>
                        <div>
                            <h3 className='datosFooter'>DIRECCIÓN</h3>
                            <p className='subFooter'>Argentina, Rosario</p>
                        </div>

                        <div>
                            <h3 className='datosFooter'>CORREO</h3>
                            <p className='subFooter'>Enredandosalud@gmail.com</p>
                        </div>

                        <div>
                            <h3 className='datosFooter'>TELÉFONO</h3>
                            <p className='subFooter'>0800 222 3444</p>
                        </div>
                    </div>
                </div>
                
                </Col>
            </Row>

           


           

          

  
        </Container>
        
    );
};



export default Footer;