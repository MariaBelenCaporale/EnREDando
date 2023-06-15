import './Agenda.css';
import reconocimiento from '../../components/Assets/reconocimiento.png';

const Agenda = () => {
    return (
        <div>
        <div className='containerAgenda'>
            <div className='agenda'>
                <p className='tituloAgenda'>AGENDA</p>
            </div>

            <div className='containerCuadroAgenda'>
                <div className='containerAgen'>
                <div className='cuadroHacemos'>
                    <div className='contieneAgenda'>
                        <h1 className='tituloAgendaUno dosA'>PRÓXIMOS TALLERES</h1>
                        <div className='textoAg'>
                        <p className='textoQuienesAgenda dosA'>¿Quiéres saber mÁs de los próximos eventos?. Aquí encontrarás información actualizada.
                        </p>
                        </div>
                        

                        <div className='containerButtonAgenda'>
                            <button className='botonAgenda'>VER MÁS</button> 
                        </div>
                    </div>  
                </div>       
           

            
                <div className='cuadroHacemos'>
                    <div className='contieneAgenda dos'>
                        <h1 className='tituloAgendaUno'>TALLERES REALIZADOS</h1>
                        <div className='textoAg'>
                        <p className='textoQuienesAgenda'>¿Quiéres saber de nuestros talleres realizados?. Aquí encontrarás los talleres pasados e información actualizada.
                        </p>
                        </div>
                        

                        <div className='containerButtonAgenda'>
                            <button className='botonAgenda verde'>VER MÁS</button> 
                        </div>
                    </div>  
                </div>



                 <div className='cuadroHacemos'>
                    <div className='contieneAgenda'>
                        <h1 className='tituloAgendaUno dosA'>RECONOCIMIENTOS</h1>
                        <div className='textoAg'>
                        <p className='textoQuienesAgenda dosA'>¿Quiéres saber mas sobre nosotros?. Aquí encontrarás proyectos y participaciones de EnREdando Salud.
                        </p>
                        </div>
                       

                        

                        <div className='containerButtonAgenda rec'>
                            <button className='botonAgenda'>VER MÁS</button> 
                            <div>
                            <img className='imgOfrecemos' src={reconocimiento} alt='chicos en clase'/>
                            </div>
                            
                        </div>
                    </div>  
                </div>

                </div> 
            </div>




            <div className='containerProx'>
                <h1 className='proximosTalleres'>PRÓXIMOS TALLERES</h1>
            </div>


            <div className='containerCuadroAgenda'>
                <div className='containerAgen'>
                <div className='cuadroHacemos'>
                    <div className='contieneAgenda'>
                    <div className='tituloAgProx'>
                    <h1 className='tituloAgendaUno dosA'>ENFOQUE DE DERECHOS</h1>
                        </div>
                
                        <div className='textoAgProx'>
                        <p className='textoQuienesAgenda dosA'>Normativas internacionales, nacionales y locales sobre la protección de los derechos sexuales, reproductivos y no reproductivos. Medios de reclamo y denuncia a las violaciones de estos derechos.
                        </p>
                        </div>
                    </div>  
                </div>       
           

            
                <div className='cuadroHacemos'>
                    <div className='contieneAgenda dos'>
                    <div className='tituloAgProx'>
                    <h1 className='tituloAgendaUno'>ENFOQUE DE GÉNERO</h1>
                        </div>
                        
                        
                        <div className='textoAgProx'>
                        <p className='textoQuienesAgenda'>Desafíos, obstáculos, brechas de género que se presentan a las mujeres y personas LGBTI+ como colectivo y cómo esto incide en el acceso a los servicios de salud. Estereotipos, mandatos, roles de género.
                        </p>
                        </div>
                    </div>  
                </div>



                 <div className='cuadroHacemos'>
                    <div className='contieneAgenda'>
                        <div className='tituloAgProx'>
                        <h1 className='tituloAgendaUno dosA'>CONCEPTUALIZACIONES DE SALUD</h1>
                        </div>
                        
                        <div className='textoAgProx'>
                        <p className='textoQuienesAgenda dosA'>Salud integral. El sistema sanitario argentino. El sistema sanitario santafesino. El sistema sanitario de la ciudad de Rosario. Prevención y promoción de la salud. Ruta crítica de mujeres, adolescentes, jóvenes y personas LGBTI+ y el acceso a los servicios de salud.
                        </p>
                        </div>
                    </div>  
                </div>

                </div>


                <div className='containerAgen'>
                <div className='cuadroHacemos'>
                    <div className='contieneAgenda'>
                    <div className='tituloAgProx'>
                    <h1 className='tituloAgendaUno dosA'>VIH / SIDA</h1>
                        </div>
                
                        <div className='textoAgProx'>
                        <p className='textoQuienesAgenda dosA'>Normativas internacionales, nacionales y locales sobre la protección de los derechos sexuales, reproductivos y no reproductivos. Medios de reclamo y denuncia a las violaciones de estos derechos.
                        </p>
                        </div>
                    </div>  
                </div>       
           

            
                <div className='cuadroHacemos'>
                    <div className='contieneAgenda dos'>
                    <div className='tituloAgProx'>
                    <h1 className='tituloAgendaUno'>¿QUÉ ES LA SÍFILIS?</h1>
                        </div>
                        
                        
                        <div className='textoAgProx'>
                        <p className='textoQuienesAgenda'>Desafíos, obstáculos, brechas de género que se presentan a las mujeres y personas LGBTI+ como colectivo y cómo esto incide en el acceso a los servicios de salud. Estereotipos, mandatos, roles de género.
                        </p>
                        </div>
                    </div>  
                </div>



                 <div className='cuadroHacemos'>
                    <div className='contieneAgenda'>
                        <div className='tituloAgProx'>
                        <h1 className='tituloAgendaUno dosA'>ALIMENTACIÓN, NUTRICIÓN Y SISTEMA INMUNOLÓGICO</h1>
                        </div>
                        
                        <div className='textoAgProx'>
                        <p className='textoQuienesAgenda dosA'>Salud integral. El sistema sanitario argentino. El sistema sanitario santafesino. El sistema sanitario de la ciudad de Rosario. Prevención y promoción de la salud. Ruta crítica de mujeres, adolescentes, jóvenes y personas LGBTI+ y el acceso a los servicios de salud.
                        </p>
                        </div>
                    </div>  
                </div>

                </div>


            </div>











        </div>
        </div>
    )
};


export default Agenda;