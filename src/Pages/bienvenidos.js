import React, { useCallback, useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import BienvenidosComponent from "../Components/Bienvenidos";

var errorInvalido = false;
function setErrorInvalido() {
 errorInvalido = true;
 if (errorInvalido === true) {
  window.location.href('/errorInvalido');

}
}
setInterval((setErrorInvalido()), 3000);

