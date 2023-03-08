import React from "react";
import "../Assets/Css/Rechazadopordimensiones.css";

const RechazadopordimensionesComponent = () => {
  return (
    <div className="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
      <div>
        <div className="flex-item col-12 mt-5">
          <i id="IconoAlerta" class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div className="flex-item col-12 mt-5">
          <h1 id="textoNopago">Envío rechazado</h1>
        </div>
        <div className="flex-item col-12 mt-3">
          <h1 id="textoDimensiones">
            El peso y medidas de tu envío no concuerdan con<br></br>
            lo ingresado en el totem{" "}
          </h1>
        </div>
        <div className="flex-item col-12 mt-5">
          <h2 id="textoSubdimensiones">
            ¡Por favor retira el envío y reintenta!
          </h2>
        </div>
        <div>
          <a type="btn" href="/escaneaTuencomienda">
            <button className="boton-Aceptar">Aceptar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RechazadopordimensionesComponent;
