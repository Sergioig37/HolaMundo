import React from 'react';
import ReactDOM from 'react-dom/client';
//Para importar solo ese componente hay que poner el nombre del componente que quieres pillar  y las llaves
import {MiNombreApp} from './MiNombreApp';
import './estilos.css';
import { CounterApp } from './CounterApp';
import { Ejercicio5 } from './Ejercicio5';
import { VinculaElementos } from './VinculaElementos';
import { BotonDeshabilita } from './BotonDeshabilita';





ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     <CounterApp value={50} />
     <Ejercicio5></Ejercicio5>
     <VinculaElementos></VinculaElementos>
     <BotonDeshabilita></BotonDeshabilita>
    </React.StrictMode>
);
// imp atajo para importar
//rafc = React Arrow Function Component, te crea directamente un componenete
//rafce = Crea el componente y lo exporta

MiNombreApp.defaultProps = {
    subtitle: "No hay"
}