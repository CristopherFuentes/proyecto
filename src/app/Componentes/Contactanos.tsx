import React from 'react'
import '../assets/css/logo.css'
//Cargar imagenes de manera 
export const Contactanos = () => {
  return (
    <div>
        Nuestras Redes Sociales
        <br />
        <br />
        
        <img className="logo" src="assets/instagram.png" alt="Logo-Instagram"/>
        <a href="https://www.instagram.com/edukidscopiapo/" target="_blank"> Instagram</a>
        
        <br />
        
        <img src="assets/whatssap.png" className="logo" alt="Logo-Whatsapp"/>
        <a href="https://api.whatsapp.com/send/?phone=56944649000&text&type=phone_number&app_absent=0" target="_blank">  Whatsapp  </a>
        
        <br/>
        
        <img src="assets/twiiter.png" className="logo"  alt="Logo twitter"/>
        <a href="https://twitter.com/_Edukids_" target="_blank"> Twitter</a>
                
    </div>
  )
}
