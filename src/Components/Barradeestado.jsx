import React from "react";
import "../Assets/Css/Barradeestado.css";
import Boxtransportadora from "../Assets/img/box.gif";
import icon from "../Assets/img/check-solid.svg";
import icon2 from "../Assets/img/box-solid.svg";
import icon3 from "../Assets/img/face-smile-regular.svg";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

class BarradeestadoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "Estamos verificando medidas",
      icon: icon,
      cantPaquetes: null,
      cantPaquetesRest: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text1: "Guardando bulto en la bodega",
        icon: icon2,
      });
    }, 2500);
    setTimeout(() => {
      this.setState({
        text1: "Tu paquete está listo",
        icon: icon3,
        cantPaquetes: 2,
        cantPaquetesRest: 1,
      });
    }, 5000);
  }

  render() {
    return (
      <div className="d-flex flex-wrap align-content-center flex-content text-center justify-content-center mx-auto">
        <div>
          <div id="textoBienvenida" className="flex-item col-12 mt-5">
            <h1>
              Tu envio esta siendo ingresado a la <br></br> bodega
            </h1>
          </div>
          <div className="flex-item col-12 mt-5">
            <a href="/Terminoderecepcion">
              <img
                id="IMGescaneaTuencomienda"
                src={Boxtransportadora}
                alt="Boxtransportadora"
              />
            </a>
            {this.state.cantPaquetesRest === 0 ||
            this.state.cantPaquetes === 1 ? (
              <Link
                to="/encuesta"
                state={{
                  cantPaquetesRest: this.state.cantPaquetesRest,
                  cantPaquetes: this.state.cantPaquetesRest,
                }}
              />
            ) : null}
            {this.state.cantPaquetesRest >= 1 ? (
              <Navigate
                to="/Terminoderecepcion"
                state={{
                  cantPaquetesRest: this.state.cantPaquetesRest,
                  cantPaquetes: this.state.cantPaquetesRest,
                }}
              />
            ) : null}
          </div>
          <div className="container-barraestado">
            <div className="tex">
              <h1>
                {this.state.text1}{" "}
                <img
                  width="50"
                  height="50"
                  id="imagenIcono"
                  src={this.state.icon}
                  alt="Boxtransportadora"
                />
              </h1>
            </div>
            <div className="loading">
              <div className="line-box">
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BarradeestadoComponent;
