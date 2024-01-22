import { useState } from "react"


export const VinculaElementos = () => {

    const [eco, setEco] = useState("Escuchando el eco");

     const provocarEco =(evento) =>{
        setEco(evento.target.value);
     }

  return (
    <>
        <textarea onChange={provocarEco} name="" id="" cols="30" rows="10"></textarea>
        <p>{eco}</p>
    </>
  )
}
