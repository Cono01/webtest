import React from "react";
import "../Assets/Css/Terminoderecepcion.css";
//import { useLocation } from "react-router-dom";

class TerminoderecepcionComponent extends React.Component {
  render() {
    console.log();
    return (
      <div class="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
        <div class="container">
          <div class="flex-item col-12 mt-3">
            <h1 class="textoTermino">
              Tu paquete ha sido recepcionado con exito
            </h1>
          </div>
          <div class="flex-item col-12 mt-3">
            <h2 class="textoSubTermino">
              ¡Tu orden tiene envíos, te faltan por ingresar !
            </h2>{" "}
          </div>
          <div class="flex-item col-12 mt3">
            <i id="IconoTermino" class="fa-sharp fa-solid fa-check-double"></i>
          </div>
          <div class="flex-item col-12 mt-3">
            <h2 class="textoSubTermino2">¿Deseas seguir ingresando envíos?</h2>
          </div>
          <div class="container">
            <div class="buttons">
              <a type="btn" href="/Barradeestado">
                <button class="boton-confirmar2">Confirmar</button>
              </a>
              <a class="btn" href="/deseasFinalizar">
                <button class="boton-finalizar">Finalizar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TerminoderecepcionComponent;
