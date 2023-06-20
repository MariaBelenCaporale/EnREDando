import contacto from '../../components/Assets/contacto.png';
import './Contacto.css';

const Contacto = () => {
    return (
        <div className='todoContacto'>
            <div className='containerContacto'>
                <div className='contacto'>
                    <p className='tituloContacto'>CONTACTO</p>
                </div>
            </div>

            <div className='containerCont'>
                <div className='todoContactoText'>
                <div className='TextosContacto'>
                    <h2> No dudes en escribirnos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque enim erat, a lacinia mi accumsan nec. Etiam sodales nulla eu gravida porta. Vivamus eleifend porttitor arcu et vehicula. Integer id eros luctus, laoreet nisi ut, egestas ipsum. </p>

                    <p>Enredandosalud@gmail.com</p>
                </div>

                <div>
                    <img src={contacto} alt='Foto contacto'/>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Contacto;