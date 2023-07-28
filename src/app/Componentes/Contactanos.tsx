import React from 'react'
import '../assets/css/logo.css'

//Cargar imagenes de manera 
export const Contactanos = () => {
  return (
    <div>
        Nuestras Redes Sociales
        <br />
        <br />
        
        <img className="logo" src="instagram.png" alt="Logo-Instagram"/>
        <a href="https://www.instagram.com/edukidscopiapo/" target="_blank"> Instagram</a>
        
        <br />
        
        <img src="whatsapp.png" className="logo" alt="Logo-Whatsapp"/>
        <a href="https://api.whatsapp.com/send/?phone=56944649000&text&type=phone_number&app_absent=0" target="_blank">  Whatsapp  </a>
        
        <br/>
        
        <img src="Twitter.png" className="logo"  alt="Logo twitter"/>
        <a href="https://twitter.com/_Edukids_" target="_blank"> Twitter</a>
                
        <br />

        <p><b>Correo: edukidscopiapo@gmail.com</b></p>
    </div>
  )
}
