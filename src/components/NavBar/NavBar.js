import logo from '../Assets/logo.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
// import BurguerButton from './BurguerButton';
import React, { useState } from 'react';

const NavBar = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {

        setClicked(!clicked)
    }
    return (
        <div className='navbar'>
            <NavLink className={"container-logo"} to="/">
            <img src={logo} className="logo" />
            </NavLink>


            <div className='containerMenu'>
                <ul className={`lista ${clicked ? 'active' : ''}`}>
                    <li className='fondito'>
                        <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            to="/QuienesSomos">
                            ¿QUIÉNES SOMOS?
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            to="/QueHacemos">
                            ¿QUÉ HACEMOS?
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            to="/QueOfrecemos">
                            ¿QUÉ OFRECEMOS?
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            to="/Agenda">
                            AGENDA
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            to="/Colaboracion">
                            COLABORACIÓN
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            to="/Contacto">
                            CONTACTO
                        </NavLink>
                    </li>
                </ul>
              
                
            </div>

       

{/* 
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div> */}


            <div className={`initial ${clicked ? ' active' : ''}`}> </div>



        </div>
    )
};


export default NavBar;
