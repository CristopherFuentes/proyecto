import React, { useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { persona } from '../Interfaces'
import { Link } from 'react-router-dom'
import '../assets/css/tabla.css'


export const Registros = () => {
    const [personas, setPersonas] =useState<persona[]>([])

    const renderizarDatos =()=>{
        var elementos = personas.map((p)=>{
            return<tr>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.edad}</td>
                <td>{p.genero}</td>
                <td>{p.telefono}</td>
                <td>{p.fechanacimiento}</td>
                <td>{p.correo}</td>
                <td>{p.rut}</td>
                <td><Link to={"/actualizar/"+p.idPersona}>Actualizar</Link></td>
                <td><Link to={"/eliminar/"+p.idPersona}>Eliminar</Link></td>
            </tr>
        })
        return elementos
    }
    useEffect(()=>{
        //cargar datos firebase
        obtenerPersonas().then((listado)=>{
        console.log("cargando listado")
        console.log(listado)
        setPersonas(listado)
        })
    },[])

  return (
    <table>
        <tr>
            <th> Nombre </th>
            <th> Apellido </th>
            <th> Edad </th>
            <th> Genero </th>
            <th> Telefono </th>
            <th> Fecha de Nacimiento </th>
            <th> Correo </th>
            <th> RUT </th>
            
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}