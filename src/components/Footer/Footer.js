import './Footer.css';
import logo from '../Assets/logo.png'
import mail from '../Assets/mail.png';
import Wsp from '../Assets/Wsp.png';
import íconofb from '../Assets/íconofb.png';
import íconoinstagram from '../Assets/íconoinstagram.png';
import iconoTwitter from '../Assets/iconoTwitter.png';
import íconolinkedin from '../Assets/íconolinkedin.png';
import { Link, NavLink } from 'react-router-dom';
import QuienesSomos from '../../Pages/QuienesSomos/QuienesSomos';

const Footer = () => {
    return (
        <div className='containerFooter'>
           
            <div className='containerLogoRedesFooter'>
            <NavLink to={"/"}>
                <div className='containerLogoFooter'>
                <img className='logoFooter' src={logo} alt='logo Enredandosalud'/>
                </div>
            </NavLink>

                <div className='containerRedesSocialesFooter'>
                    <Link className="enlaces-cuentas" to={""}>
                    <img className='redes' src={íconofb} alt='logo Enredandosalud'/>
                    </Link>

                    <Link className="enlaces-cuentas" to={""}>
                    <img className='redes' src={íconoinstagram} alt='logo Enredandosalud'/>
                    </Link>

                    <Link className="enlaces-cuentas" to={""}>
                    <img className='redes' src={iconoTwitter} alt='logo Enredandosalud'/>
                    </Link>

                    <Link className="enlaces-cuentas" to={""}>
                    <img className='redes' src={íconolinkedin} alt='logo Enredandosalud'/>
                    </Link>
                </div>

            </div>
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
                    <p className='subFooter'>+54 1 234 567-1234</p>
                </div>
 
            
               
            </div>

            <div className='containerWsp'>
                <button className='botonWsp'>
                    <img src={Wsp} alt='icono de whatsapp' />
                </button>
            </div>
            </div>

        </div>
    );
};



export default Footer;