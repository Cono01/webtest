import React from "react";
import "../Assets/Css/Envionopagado.css";

const EnvionopagadoComponent = () => {
  return (
    <div className="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
      <div>
        <div className="flex-item col-12 mt-5">
          <i id="IconoAlerta" class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div className="flex-item col-12 mt-5">
          <h1 id="Envionopagado">Envío rechazado</h1>
        </div>
        <div className="flex-item col-12 mt-3">
          <h1 id="EnvioSubnopagado">
            Tu envío no ha sido pagado, realiza nuevamente <br></br>
            la operación en el totem de autoatención{" "}
          </h1>
        </div>
        <div>
          <a type="btn" href="/">
            <button className="boton-Aceptar1">Aceptar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnvionopagadoComponent;
