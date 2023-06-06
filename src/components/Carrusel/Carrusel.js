import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carruselUno from '../Assets/carruselUno.png';
import carruselDos from '../Assets/carruselDos.png';
import carruselTres from '../Assets/carruselTres.png';
import './Carrusel.css';

const Carrusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider className="contieneCarrusel" {...settings}>
            <div className="contieneImgCarrusel">
            <img src={carruselUno} className="carrusel" alt="Imagen de carruse" />
            </div>
            <div className="contieneImgCarrusel">
            <img src={carruselDos} className="carrusel" alt="Imagen de carruse" />
            </div>
            <div className="contieneImgCarrusel">
            <img src={carruselTres} className="carrusel" alt="Imagen de carruse" />
            </div>
        </Slider>
    )
};

export default Carrusel;