import contacto from '../../components/Assets/contacto.png';
import './Contacto.css';
import { Link} from 'react-router-dom';
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
                <Col className='uniteLink'>
                    <h2> Unite a nosotros/as</h2>
                    <Link className='botonColabMas ros' to={"https://docs.google.com/forms/d/e/1FAIpQLSeM23Oww-Rj26ogxHsGd6df7P3TvbV5K-LNNFmBTG5Vubc_qg/viewform"}>
                        <p className='linkeadoColabMas'>UNIRME</p>
                     </Link>

                </Col>
                
            
           
                <Col className='fotoCont'>
                <Image fluid src={contacto} alt='Foto contacto'/>
                </Col>
            </Row>


               
        </Container>
    );
};

export default Contacto;