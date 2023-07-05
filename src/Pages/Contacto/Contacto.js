import contacto from '../../components/Assets/contacto.png';
import './Contacto.css';

import { Col, Container, Image, Row } from 'react-bootstrap';

const Contacto = () => {
    return (

        <Container>
            <Row className='quienes'>
                <Col>
                    <p className='tituloQuienes'>CONTACTO</p>
                </Col>
            </Row>

            <Row className='contenedorCon'>
                <Col>
                    <h2> No dudes en escribirnos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque enim erat, a lacinia mi accumsan nec. Etiam sodales nulla eu gravida porta. Vivamus eleifend porttitor arcu et vehicula. Integer id eros luctus, laoreet nisi ut, egestas ipsum. </p>

                    <p>Enredandosalud@gmail.com</p>
                </Col>
                
            
           
                <Col className='fotoCont'>
                <Image fluid src={contacto} alt='Foto contacto'/>
                </Col>
            </Row>


               
        </Container>
    );
};

export default Contacto;