import './Colaboracion.css';
import aporte from '../../components/Assets/aporte.png';
import manos from '../../components/Assets/manos.png';
import gente from '../../components/Assets/gente.png';

const Colaboracion = () => {
    return ( 
    <div className='todoColaboracion'>
        <div className='containerColaboracion'>
            <div className='colaboracion'>
                <p className='tituloColaboracion'>UNITE A NOSOTROS</p>
            </div>
            
            <div className='containerCuadroColaboracion'>
                <div className='containerColab'>
                    <div className='cuadroColab'>
                        <div className='contieneColab'>
                            <h1 className='tituloColabUno colab'>VOLUNTARIO/A</h1>
                            <div className='textoCo'>
                            <p className='textoQuienesCol colab'>¿Quieres ser voluntaria? No dudes en contactarnos y brindarnos tu apoyo.Te invitamos a hacerlo a través de nuestros medios de contacto</p>
                            </div>
                            
                            <div className='containerButtonCol'>
                                <button className='botonColab'>
                                    <a className='linkeadoColab' href="#">VER MÁS  </a>
                                </button> 
                            </div>
                        </div>  
                    </div>       
       

        
                    <div className='cuadroColab'>
                        <div className='contieneColab dosColab'>
                            <h1 className='tituloColabUno'>IDEA / SUGERENCIA</h1>
                            
                        <div className='textoCo'>
                                <p className='textoQuienesCol'>No dudes en contactarnos para compartir tus ideas, participar en nuestras actividades o brindarnos tu apoyo. ¡Tus opiniones y sugerencias son valiosas para nosotros!
                                </p>
                        </div>
                            

                            <div className='containerButtonCol'>
                                <button className='botonColab verdeColab'>
                                    <a className='linkeadoColab colabo' href="#talleresRealizados">VER MÁS  </a>    
                                </button> 
                            </div>
                        </div>  
                    </div>



                    <div className='cuadroColab'>
                        <div className='contieneColab'>
                            <h1 className='tituloColabUno colab'>EXPERIENCIA</h1>
                            <div className='textoCo'>
                                <p className='textoQuienesCol colab'>¿Quieres compartir tu experiencia? No dudes en contactarnos y brindarnos tu apoyo.Te invitamos a hacerlo a través de nuestros medios de contacto
                                </p>
                            </div>
                        
                            <div className='containerButtonCol'>
                                <button className='botonColab'>
                                <a className='linkeadoColab' href="#reconocimientos">VER MÁS</a>    
                                </button> 
                            </div>
                        </div>  
                    </div>
                </div>

            </div>


            <div className='aporSection' id='reconocimientos'>
                <h2 className='tituloAporta'>APORTÁ DESDE TU LUGAR</h2>
                <img src={aporte} alt='icono' />
            </div>

            <div className='bannerApor'>
                <img className='imagenDonar' src={manos} alt='imagen de manos' />
                <div className='contieneDonar'>
                    <h3 className='donar'>DONAR</h3>
                    <p className='textoDonar'>Podes ayudarnos de distintas maneras.</p>
                    <p className='textoDonar'>¡Vos elegís!</p>

                        <div className='containerButtonApor'>
                            <button className='botonAporte'>
                                <a className='linkeadoApor' href="#">VER MÁS  </a>
                            </button> 
                        </div>
                </div>
                <img className='imagenDonar' src={manos} alt='imagen de manos' />
            </div>

        </div>


        </div>
        
        );
};

export default Colaboracion;