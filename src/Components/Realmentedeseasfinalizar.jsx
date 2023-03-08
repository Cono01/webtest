import React from "react";
import "../Assets/Css/realmentedeseasfinalizar.css";

function RealmentedeseasfinalizarComponent() {
  return (
    <div className="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
      <div class="container">
        <div className="flex-item col-12 mt-5">
          <i id="IconoAlerta1" class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div className="flex-item col-12 mt-3">
          <h1 className="textoFinalizar">¿Realmente deseas finalizar?</h1>
        </div>
        <div className="flex-item col-12 mt-3">
          <h2 className="textoSubFinalizar">
            Tu orden tiene 5 bultos, te faltan por <br></br>recepcionar 4
          </h2>{" "}
        </div>
        <div className="flex-item col-12 mt3">
          <i id="IconoWarning" class="fa-solid fa-circle-exclamation"></i>
        </div>
        <div className="flex-item col-12 mt-3">
          <h2 className="textoSubWarning">
            Si finalizas ahora tus envíos ingresados no serán enviados a
            destinatario.
          </h2>
        </div>
        <div className="container">
          <div className="buttons">
            <a type="btn" href="/escaneaTuencomienda  ">
              <button className="boton-Volver">Volver</button>
            </a>
            <a className="btn" href="/encuesta">
              <button className="boton-finalizar1">Finalizar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealmentedeseasfinalizarComponent;
