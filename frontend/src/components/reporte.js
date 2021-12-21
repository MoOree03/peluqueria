import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Modal, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const baseUrl = "http://localhost:5000/api/reservas";
const columnas = [
  {
    title: "Fecha",
    field: "date",
  },
  {
    title: "Hora",
    field: "hora",
  },
  {
    title: "Servicio",
    field: "servicio",
  },
  {
    title: "Usuario",
    field: "usuario",
  },
  {
    title: "Estado",
    field: "estado",
  },
];
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));
function Reporte() {
  const [data, setData] = useState([]);
 
  const styles = useStyles();

  const peticionGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);


  
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="container">
          <div className="card shadow my-4">
            <div className="card-header py-3">
              <h4 className="m-0 font-weight-bold text-primary text-center">
                Reportes
              </h4>
            </div>

              <MaterialTable
                columns={columnas}
                data={data}
                title={""}
              
                localization={{
                  header: {
                    actions: "Acciones",
                  },
                }}
              />
              
            </div>
          </div>
        </div>
      </div>
  );
}

export default Reporte;
