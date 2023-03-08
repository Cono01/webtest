import React from "react";
import "../Assets/Css/Etiquetanovalida.css";

const EtiquetanovalidaComponent = () => {
  return (
    <div className="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
      <div>
        <div className="flex-item col-12 mt-5">
          <i id="IconoAlerta" className="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div className="flex-item col-12 mt-3">
          <h1 id="Etiquetanovalida">
            El código de tu envío no es válido para <br></br>ser recepcionado en
            esta sucursal
          </h1>
        </div>
        <div>
          <a type="btn" href="/">
            <button className="boton-Aceptar0">Aceptar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EtiquetanovalidaComponent;
