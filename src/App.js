
import './App.css';
import "../src/Components/Barrascolor"
import BarrascolorComponent from '../src/Components/Barrascolor';
import BarrascolordownComponent from './Components/Barracolordown';
import Encuesta from "./Components/Encuesta";
import IngresaEnvio from "./Components/Ingresaenvio";
import Escanea from "./Components/escaneaTuencomienda";
import BienvenidosComponent from './Components/Bienvenidos';
import BarradeestadoComponent from './Components/Barradeestado';
import TerminoderecepcionComponent from './Components/Terminoderecepcion';
import BarrascolordownAlertComponent from './Components/BarracolordownAlert';
import BarrascolorAlertComponent from '../src/Components/BarrascolorAlert';
import EtiquetanovalidaComponent from './Components/Etiquetanovalida';
import EnvionopagadoComponent from './Components/Envionopagado';
import RechazadopordimensionesComponent from './Components/Rechazadopordimensiones';
import RechazadopordimensionesmaximasComponent from './Components/Rechazadopordimensionesmaximas';
import RechazadopordimensionesypesoceroComponent from './Components/Rechazadopordimensionesypesocero';
import CodigonocorrespondealaordendefleteComponent from './Components/Codigonocorrespondealaordendeflete';
import RealmentedeseasfinalizarComponent from './Components/Realmentedeseasfinalizar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes><Route path="/deseasFinalizar" element={ 
          <><BarrascolorAlertComponent/><RealmentedeseasfinalizarComponent /><BarrascolordownAlertComponent/></>} />
      <Route path="/errorNoCorresponde" element={ 
          <><BarrascolorAlertComponent/><CodigonocorrespondealaordendefleteComponent/><BarrascolordownAlertComponent/></>} />
      <Route path="/errorDimensionesCero" element={ 
          <><BarrascolorAlertComponent/><RechazadopordimensionesypesoceroComponent/><BarrascolordownAlertComponent/></>} />
      <Route path="/errorDimensionesMaximas" element={ 
          <><BarrascolorAlertComponent/><RechazadopordimensionesmaximasComponent/><BarrascolordownAlertComponent/></>} />
      <Route path="/errorDimensiones" element={ 
          <><BarrascolorAlertComponent/><RechazadopordimensionesComponent/><BarrascolordownAlertComponent/></>} />
      <Route path="/errorInvalido" element={ 
          <><BarrascolorAlertComponent/><EtiquetanovalidaComponent/><BarrascolordownAlertComponent/></>} /> 
      <Route path="/errorNoPagado" element={ 
          <><BarrascolorAlertComponent/><EnvionopagadoComponent/><BarrascolordownAlertComponent/></>} /> 
        <Route path="/" element={ 
          <><BarrascolorComponent/><BienvenidosComponent/><BarrascolordownComponent/></>} /> 
        <Route path="/ingresaEnvio" element={<><BarrascolorComponent/><IngresaEnvio /><BarrascolordownComponent/></>} />
        <Route path="/Barradeestado" element={<><BarrascolorComponent/><BarradeestadoComponent /><BarrascolordownComponent/></>} />
        <Route path="/Terminoderecepcion" element={<><BarrascolorComponent/><TerminoderecepcionComponent/><BarrascolordownComponent/></>} />
        <Route path="/encuesta" element={<><BarrascolorComponent/><Encuesta /><BarrascolordownComponent/></>} />
        <Route path="/escaneaTuencomienda" element={<><BarrascolorComponent/><Escanea /><BarrascolordownComponent/></>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
