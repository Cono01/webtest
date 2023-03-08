import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://fjla.duckdns.org:8081/API/CheckPagoBulto/Check/123231231")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {/*data.map(item => {
        if (item.length === 26) {
          return <Navigate to="/ingresaEnvio" />;
        } else if (item.length === 0 || item.length == null) {
            return <Navigate to="/errorInvalido" />;
        }else if (item.length >= 1 && item.length <= 25 ) {
            return <Navigate to="/errorNoCorresponde" />;
        }
        return null;
      */}
    </ul>
  );
};

export default Data;
