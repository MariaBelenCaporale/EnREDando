import './Colaboracion.css';
import aporte from '../../components/Assets/aporte.png';
import manos from '../../components/Assets/manos.png';
import gente from '../../components/Assets/gente.png';

import { Col, Container, Image, Row } from 'react-bootstrap';
const Colaboracion = () => {
    return ( 
        
        <Container>

            <Row className='quienes'>
                <Col>
                    <p className='tituloQuienes'>UNITE A NOSOTROS/AS</p>
                </Col>
            </Row>

            <Row className='parteCuadroAgen' xxl={12} xl={12} lg={12} md={12} sm={12}>
                <Col xl={3} lg={3} md={8}  sm={8} className='contenedorCuadrosAg'>
                        <Col  className='cuadrosAgenda'>
                            <Col md={8} sm={8}>
                            <h1 className='tituloAgendaUn dosA'>VOLUNTARIO/A</h1>
                            </Col>
                            <Col xxl={10} className='textosAcomo'>
                            <p className='textoQuienesAgenda dosA'>¿Quieres ser voluntaria? No dudes en contactarnos y brindarnos tu apoyo.Te invitamos a hacerlo a través de nuestros medios de contacto
                            </p>
                            </Col>
                            <Col  className='containerButtonAgenda'>
                                <button className='botonAgenda'>
                                    <a className='linkeadoAgenda' href="#proximos">VER MÁS </a>
                                </button>
                            </Col>
                        </Col>
                </Col>

                <Col xl={3} lg={3} md={8} sm={8}  className='contenedorCuadrosAg dos'>
                        <Col className='cuadrosAgenda'>
                            <Col md={8} sm={8}>
                                <h1 className='tituloAgendaUn'>IDEA / SUGERENCIA</h1>
                            </Col>
                            <Col xxl={10} className='textosAcomo'>
                                <p className='textoQuienesAgenda'>No dudes en contactarnos para compartir tus ideas, participar en nuestras actividades o brindarnos tu apoyo. ¡Tus opiniones y sugerencias son valiosas para nosotros!
                            </p>
                            </Col>
                            <Col className='containerButtonAgenda'>
                                <button className='botonAgenda verde'>
                                    <a className='linkeadoAgenda agen' href="#talleresRealizados">VER MÁS  </a>    
                                </button>
                            </Col>
                        </Col>
                </Col>

                <Col xl={3} lg={3} md={8}  sm={8} className='contenedorCuadrosAg'>
                        <Col  className='cuadrosAgenda'>
                            <Col md={8} sm={8}>
                            <h1 className='tituloAgendaUn dosA'>EXPERIENCIA</h1>
                            </Col>
                            <Col xxl={10} className='textosAcomo'>
                            <p className='textoQuienesAgenda dosA'>¿Quieres compartir tu experiencia? No dudes en contactarnos y brindarnos tu apoyo.Te invitamos a hacerlo a través de nuestros medios de contacto
                            </p>
                            </Col>
                            <Col  className='containerButtonAgenda'>
                                <button className='botonAgenda'>
                                    <a className='linkeadoAgenda' href="#proximos">VER MÁS </a>
                                </button>
                            </Col>
                        </Col>
                </Col>       
       
                </Row>
        
                   



                     
                    
                <Row className='quienes'>
                    <Col className='aporte'>
                        <p className='tituloAporta'>APORTÁ DESDE TU LUGAR</p>
                        <Image fluid src={aporte} alt='icono' />
                    </Col>
                </Row>


                <Row className='contDonar'>
                    <Col className='imagenesDonar'>
                    <Image fluid className='imagenDonar' src={manos} alt='imagen de manos' />
                    </Col>

                    <Col className='donacion'>
                    <h3 className='donar'>DONAR</h3>
                    <p className='textoDonar'>Podes ayudarnos de distintas maneras.</p>
                    <p className='textoDonar'>¡Vos elegís!</p>

                    <button className='botonAporte'>
                        <a className='linkeadoApor' href="#">VER MÁS  </a>
                    </button>
                    </Col>
                    <Col className='imagenesDonar'>
                        <Image fluid className='imagenDonar' src={gente} alt='imagen de manos' />
                    </Col>

                </Row>

        </Container>
        );
};

export default Colaboracion;