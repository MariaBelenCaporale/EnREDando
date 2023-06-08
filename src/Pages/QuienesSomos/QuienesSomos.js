import './QuienesSomos.css';
import enredandoNosotros from '../../components/Assets/enredandoNosotros.png';


const QuienesSomos = () => {


    return (
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
                    <img className='imgUno' src={enredandoNosotros} />
                    <p className='tituloUno'>SOBRE NOSOTROS</p>
                    <p className='textoUno'>La misión del espacio es la igualdad entre mujeres y hombres, el pleno respeto de los derechos humanos, mejorar el acceso de adolescentes, jóvenes y mujeres a la educación.
                    </p>
                </div>

                <div className='cuadroUno'>
                    <img className='imgUno' src={enredandoNosotros} />
                    <p className='tituloUno'>SOBRE NOSOTROS</p>
                    <p className='textoUno'>La misión del espacio es la igualdad entre mujeres y hombres, el pleno respeto de los derechos humanos, mejorar el acceso de adolescentes, jóvenes y mujeres a la educación.
                    </p>
                </div>
            </div>

        </div>
        
       

    )
};

export default QuienesSomos;