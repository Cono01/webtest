import React from "react";
import "../Assets/Css/Codigonocorrespondealaordendeflete.css";

const CodigonocorrespondealaordendefleteComponent = () => {
  return (
    <div className="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
      <div>
        <div className="flex-item col-12 mt-5">
          <i id="IconoAlerta" class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div className="flex-item col-12 mt-3">
          <h1 id="textoCodigonocorresponde">
            El código de tu envío no corresponde<br></br>a la orden de flete en
            curso
          </h1>
        </div>
        <div className="flex-item col-12 mt-5">
          <h2 id="textoSubCodigonocorresponde">
            ¡Por favor intenta nuevamente!
          </h2>
        </div>

        <div>
          <a type="btn" href="/">
            <button className="boton-Aceptar6">Aceptar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodigonocorrespondealaordendefleteComponent;
