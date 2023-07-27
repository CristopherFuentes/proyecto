'use client'
//import Image from 'next/image'
import { Footer } from './Componentes/Footer';
import { Header } from './Componentes/Header';
import { AppRouter } from './Router/AppRouter';
import { Formulario } from './Componentes/Formulario';

import { BrowserRouter } from 'react-router-dom'
// import styles from './page.module.css'

export default function Home() {
  return (
    <>  
      <BrowserRouter>
      <br />
        <Header/>
        <br />
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
