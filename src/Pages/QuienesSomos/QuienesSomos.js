import './QuienesSomos.css';
import enredandoNosotros from '../../components/Assets/enredandoNosotros.png';
import equipo from '../../components/Assets/equipo.png';
import historia from '../../components/Assets/historia.png';
import nosotros from '../../components/Assets/nosotros.png';
import CarruselEquipo from '../../components/CarruselEquipo/CarruselEquipo';
import bannerUno from '../../components/Assets/bannerUno.png';
import fundacion from '../../components/Assets/fundacion.png';

const QuienesSomos = () => {


    return (
        <div>
        <div className='containerQuienes'>
            <div className='quienes'>
                <p className='tituloQuienes'>¿QUIÉNES SOMOS?</p>
            </div>

            <div className='containerCuadro'>
                <div className='cuadroUno'>
                    <img className='imgUno' src={enredandoNosotros} />
                    <p className='tituloUno'>SOBRE NOSOTROS</p>
                    <p className='textoUno'>La misión del espacio es la igualdad entre mujeres y hombres, el pleno respeto de los derechos humanos, mejorar el acceso de adolescentes, jóvenes y mujeres a la educación.
</p>
                </div>

                <div className='cuadroUno'>
                    <img className='imgUno' src={equipo} />
                    <p className='tituloUno'>NUESTRO EQUIPO</p>
                    <p className='textoUno'>Nuestro equipo esta conformado por nuestros miembros fundadores, el equipo de proyectos, de educadores, comunicadores, administrativo y nuestros miembros activos.
                    </p>
                </div>

                <div className='cuadroUno'>
                    <img className='imgUno' src={fundacion} />
                    <p className='tituloUno'>NUESTROS SOCIOS</p>
                    <p className='textoUno'>En el  año 2019 gracias al impulso y apoyo institucional de la Fundación para el Estudio e Investigación de la Mujer, hemos llevado adelante el Ciclo de Formación de Educadorxs en Salud Sexual y Reproductiva.
                    </p>
                </div>
            </div>

            </div>
            <div className='containerCuadroQuienes'>
                
           
                <div className='cuadroQuienes'>
                    <div className='containerHistoria'>

                        <img className='imgHistoria' src={historia} />
                        <div className='quienesTextos'>
                        <p className='tituloQuienesHistoria'>NUESTRA HISTORIA</p>
            
                        <p className='textoUnoHistoria'>EnREDando Salud, es un espacio que se creó en el año 2019 en la ciudad de Rosario, impulsado por Fundación para el Estudio e Investigación de la Mujer (creada en 1989). Desde sus orígenes integra la Red Nacional de Adolescentes y Jóvenes para la Salud Sexual y Reproductiva de Argentina, creada en 1999, el Colectivo Ciudadano por el Gobierno Abierto Local en Rosario, la Red Argentina de Organizaciones por la Educación y la Red Argentina de Abogacía Comunitaria.
                        </p>
                        </div>
                    </div>

                    <div className='containerQuienesUnoA'>

                        <img className='imgHistoria' src={nosotros} />
                        <div className='quienesTextos'>
                        <p className='tituloQuienesHistoriaA'>SOBRE NOSOTROS</p>
            
                        <p className='textoUnoHistoriaA'>
                            La misión del espacio es la igualdad entre mujeres y hombres, el pleno respeto de los derechos humanos, mejorar el acceso de adolescentes, jóvenes y mujeres a la educación, el trabajo, la salud, la plena participación social y política, incluyendo una mirada crítica sobre la masculinidad hegemónica y sus consecuencias en la salud. 

                        </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='containerCarruselEquipo'>
                <p className='tituloNuestro'>NUESTRO EQUIPO</p>
                <div className='carrusel'>
                <CarruselEquipo />
                </div>
            </div>

           
           
           
            <div className='containerQuienesUnoB'>
                <div  iv className='cuadroHistoria'>
                    <img className='imgHistoria' src={bannerUno} />
                <div className='historiaTextos'>
                    <div className='textosHistoria'>
                <p className='tituloQuienesHistoriaA'>NUESTROS SOCIOS</p>
                <p className='textoUnoHistoriaA'>
                Desde Septiembre del año 2019 gracias al impulso y apoyo institucional de la Fundación para el Estudio e Investigación de la Mujer a partir de nuestra participación en la Alianza Argentina de Organizaciones de la Sociedad Civil en cumplimiento de los compromisos internacionales de la Plataforma de Acción El Cairo, hemos llevado adelante el Ciclo de Formación de Educadorxs en Salud Sexual y Reproductiva para la Prevención de Sífilis y otras ITS con adolescentes y jóvenes de entre 15 y 25 años de la provincia de Santa Fe con apoyo del proyecto “Cerrando Brechas” con financiamiento de la Unión Europea.


                </p>
                </div>
                <img className='imgHistoria' src={fundacion} />
                </div>
              
                </div>
                
                
            </div>
        
  
        
       
            </div>
    )
};

export default QuienesSomos;