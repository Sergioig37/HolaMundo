import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  //esto es un hook, son funciones que nos permiten conectarnos al estado de React
  const [contador, setContador] = useState(value);

  //El hook se puede refrescar con el setContador, es la única manera de cambiar la constante.
  const pulsar = (evento) => {
    if (evento.target.text === "+1") console.log("+1");
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const resetear = () => {
    setContador(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{contador}</h2>

      <button onClick={pulsar}>+1</button>
      <button onClick={restar}>-1</button>
      <button onClick={resetear}>reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

