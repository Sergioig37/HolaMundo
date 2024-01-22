import React, { useState } from 'react'

export const BotonDeshabilita = () => {

    const [enabled, setEnabled] = useState(true);
    const deshabilitarHabiltitar = (evento) =>{
        if(evento.target.value===""){
            setEnabled(true);
        }
        else if(evento.target.value!==null){
            setEnabled(false);
        }
    }

  return (
    <>
        <input type="text" onChange={deshabilitarHabiltitar}/>
        <button disabled={enabled}>Enviar</button>
    </>
  )
}
