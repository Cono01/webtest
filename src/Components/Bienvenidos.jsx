import React from "react";
import "../Assets/Css/Bienvenidos.css";
import cajaBienvenidos from "../Assets/img/caja.gif";
import { Navigate } from "react-router-dom";
import Modalespera from "./Modalespera";

class BienvenidosComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

  }

 leerBarcode(){
document.addEventListener("keydown", function (evt) {
  var barcode = "";
  var interval;
  if (interval) clearInterval(interval);
  if (evt.code === "Enter") {
    if (barcode) this.handleBarcode(barcode);
    barcode = "";
    this.setState({ isOpen: true });
    return;
  }
  if (evt.key !== "Shift") barcode += evt.key;
  interval = setInterval(() => (barcode = ""), 20);

});
}

  handleBarcode(scanned_barcode) {
    //se envía el codigo escaneado al servicio llamar.
    this.LLamarServicio(scanned_barcode);
  }
  
  LLamarServicio(scanned_barcode) {
    let xhr = new XMLHttpRequest();
  
    //se toma el codigo escaneado y se envía al backend
    xhr.open(
      "GET",
      "http://fjla.duckdns.org:8081/API/CheckPagoBulto/Check/123231231" +
        scanned_barcode
    );
  
    xhr.responseType = "json";
  
    xhr.send();
  
    xhr.onload = function () {
      let responseObj = xhr.response;
      //respuesta del back
      console.log(responseObj);
  
      //condicional que compara statusCode con numero q corresponde a cada ruta
      if (responseObj.status === 200) {
        window.location.href = "/ingresaEnvio";
      } else if (responseObj.status === 500) {
        window.location.href = "/errorInvalido";
      } else if (responseObj.status === 501) {
        window.location.href = "/errorNoPagado";
      } else if (responseObj.status === 502) {
        window.location.href = "/errorDimensiones";
      } else if (responseObj.status === 509) {
        window.location.href = "/errorDimensionesMaximas";
      } else if (responseObj.status === 506) {
        window.location.href = "/errorDimensionesCero";
      } else if (responseObj.status === 510) {
        window.location.href = "/errorNoCorresponde";
      }
    };
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const codigoDevuelto = null;

    return (
      <>
        <div className="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
          <div>
          <Modalespera isOpen={this.state.isOpen} closeModal={this.closeModal.bind(this)} />


            <div id="textoBienvenida" className="flex-item col-12 mt-5">
              <h1>¡Bienvenido!</h1>
            </div>
            <div id="textoSubBienvenida" className="flex-item col-12 mt-3">
              <h2>Para comenzar escanea el código de tu envío</h2>
            </div>
            <div className="flex-item col-12 mt-5">
              <a type="btn" href="/Ingresaenvio">
                <img
                  id="IMGTitulo"
                  src={cajaBienvenidos}
                  alt="cajaBienvenidos"
                />
              </a>
            </div>

            {codigoDevuelto === 500 ? <Navigate to="/errorInvalido" /> : null}
            {codigoDevuelto === 501 ? <Navigate to="/errorNoPagado" /> : null}
            {codigoDevuelto === 502 ? (
              <Navigate to="/errorDimensiones" />
            ) : null}
            {codigoDevuelto === 509 ? (
              <Navigate to="/errorDimensionesMaximas" />
            ) : null}
            {codigoDevuelto === 506 ? (
              <Navigate to="/errorDimensionesCero" />
            ) : null}
            {codigoDevuelto === 510 ? (
              <Navigate to="/errorNoCorresponde" />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default BienvenidosComponent;
