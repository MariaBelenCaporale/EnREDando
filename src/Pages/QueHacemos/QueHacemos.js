import { Col, Container, Row } from 'react-bootstrap';
import './QueHacemos.css';


const QueHacemos = () => {
    return (
        <Container >
            
            <Row className='quienes'>
                <Col>
                <p className='tituloQuienes'>¿QUÉ HACEMOS?</p>
                </Col>
            </Row>
       
        <div className='containerCuadroHacemos'>
            <Row lg={12} md={12} >
                <Col lg={12} md={12}>
                <h2 className='subtituloQuienesUno'>TEMÁTICAS QUE ABORDAMOS</h2>
                </Col>

                    <Row className='row' xxl={12} xl={12}  >
                        <Col xxl={3} xl={3} lg={5} md={10} sm={10} className='contieneBlanco'>
                            <div className='container fondito'>
                            <h1 className='tituloQuienesUno'>SEXUALIDAD Y GENEROS</h1>
                            </div>
                            <p className='textoQuienes'>Desafíos, obstáculos que se presentan a las mujeres y personas LGBTI+ como colectivo y cómo esto incide en el acceso a los servicios de salud.
                            </p>
                        </Col>

                        <Col xxl={3} xl={3} lg={5} md={10} sm={10} className='contieneBlanco'>
                            <div className='container fonditoDos'>
                            <h1 className='tituloQuienesUno'>VIOLENCIA DE GÉNERO</h1>
                            </div>
                            <p className='textoQuienes'>Es importante que tomemos conciencia de este problema y trabajemos juntos para ponerle fin.
                            </p>
                        </Col>

                        <Col xxl={3} xl={3} lg={5} md={10}  sm={10} className='contieneBlanco'>
                            <div className='container fondito'>
                            <h1 className='tituloQuienesUno'>EDUCACIÓN Y VISIBILIDAD</h1>
                            </div>
                            <p className='textoQuienes'>La educación es una herramienta clave para promover la igualdad y combatir la discriminación.
                            </p>
                        </Col>
              


                   
                        <Col xxl={3} xl={3} lg={5} md={10} sm={10}className='contieneBlanco'>
                            <div className='container fondito'>
                            <h1 className='tituloQuienesUno'>DERECHO A LA ALIMENTACIÓN</h1>
                            </div>
                            <p className='textoQuienes'>La alimentación como derecho humano. Disponibilidad de alimentos.  Acceso físico y económico a la alimentación. Roles de género asociados a la alimentación.
                            </p>
                        </Col>

                        <Col xxl={3} xl={3} lg={5} md={10} sm={10}className='contieneBlanco'>
                            <div className='container fonditoDos'>
                            <h1 className='tituloQuienesUno'>PROGRAMA VIH</h1>
                            </div>
                            <p className='textoQuienes'>Se brinda talleres para adolescentes y jóvenes en Argentina  para tratar el VIH. Tiene como objetivo garantizar que las voces y experiencias de los jóvenes sean escuchadas.
                            </p>
                        </Col>


                        <Col xxl={3} xl={3} lg={5} md={10} sm={10}className='contieneBlanco'>
                            <div className='container fondito'>
                            <h1 className='tituloQuienesUno'>EDUCACIÓN SEXUAL INTEGRAL</h1>
                            </div>
                            <p className='textoQuienes'>Es fundamental brindarles el apoyo necesario para que crezcan y se desarrollen de manera saludable.
                            </p>
                        </Col>
    
                   
                </Row>
                
                

                    </Row>
                    </div>
            </Container>
        
       
    );
};


export default QueHacemos;