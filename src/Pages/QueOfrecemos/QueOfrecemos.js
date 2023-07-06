import './QueOfrecemos.css';
import hoja from '../../components/Assets/ofrecemos/hoja.png';
import carpeta from '../../components/Assets/ofrecemos/carpeta.png';
import parlante from '../../components/Assets/ofrecemos/parlante.png';
import chicosDos from '../../components/Assets/ofrecemos/chicosDos.png';
import bannerUno from '../../components/Assets/ofrecemos/bannerUno.png';
import bannerDos from '../../components/Assets/ofrecemos/bannerDos.png';
import bannerTres from '../../components/Assets/ofrecemos/bannerTres.png';
import capaDos from '../../components/Assets/ofrecemos/capaDos.png';
import materialDos from '../../components/Assets/ofrecemos/materialDos.png';

import { Col, Container, Image, Row } from 'react-bootstrap';

const QueOfrecemos = () => {
    return (
        
        <Container>

            <Row className='quienes'>
                <Col>
                    <p className='tituloQuienes'>¿QUÉ OFRECEMOS?</p>
                </Col>
            </Row>

            <Row className='parteCuadroOfre' xxl={12} xl={12} lg={12} md={12} >
                <Col xl={3} lg={3} md={12} className='contenedorCuadrosOfre'>
                    <Col className='iconoOfrecemos'>
                    <Image fluid className='imgOfrecemos' src={hoja} alt='icono talleres' />
                    </Col>
                    <Col className='cuadrosOfre'>
                        <h1 className='tituloQuienesUno'>TALLERES</h1>
                        <p className='textoOfrecemos'>Ofrecemos talleres de diferentes temas dirigidos a adolescentes y jóvenes, brindando información y herramientas valiosas para mejorar la calidad de vida de las personas. Es una oportunidad para seguir aprendiendo.
                        </p>
                        <Col className='botonMasOf'>
                        <button className='botonOfrecemosTa'>
                        <a className='linkeadoTa' href="#talleres">VER MÁS  </a>
                        </button>
                        </Col>
                    </Col>
                </Col>

                <Col xl={3} lg={3} md={12} className='contenedorCuadrosOfre'>
                    <Col className='iconoOfrecemos'>
                    <Image fluid className='imgOfrecemos' src={parlante} alt='icono capacitaciones' />
                    </Col>
                
                    <Col className='cuadrosOfre'>
                        <h1 className='tituloQuienesUno'>CAPACITACIONES</h1>
                        <p className='textoOfrecemos'>¡Desarrolla tus habilidades y alcanza tu máximo potencial con nuestra capacitación!  ¿Estás listo/a para impulsar tu carrera y adquirir conocimientos valiosos? ¡No busques más! 
                        </p>
                        <Col className='botonMasOf'>
                        <button className='botonOfrecemosTa'>
                        <a className='linkeadoTa' href="#talleres">VER MÁS  </a>
                        </button>
                        </Col>
                    </Col>
                </Col>

                <Col xl={3} lg={3} md={12} className='contenedorCuadrosOfre'>
                <Col className='iconoOfrecemos'>
                <Image fluid className='imgOfrecemos' src={carpeta} alt='icono material educativo'/>
                </Col>
                    <Col className='cuadrosOfre'>
                        <h1 className='tituloQuienesUno'>MATERIAL EDUCATIVO</h1>
                        <p className='textoOfrecemos'>Te brindamos mayor información y compartidos por este medio material que puede ayudarte a profundizar temas aprendidos en talleres y capacitaciones. Además, de información importante para reforzar tus conocimientos.
                        </p>
                        <Col className='botonMasOf'>
                        <button className='botonOfrecemosTa'>
                        <a className='linkeadoTa' href="#talleres">VER MÁS  </a>
                        </button>
                        </Col>
                    </Col>
                </Col>
            </Row>



            <Row className='parteOfre Ofre' id="talleres">
            <Col xxl={7} xl={7} lg={5} md={12} sm={12} >
                <h2>TALLERES</h2>
                <p> ¡Alcanza tu máximo potencial con nuestra capacitación! Beneficios de nuestros talleres.</p>
                    <p>
                    1- Oportunidad única para aprender de diferentes temas de salud, educación sexual, entre otros temas.
                    </p>
                    <p>
                    2- Brindamos un espacio seguro y confidencial para compartir experiencias y fortalecer vínculos.
                    </p>
                    <p>
                    3- Expertos en el campo de la salud brindaron información actualizada y respondieron preguntas.
                    </p>
                    <p>
                    El objetivo de los talleres es tener una conversación y obtener opiniones, preocupaciones, posibles barreras y necesidades que tienen las personas adolescentes y jóvenes de toda la provincia de Santa Fe 
                    </p>
            </Col>
            <Col className='imagenOfreTaller' xxl={4} xl={4} lg={5} md={6} sm={6}>
                <Image fluid  src={chicosDos} />
            </Col>
            </Row>


        <Row>
        <Image fluid src={bannerUno} alt='Banner desarrolla tus habilidades'/>
        </Row>



        <Row className='parteOfre Ofre' id="talleres">
            <Col xxl={7} xl={7} lg={5} md={12} sm={12} >
                <h2>CAPACITACIONES</h2>
                <p>¡Desarrolla tus habilidades y alcanza tu máximo potencial con nuestras capacitaciones!. Beneficios de capacitarte con nosotros.</p>
                    <p>1- Amplía tus conocimientos: Nuestras capacitaciones están diseñadas por expertos en el campo, lo que te brinda acceso a información actualizada y relevante.
                    </p>
                    <p>
                    2- Desarrollo profesional: La capacitación es una inversión. Nuestros programas están diseñados para abordar temas claves. 
                    </p>
                    <p>
                    3- Flexibilidad: Ofrecemos opciones flexibles de capacitación que se adaptan a tus necesidades. Puedes elegir entre cursos en línea o talleres presenciales, según tu disponibilidad y preferencias.  
                    </p>
                    <p>
                    4- Aprendizaje práctico: Nuestras capacitaciones se enfocan en la aplicación práctica de los conocimientos.
                    </p>
            </Col>
            <Col className='imagenOfreTaller' xxl={4} xl={4} lg={5} md={6} sm={6}>
            <Image fluid src={capaDos} alt='chicos en clase'/>
            </Col>
            </Row>
            

            <Row>
            <Image src={bannerDos} alt='Banner desarrolla tus habilidades'/>
            </Row>


           
            
            <Row className='parteOfre Ofre' id="talleres"  >
            <Col xxl={7} xl={7} lg={5} md={12} sm={12} >
                <h2>MATERIAL EDUCATIVO</h2>
                    <p>¡Desarrolla tus habilidades y alcanza tu máximo potencial con nuestro material educativo. </p>
                    <p>
                    1- Material educativo con información actualizada y relevante. 
                    </p>
                    <p>
                    2- Material educativo diseñados para abordar temas claves. 
                    </p>
                    <p>
                    3- Oportunidad de aprender de diferentes temas de salud, educación sexual, entre otros temas. 
                    </p>
                    <p>
                    4- Expertos en el campo de la salud brindaron información estos materiales educativos actualizados y respondieron preguntas.
                    </p>
                    <p>
                    5- Flexibilidad: Ofrecemos material educativo en línea o física de acuerdo a tu  tu disponibilidad y preferencia.
                    </p>
            </Col>
            <Col className='imagenOfreTaller' xxl={4} xl={4} lg={5} md={6} sm={6}>
            <Image fluid  src={materialDos} alt='chicos en clase'/>
            </Col>
            </Row>

            <Row className='bannerTres'>
            <Image src={bannerTres} alt='Banner desarrolla tus habilidades'/>
            </Row>

            </Container>
    );
};

export default QueOfrecemos;