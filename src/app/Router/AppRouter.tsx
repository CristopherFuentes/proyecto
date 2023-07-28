'use client'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros'
import { Encuentranos } from '../Componentes/Encuentranos'
import { Contactanos } from '../Componentes/Contactanos'
import { Actualizar } from '../Componentes/Actualizar'
import { Eliminar } from '../Componentes/Eliminar'
import { Galeria } from '../Componentes/Galeria'
import { Talleres } from '../Componentes/Talleres'
import { Ofrecemos } from '../Componentes/Ofrecemos'


export const AppRouter = () => {
  return (
    <Routes>
        <Route>
            <Route path="/formulario" element={<Formulario/>}/>
            <Route path="/registros" element={<Registros/>}/>
            <Route path="/encuentranos" element={<Encuentranos/>}/>
            <Route path="/contactanos" element={<Contactanos/>}/>
            <Route path="/galeria" element={<Galeria/>}/>
            <Route path="/talleres" element={<Talleres/>}/>
            <Route path="/ofrecemos" element={<Ofrecemos/>}/>
            <Route path="/actualizar/:idPersona" element={<Actualizar/>}/>
            <Route path="/eliminar/:idPersona" element={<Eliminar/>}/>
        </Route>

    </Routes>
  )
}
