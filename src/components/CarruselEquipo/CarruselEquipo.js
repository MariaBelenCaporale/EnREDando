import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import grupoUno from '../Assets/grupoUno.png';
import grupoDos from '../Assets/grupoDos.png';
import grupoTres from '../Assets/grupoTres.png';


function Carrusel() {
    return (
      <Carousel>
        <Carousel.Item>
        <img src={grupoUno} alt="Imagen de carrusel" 
            className='d-block w-100 carrusel' />
        </Carousel.Item>

        <Carousel.Item>
          <img src={grupoDos} alt="Imagen de carruse" 
            className='d-block w-100 carrusel' />
        </Carousel.Item>

        <Carousel.Item>
          <img src={grupoTres} alt="Imagen de carruse" 
            className='d-block w-100 carrusel' />
        </Carousel.Item>

      </Carousel>
    );
  }
  
export default Carrusel;


