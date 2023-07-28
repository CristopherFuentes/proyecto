import React, { useEffect, useState } from 'react'
import { persona } from '../Interfaces';
import { useParams } from 'react-router-dom';
import { actualizarPersona, obtenerPersona } from '../Firebase/Promesas';


export const Actualizar = () => {
      const [nombre, setNombre] = useState<string>('');
      const [apellido, setApellido] = useState<string>('');
      const [edad, setEdad] = useState<number>(0);
      const [genero, setGenero] = useState<string>('');
      const [telefono, setTelefono] = useState<string>('');
      const [fechanacimiento, setFechaNacimiento] = useState<string>('');
      const [correo, setCorreo] = useState<string>('');
      const [rut, setRut] = useState<string>('');
      const [idPersona, setIdPersona] = useState<string>('')
    
      const [errorEdad, setErrorEdad] = useState("")


      const params = useParams()
    useEffect(()=>{
        if(params.idPersona!=undefined)
        obtenerPersona(params.idPersona).then((p)=>{
            if(p!=undefined){
              setNombre(p.nombre)
              setApellido(p.apellido)
              setEdad(p.edad)
              setGenero(p.genero)
              setTelefono(p.telefono)
              setFechaNacimiento(p.fechanacimiento)
              setCorreo(p.correo)
              setRut(p.rut)
              setIdPersona(p.idPersona!)

                

            }
        })
    },[])



      //para validar un nombre, se tendria que recorrer nombre para verificar si tiene valor
      const actualizar = () => {
          
          if (edad>0){
            alert("Bienvenido " + nombre + " " + apellido + " " + "Edad: " + edad)
            const p:persona = {
              nombre, apellido, edad, genero, telefono, fechanacimiento, correo, rut
          }
           actualizarPersona(idPersona,p)
          }
          
          else{
            setErrorEdad("La edad debe ser positiva")
          }
      }
      return(
  //Formulario
    <form>
       <p>Registrate</p>
        <br />

        <label>Nombre: </label>
        <input type="text" 
          onChange={(e)=>setNombre(e.target.value)}
          value={nombre}
          />
        
        <br />

        <label>Apellido: </label>
        <input type="text" 
          onChange={(e)=>setApellido(e.target.value)}
          value={apellido}
        />
        
        <br />

        <label>Edad: </label>
        <input type="number" 
          onChange={(e)=>setEdad(parseInt(e.target.value))}
          value={edad}
        />
        <span>{errorEdad}</span>

        <br />

        <label> Selecciona Tu Genero: </label>
        <select onChange={(e)=>setGenero((e.target.value))}
          value={genero}> 
        <br />
    
        <br />
        <option value=""></option>
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option> 
        </select> 
        
        <br />

        <label> Telefono: </label>
        <input type= "tel" 
        onChange={(e)=>setTelefono(e.target.value)}
        value={telefono}
        />
        
        <br/>

        <label >Fecha de Nacimiento: </label>
        <input type='date'
        onChange={(e)=>setFechaNacimiento(e.target.value)}
        value={fechanacimiento}
        />
        <br />


        <label> Ingresa tu correo: </label>
        <input type='email'
        onChange={(e)=>setCorreo(e.target.value)}
        value={correo}
        />
        <br />


        <label> Ingrese su RUT: </label>
        <input type=''
        onChange={(e)=>setRut(e.target.value)}
        value={rut}
        />
        
        <br />

        <button onClick={actualizar} type="button">Actualizar</button>

    
      
    </form>
  
      )
  }


