import { persona } from "../Interfaces";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./Conexion"


export const registrarPersona = async(p:persona)=>{
    
      const docRef = await addDoc(collection(db, "personas"), p)

}

export const obtenerPersonas = async()=>{
    const querySnapshot = await getDocs(collection(db, "personas"));
    console.log("CHAOOO")
    console.log(querySnapshot)
    var personas:persona[] = []
    querySnapshot.forEach((d)=>{
        console.log(d.id)
        console.log(d.data())
        var p:persona = {
            nombre:d.data().nombre,
            apellido:d.data().apellido,
            edad:parseInt(d.data().edad),
            genero:d.data().genero,
            telefono:d.data().telefono,
            fechanacimiento:d.data().fechanacimiento,
            correo:d.data().correo,
            rut:d.data().rut,
            idPersona:d.id
        } 
        personas.push(p)
    })
    return personas
}
export const obtenerPersona = async(idPersona:string)=>{
    const docRef = doc(db, "personas", idPersona);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const p:persona = {
            nombre:docSnap.data().nombre,
            apellido:docSnap.data().apellido,
            edad:docSnap.data().edad,
            genero:docSnap.data().genero,
            telefono:docSnap.data().telefono,
            fechanacimiento:docSnap.data().fechanacimiento,
            correo:docSnap.data().correo,
            rut:docSnap.data().rut,
            idPersona:docSnap.id
        }
        return p
    } else {
    // docSnap.data() will be undefined in this case
        return undefined
    }
}
export const actualizarPersona = async(idPersona:string,p:persona)=>{
    const docRef = doc(db, "personas", idPersona);

// Set the "capital" field of the city 'DC'
    await updateDoc(docRef, {...p});
}
export const eliminarPersona = async(idPersona:string)=>{
    await deleteDoc(doc(db, "personas", idPersona));
}