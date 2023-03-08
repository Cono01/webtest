import React from "react";
import "../Assets/Css/escaneaTuencomienda.css";
import cajaBienvenidos from "../Assets/img/caja.gif";

function escaneaTuencomienda() {
  return (
    <div className="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
      <div>
        <div id="textoEnviar" className="flex-item col-12 mt-3">
          <h2>
            Puedes seguir escaneando códigos para <br></br>recepcionar todos tus
            envios
          </h2>
        </div>
        <div className="flex-item col-12 mt-5">
          <a href="/Barradeestado">
            <img id="IMGTitulo" src={cajaBienvenidos} alt="cajaBienvenidos" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default escaneaTuencomienda;
