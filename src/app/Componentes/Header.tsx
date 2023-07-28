import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css' 

export const Header = () => {
  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to={"/formulario"}>Formulario</Link>
      <Link to={"/registros"}>Registros</Link>
      <Link to={"/encuentranos"}>Encuentranos</Link>
      <Link to={"/contactanos"}>Contactanos</Link>
      <Link to={"/galeria"}>Galeria</Link>
      <Link to={"/talleres"}>Talleres</Link>
      <Link to={"/ofrecemos"}>Ofrecemos</Link>
    </nav>
  )
}

