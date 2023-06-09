import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import carruselDos from '../Assets/carruselDos.png';
import bannerA from '../Assets/bannerA.png';
import carruselTres from '../Assets/carruselTres.png';

function Carrusel() {
    return (
      <Carousel>
        <Carousel.Item>
        <img src={bannerA} alt="Imagen de carrusel" 
            className='d-block w-100 carrusel' />
        </Carousel.Item>

        <Carousel.Item>
          <img src={carruselDos} alt="Imagen de carruse" 
            className='d-block w-100 carrusel' />
        </Carousel.Item>

        <Carousel.Item>
          <img src={carruselTres} alt="Imagen de carruse" 
            className='d-block w-100 carrusel' />
        </Carousel.Item>

      </Carousel>
    );
  }
  
export default Carrusel;


