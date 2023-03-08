import React from "react";
import "../Assets/Css/Ingresaenvio.css";
import { btnCancelar, btnRecepcionar } from "./funciones.js";

function Ingresaenvio() {
  return (
    <div className="d-flex flex-wrap align-content-center flex-content text-justify text-center justify-content-center mx-auto mt-5">
      <div>
        <div id="textoIngresaenvio" className="flex-item col-12 mt-5">
          <h1 className="textoIngresaenvio">
            Ingresa el envío en el módulo y luego confirma para iniciar<br></br>
            la recepción. Asegurate de ingresar el envío <br></br>
            escaneado principalmente
          </h1>
        </div>
        <div id="textoSubIngresaenvio" className="d-flex flex-item mt-5">
          <i className="fa-solid fa-circle-exclamation"></i>
          <h2>Por favor coloca un bulto a la vez dentro del módulo</h2>
        </div>

        <div className="container">
          <div className="buttons">
            {/* Con esto importamos el boton
             */}
            <button className="boton-confirmar" onClick={btnRecepcionar}>
              Confirmar
            </button>

            <button className="boton-cancelar" onClick={btnCancelar}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ingresaenvio;
