import React from "react";
import "../Assets/Css/Rechazadopordimensionesypesocero.css";

const RechazadopordimensionesypesoceroComponent = () => {
  return (
    <div className="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
      <div>
        <div className="flex-item col-12 mt-5">
          <i id="IconoAlerta1" class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div className="flex-item col-12 mt-3">
          <h1 id="textoDimensionesypeso0">
            Para continuar debes colocar el bulto <br></br>dentro del módulo{" "}
          </h1>
        </div>

        <div>
          <a type="btn" href="/escaneaTuencomienda">
            <button className="boton-Aceptar5">Aceptar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RechazadopordimensionesypesoceroComponent;
