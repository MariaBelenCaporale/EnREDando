import './Footer.css';
import logo from '../Assets/logo.png'
import mail from '../Assets/mail.png';
import Whatsapp from '../Assets/Whatsapp.png';
import íconofb from '../Assets/íconofb.png';
import íconoinstagram from '../Assets/íconoinstagram.png';
import iconoTwitter from '../Assets/iconoTwitter.png';
import íconolinkedin from '../Assets/íconolinkedin.png';
import { Link, NavLink } from 'react-router-dom';

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
        </div>
    );
};



export default Footer;