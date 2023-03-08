import React from "react";
// Componente dinámico

//FUNCION BOTON ACEPTAR -RECEPCIONAR-

export function btnRecepcionar() {
  let xhr = new XMLHttpRequest();

  //se toma el codigo escaneado y se envía al backend
  xhr.open(
    "GET",
    "http://fjla.duckdns.org:8081/API/CheckPagoBulto/Check/123231231"
  );

  xhr.responseType = "json";

  xhr.send();

  xhr.onload = function () {
    let responseObj = xhr.response;
    //respuesta del back
    console.log(responseObj);

    //condicional que compara statusCode con numero q corresponde a cada ruta
    if (responseObj.status == 200) {
      window.location.href = "/Barradeestado";
    } else if (responseObj.status == 500) {
      window.location.href = "/errorInvalido";
    }
  };
}

//FUNCION BOTON CANCELAR -RECEPCIONAR-

export function btnCancelar() {
  let xhr = new XMLHttpRequest();

  //se toma el codigo escaneado y se envía al backend
  xhr.open(
    "GET",
    "http://fjla.duckdns.org:8081/API/CheckPagoBulto/Check/123231231"
  );

  xhr.responseType = "json";

  xhr.send();

  xhr.onload = function () {
    let responseObj = xhr.response;
    //respuesta del back
    console.log(responseObj);

    //condicional que compara statusCode con numero q corresponde a cada ruta
    if (responseObj.status == 200) {
      window.location.href = "/deseasFinalizar";
    } else if (responseObj.status == 500) {
      window.location.href = "/errorInvalido";
    }
  };
}
