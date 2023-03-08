import React from "react";
import "../Assets/Css/Encuesta.css";
import carita1 from "../Assets/img/c1.png";
import carita2 from "../Assets/img/c2.png";
import carita3 from "../Assets/img/c3.png";

function Encuesta() {
  return (
    <div
      id="Textocontenedor"
      className="container d-flex flex-wrap align-content-center flex-content text-center justify-content-center "
    >
      <div id="TextoSatisfaccion" className="flex-item col-12 mt-5">
        <h1>
          ¿Que tan satisfactoria fue tu experiencia<br></br>
          de autoatención hoy?
        </h1>
      </div>

      <div className="flex-item col-4 mt-5 col-md-3 ml-md-auto">
        <a type="btn" href="/">
          <img id="IMGTC1" src={carita1} alt="caraenojada" />
        </a>
      </div>
      <div className="flex-item col-4 mt-5 col-md-2 ml-md-auto">
        <a type="btn" href="/">
          <img id="IMGC2" src={carita2} alt="caramedia" />
        </a>
      </div>
      <div className="flex-item col-4 mt-5 col-md-3 ml-md-auto">
        <a type="btn" href="/">
          <img id="IMGC3" src={carita3} alt="carafeliz" />
        </a>
      </div>
    </div>
  );
}

export default Encuesta;
