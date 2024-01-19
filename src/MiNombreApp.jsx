
//Las constantes fuera del componenete
import PropTypes from 'prop-types';
const dni = "1234567M";
//los objetos no pueden ser pintados directamente como hijos,
//en cambio si usas JSON.stringify(objeto) el objeto se puede pintar en la página como JSON
const objeto = {
    nombre: "David",
    telefono: "i93498459903",
}

//esto son las propiedades que reciben las funciones de los componentes funcionales
//comunicación entre padre (main) e hijo (HolaMundoApp)

export const MiNombreApp = ({title, subtitle}) => {

  return (
    <>
      <h1>Sergio Iglesias García</h1>
      <p>{title}</p>
      <p>
        {subtitle}
      </p>
    </>
    //esto es un fragment, que es mejor que poner un div porque a  lo mejor el css
    //nos puede fastidiar. Siempre tiene que haber un elemento primario, div o fragment (<></>)
    // <>
    // </>
  );
};

MiNombreApp.propTypes = {
    title: PropTypes.number,
    subtitle: PropTypes.string.isRequired
}

MiNombreApp.defaultProps = {
    subtitle: "No hay"
}