var barcode = "";
var interval;
var showModal = false;
function leerBarcode() {
  document.addEventListener("keydown", function (evt) {
    if (interval) clearInterval(interval);
    if (evt.code === "Enter") {
      if (barcode) handleBarcode(barcode);
      barcode = "";
      return;
    }
    if (evt.key !== "Shift") barcode += evt.key;
    interval = setInterval(() => (barcode = ""), 20);
    showModal = true;
    window.showModal = showModal;
  });
}
window.showModal = false;
window.onload = leerBarcode;

function handleBarcode(scanned_barcode) {
  //se envía el codigo escaneado al servicio llamar.
  showModal = false;
  LLamarServicio(scanned_barcode);
}

function LLamarServicio(scanned_barcode) {
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
    if (responseObj.status == 200) {
      window.location.href = "/ingresaEnvio";
    } else if (responseObj.status == 500) {
      window.location.href = "/errorInvalido";
    } else if (responseObj.status == 501) {
      window.location.href = "/errorNoPagado";
    } else if (responseObj.status == 502) {
      window.location.href = "/errorDimensiones";
    } else if (responseObj.status == 509) {
      window.location.href = "/errorDimensionesMaximas";
    } else if (responseObj.status == 506) {
      window.location.href = "/errorDimensionesCero";
    } else if (responseObj.status == 510) {
      window.location.href = "/errorNoCorresponde";
    }
  };
}
