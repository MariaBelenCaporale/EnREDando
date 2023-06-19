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


const QueOfrecemos = () => {
    return (
        <div>

            <div className='containerOfrecemos'>
                <div className='quienes'>
                    <p className='tituloQuienes'>¿QUÉ OFRECEMOS?</p>
                </div>

                <div className='containerCuadroOfrecemos'>
                    <div className='containerB'>
                    <div className='cuadroOfrece'>
                    
                    <div className='containerIcon'>
                    <div className='iconoOfrecemos'>
                        <img className='imgOfrecemos' src={hoja} alt='icono talleres' />
                        </div>
                    </div>

                       


                        <div className='contieneTodo'>
                        <h1 className='tituloQuienesUno'>TALLERES</h1>
                        <p className='textoOfrecemos'>Ofrecemos talleres de diferentes temas dirigidos a adolescentes y jóvenes, brindando información y herramientas valiosas para mejorar la calidad de vida de las personas. Es una oportunidad para seguir aprendiendo.
                        </p>
                        </div>
                        <div className='containerButton'>
                        <button className='botonOfrecemos'>
                        <a className='linkeado' href="#talleres">VER MÁS  </a>
                           </button> 
                        </div>
                    </div>

                    <div className='cuadroOfrece'>

                    <div className='containerIcon'>
                    <div className='iconoOfrecemos'>
                        <img className='imgOfrecemos' src={parlante} alt='icono capacitaciones' />
                        </div>
                    </div>
                       


                        <div className='contieneTodo'>
                        <h1 className='tituloQuienesUno'>CAPACITACIONES</h1>
                        <p className='textoOfrecemos'> ¡Desarrolla tus habilidades y alcanza tu máximo potencial con nuestra capacitación!  ¿Estás listo/a para impulsar tu carrera y adquirir conocimientos valiosos? ¡No busques más! 
                        </p>
                        </div>

                        <div className='containerButton'>
                        <button className='botonOfrecemos'>
                        <a className='linkeado' href="#capacitaciones">VER MÁS  </a></button> 
                        </div>
                        
                    </div>


                    <div className='cuadroOfrece'>
                        

                    <div className='containerIcon'>
                    <div className='iconoOfrecemos'>
                        <img className='imgOfrecemos' src={carpeta} alt='icono material educativo'/>
                        </div>
                    </div>
                        <div className='contieneTodo'>
                        <h1 className='tituloQuienesUno'>MATERIAL EDUCATIVO</h1>
                        <p className='textoOfrecemos'>Te brindamos mayor información y compartidos por este medio material que puede ayudarte a profundizar temas aprendidos en talleres y capacitaciones. Además, de información importante para reforzar tus conocimientos.
                        </p>
                        </div>
                        <div className='containerButton'>
                        <button className='botonOfrecemos'>
                        <a className='linkeado' href="#material">VER MÁS  </a>
                        </button> 
                        </div>  
                    </div>       
          
                    </div>
                </div>



                <div className='sectionTalleres'>
                
                <div className='talleres' id='talleres'>
                    <h2>TALLERES</h2>
                    <div className='textosTalleres'>
                    <p> ¡Alcanza tu máximo potencial con nuestra capacitación! Beneficios de nuestros talleres.





</p>
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
                    </div>
                </div>

                <div className='fotosOfrecemos'>

                <img className='imgOfrecemos' src={chicosDos} alt='chicos en clase'/>
                </div> 
            </div>


            <div className='bannerOfrecemos'>
                <img className='imgOfrecemos' src={bannerUno} alt='Banner desarrolla tus habilidades'/>
            </div>
            


            <div className='sectionTalleres'>
                
                <div className='talleres'>
                    <h2 id='capacitaciones'>CAPACITACIONES</h2>
                    <div className='textosTalleres'>
                    <p>¡Desarrolla tus habilidades y alcanza tu máximo potencial con nuestras capacitaciones!. Beneficios de capacitarte con nosotros.
 



                    </p>
                    <p>
                    1- 
Amplía tus conocimientos: Nuestras capacitaciones están diseñadas por expertos en el campo, lo que te brinda acceso a información actualizada y relevante.
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
                    </div>
                </div>

                <div className='fotosOfrecemos'>

                <img className='imgOfrecemos' src={capaDos} alt='chicos en clase'/>
                </div> 
            </div>


            <div className='bannerOfrecemos'>
                <img className='imgOfrecemos' src={bannerDos} alt='Banner desarrolla tus habilidades'/>
            </div>
            






            <div className='sectionTalleres'>
                
                <div className='talleres'>
                    <h2 id='material'>MATERIAL EDUCATIVO</h2>
                    <div className='textosTalleres'>
                    <p>¡Desarrolla tus habilidades y alcanza tu máximo potencial con nuestro material educativo. 






 



                    </p>
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
                   
                    </div>
                </div>

                <div className='fotosOfrecemos'>

                <img className='imgOfrecemos' src={materialDos} alt='chicos en clase'/>
                </div> 
            </div>


            <div className='bannerOfrecemos'>
                <img className='imgOfrecemos' src={bannerTres} alt='Banner desarrolla tus habilidades'/>
            </div>




            




            </div> 
        </div>
    );
};

export default QueOfrecemos;