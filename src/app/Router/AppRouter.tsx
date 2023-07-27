'use client'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros'
import { Encuentranos } from '../Componentes/Encuentranos'
import { Contactanos } from '../Componentes/Contactanos'
import { Actualizar } from '../Componentes/Actualizar'


export const AppRouter = () => {
  return (
    <Routes>
        <Route>
            <Route path="/formulario" element={<Formulario/>}/>
            <Route path="/registro" element={<Registros/>}/>
            <Route path="/encuentranos" element={<Encuentranos/>}/>
            <Route path="/contactanos" element={<Contactanos/>}/>
            <Route path="/actualizar/:idPersona" element={<Actualizar/>}/>
        </Route>

    </Routes>
  )
}
