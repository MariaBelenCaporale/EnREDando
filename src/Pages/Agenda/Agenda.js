import './Agenda.css';
import reconocimiento from '../../components/Assets/reconocimiento.png';
import bannerAgenda from '../../components/Assets/bannerAgenda.png';
import realizadosUno from '../../components/Assets/realizadosUno.png';
import chicosDos from '../../components/Assets/ofrecemos/chicosDos.png';
import recoUno from '../../components/Assets/recoUno.png';
import recoDos from '../../components/Assets/recoDos.png';
import recoRosa from '../../components/Assets/recoRosa.png';
import apertura from '../../components/Assets/apertura.png';
import salud from '../../components/Assets/salud.png';
import Footer from '../../components/Footer/Footer';

const Agenda = () => {
    return (
        <div className='todoAgenda'>
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
                            <button className='botonAgenda'>
                                <a className='linkeadoAgenda' href="#proximos">VER MÁS  </a>
                            </button> 
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
                            <button className='botonAgenda verde'>
                                <a className='linkeadoAgenda agen' href="#talleresRealizados">VER MÁS  </a>    
                            </button> 
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
                            <button className='botonAgenda'>
                            <a className='linkeadoAgenda' href="#reconocimientos">VER MÁS  </a>    </button> 
                            <div>
                            <img className='imgOfrecemos' src={reconocimiento} alt='chicos en clase'/>
                            </div>
                            
                        </div>
                    </div>  
                </div>


                
            
                </div>
                <div className='bannerOfrecemos'>
                <img className='imgOfrecemos' src={bannerAgenda} alt='Banner desarrolla tus habilidades'/>
            </div> 
            </div>




            <div className='containerProx'>
                <h1 className='proximosTalleres' id='proximos'>PRÓXIMOS TALLERES</h1>
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

            <div className='talleresSection' id='talleresRealizados'>
            <h2>TALLERES REALIZADOS</h2>
            </div>
            <div className='sectionTalleresRealizados'>
                <div className='talleresRea' id='talleres'>
                    
                    <div className='textosTalleres'>
                    <h3 className='subti'>TALLER SOBRE INYECTABLES DE ACCIÓN PROLONGADA</h3> 
                    <div className='datas'>
                    <p className='dataTaller'>17 de Mayo 2023</p> <p className='dataTaller'>Ciudad de Rosario</p>
                    </div>
                      
                        <p className='textosTa'>Este taller que se desarrolló en 5 países del mundo, entre ellos Argentina, estuvo especialmente dirigido a adolescentes y jóvenes viviendo con VIH, brindándoles información valiosa sobre esta opción de tratamiento.
                        Organizado por el equipo de EnREDando Salud y FEIM, y con el impulso de Fondazione Penta, este evento tuvo como objetivo principal ofrecer herramientas y conocimientos para mejorar la calidad de vida de las personas viviendo con el VIH.</p>

                        <p className='textosTa'>Destacamos:</p>

                        <p className='textosTa'>Oportunidad única para aprender sobre los inyectables de acción prolongada y su impacto en el manejo del VIH.
                        Espacio seguro y confidencial para compartir experiencias y fortalecer vínculos.
                        Expertos en el campo de la salud brindaron información actualizada y respondieron preguntas.</p>
                    </div>
                </div>

                <div className='fotosRealizados'>
                    <img className='imgRealizaos' src={realizadosUno}  alt='chicos en clase'/>
                    <img className='imgRealizaos' src={chicosDos}  alt='chicos en clase'/>
                </div>

            </div>




            <div className='recoSection' id='reconocimientos'>
                <h2>RECONOCIMIENTOS</h2>
                <img src={recoRosa} alt='icono' />
            </div>

            <div className='containerCuadroReco'>
                <div className='cuadroReco'>
                    <div className='containerReconocimientos'>
                    <img src={recoUno} alt='Formación de educacion sexual' />
                        <div className='recoTextos'>
                            <p className='tituloReco'>Formación de Educadorxs en Salud Sexual y Reproductiva para la prevención de sífilis y otras ITS.</p>
                
                            <p className='textoUnoReco'>EnREDando Salud fue reconocida en el año 2020 por la Plataforma de Acción Juvenil del Grupo Principal de Naciones Unidas para Niños y Jóvenes por el proyecto Formación de Educadorxs en Salud Sexual y Reproductiva para la prevención de sífilis y otras ITS. La Plataforma muestra las acciones dirigidas por jóvenes que lideran la respuesta a la crisis social y de salud de COVID, a fin de dar visibilidad al liderazgo y las acciones de las juventudes
                            </p>
                        </div>
                    </div>

                    <div className='containerRecoUno'>
                    <img src={recoDos} alt='Formación de educacion sexual' />
                        <div className='recoTextosDos'>
                        <p className='tituloReco'>Aliada Comprometida con las Coaliciones de Acción del Foro Generación igualdad de París </p>
            
                        <p className='textoUnoReco'>
                        En el año 2021 fue reconocida como Aliada Comprometida con las Coaliciones de Acción del Foro Generación Igualdad de París particularmente con las Coaliciones de “Autonomía Corporal y Salud y los Derechos Sexuales y Reproductivos” y “para la Acción sobre Tecnología e Innovación para la Igualdad de Género”.  Seleccionada junto a otras 50 organizaciones a nivel nacional, en el marco de la Sub Categoría Inclusión, con participación en el documento 2021.
                        </p>
                        </div>
                    </div>


                    <div className='containerReconocimientos'>
                    <img src={apertura} alt='Formación de educacion sexual' />
                        <div className='recoTextos'>
                            <p className='tituloReco'>Declaración de Interés por parte del Concejo Municipal de la Municipalidad de Rosario</p>
                
                            <p className='textoUnoReco'>EnREDando Salud por parte del Concejo Municipal de la Municipalidad de Rosario, según Decreto Nº 61.164 por “promover acciones en favor de los derechos de las juventudes y acompañar a los adolescentes y jóvenes en la búsqueda de respuestas frente a las múltiples barreras que encuentran para hacer efectivos sus derechos y poder ejercer su sexualidad de manera libre y segura”.
                            </p>
                        </div>
                    </div>


                    <div className='containerRecoUno'>
                    <img src={salud} alt='Formación de educacion sexual' />
                        <div className='recoTextosDos'>
                        <p className='tituloReco'>Coordinación de la Comisión de Salud Sexual y Reproductiva del Consejo Asesor de Salud Adolescente y Juvenil del Ministerio de Salud</p>
            
                        <p className='textoUnoReco'>
                        En año el 2022 se asume esta coordinación del Ministerio de Salud de la Nación Argentina, se ha tenido presencia oficial por primera vez en la Articulación de Jóvenes de América Latina y el Caribe y del Foro Feminista en el marco de la XV Conferencia Regional de la Mujer (CRM), Declarados de Interés por el proyecto Primera App de Salud Sexual y Reproductiva de Rosario por la Cámara de Diputadas y Diputados de la Provincia de Santa Fe.
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
       
    )
};


export default Agenda;