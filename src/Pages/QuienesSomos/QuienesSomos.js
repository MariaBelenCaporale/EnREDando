import './QuienesSomos.css';
import enredandoNosotros from '../../components/Assets/enredandoNosotros.png';
import equipo from '../../components/Assets/equipo.png';
import historia from '../../components/Assets/historia.png';
import nosotros from '../../components/Assets/nosotros.png';
import CarruselEquipo from '../../components/CarruselEquipo/CarruselEquipo';
import fundacion from '../../components/Assets/fundacion.png';
import bannerQuienes from '../../components/Assets/banner-quienes.png'

import { Col, Container, Image, Row } from 'react-bootstrap';

const QuienesSomos = () => {


    return (

<Container>

             <Row className='quienes'>
                <Col>
                <p className='tituloQuienes'>¿QUIÉNES SOMOS?</p>
                </Col>
            </Row>
    
        
        <Row className='parteUno' xxl={12} xl={12} lg={12} md={12} >
                <Col xl={3} lg={12} md={12} className='contenedorCuadros' >
                    <Image fluid src={enredandoNosotros} />
                    <Col className='textosCuadros'>
                    <h1 className='tituloUno'>SOBRE NOSOTROS/AS</h1>
                    <p className='textoUno'>EnREDando Salud constituye una red de trabajo colaborativo para la transformación socio-inclusiva con eje en la salud integral, los derechos humanos y la educación con adolescentes, jóvenes, mujeres y personas LGBTIQ+.
                    </p>
                    </Col>
                </Col>

                 <Col xl={3} lg={12} md={12} className='contenedorCuadros'>
                    <Image fluid  src={equipo} />
                    <Col className='textosCuadros'>
                    <h1 className='tituloUno'>NUESTRO EQUIPO</h1>
                    <p className='textoUno'>Nuestro equipo esta conformado por fundadores, por el equipo de desarrollo de proyectos, el equipo de educadores, el equipo de comunicadores,  el departamento administrativo y miembros activos.
                    </p>
                    </Col>
                </Col>

                <Col xl={3} lg={12} md={12} className='contenedorCuadros'>
                    <Image fluid src={fundacion} />
                    <Col className='textosCuadros'>
                    <h1 className='tituloUno'>ORGANIZACIONES ALIADAS</h1>
                    <p className='textoUno'>En el  año 2019 gracias al impulso y apoyo institucional de la Fundación para el Estudio e Investigación de la Mujer, hemos llevado adelante el Ciclo de Formación de Educadorxs en Salud Sexual y Reproductiva.
                    </p>
                    </Col>
                </Col>   
        </Row>
            


        <Row xxl={12} xl={12} lg={12} md={12} className='parteDos margen'>
            <Col className='imagenHis' xxl={4} xl={4} md={12} sm={12}>
                <Image className='imgHistoria' src={historia} />
            </Col>
            <Col xxl={6} xl={7} lg={6} md={12} sm={12} >
                <p className='tituloQuienesHistoria'>NUESTRA HISTORIA</p>
                <p className='textoUnoHistoria'>EnREDando Salud, es un espacio que se creó en el año 2019 en la ciudad de Rosario, impulsado por Fundación para el Estudio e Investigación de la Mujer (creada en 1989). Desde sus orígenes integra la Red Nacional de Adolescentes y Jóvenes para la Salud Sexual y Reproductiva de Argentina, creada en 1999, el Colectivo Ciudadano por el Gobierno Abierto Local en Rosario, la Red Argentina de Organizaciones por la Educación y la Red Argentina de Abogacía Comunitaria.
                </p>
            </Col>
        </Row>
        <Row className='parteDos segunda' xxl={12} xl={12} lg={12} md={12}>
            <Col xxl={6} xl={7} lg={6} md={12} sm={12} >
                <p className='tituloQuienesHistoriaA'>SOBRE NOSOTROS/AS</p>
                <p className='textoUnoHistoriaA'>
                    La misión del espacio es la igualdad entre mujeres y hombres, el pleno respeto de los derechos humanos, mejorar el acceso de adolescentes, jóvenes y mujeres a la educación, el trabajo, la salud, la plena participación social y política, incluyendo una mirada crítica sobre la masculinidad hegemónica y sus consecuencias en la salud. 
                </p>
            </Col>
            <Col className='imagenHis' xxl={4} xl={4} md={12} sm={12} >
                <Image className='imgHistoria' src={nosotros} />
            </Col>
        </Row>


        <Row className='equipo'>
            <Col className='nuestroEquip'>
            <p className='tituloNuestro'>NUESTRO EQUIPO</p>
            <CarruselEquipo />
            </Col>
        </Row>
    

        <Row className='org'>
            <Col>
                <p className='tituloQuienesHistoriaB'>ORGANIZACIONES ALIADAS</p>
            </Col>
            <Col>
                <p className='textoUnoHistoriaA'> Desde Septiembre del año 2019 gracias al impulso y apoyo institucional de la Fundación para el Estudio e Investigación de la Mujer a partir de nuestra participación en la Alianza Argentina de Organizaciones de la Sociedad Civil en cumplimiento de los compromisos internacionales de la Plataforma de Acción El Cairo, hemos llevado adelante el Ciclo de Formación de Educadorxs en Salud Sexual y Reproductiva para la Prevención de Sífilis y otras ITS con adolescentes y jóvenes de entre 15 y 25 años de la provincia de Santa Fe con apoyo del proyecto “Cerrando Brechas” con financiamiento de la Unión Europea.
                </p>
            </Col>
            <Col className='imgHistoriaDos'>
                <Image src={bannerQuienes} fluid />
            </Col>
        </Row>

    </Container>

    )
};

export default QuienesSomos;