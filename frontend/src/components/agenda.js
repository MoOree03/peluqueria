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
function Agenda() {
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [reservaSeleccionada, setReservaSeleccionada] = useState({
    date: "",
    hora: "",
    servicio: "",
    usuario: "",
    estado: "",
  });
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

  const peticionPost = async () => {
    await axios
      .post("http://localhost:5000/api/createReser", reservaSeleccionada)
      .then((response) => {
        setData(data.concat(response.data));
        abrirCerrarModalInsertar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPut = async () => {
    await axios
      .put(
        "http://localhost:5000/api/reservas/" + reservaSeleccionada._id,
        reservaSeleccionada
      )
      .then((response) => {
        var dataNew = data;
        dataNew.map((reserva) => {
          if (reserva._id === reservaSeleccionada._id) {
            reserva.date = reservaSeleccionada.date;
            reserva.hora = reservaSeleccionada.hora;
            reserva.servicio = reservaSeleccionada.servicio;
            reserva.estado = reservaSeleccionada.estado;
            reserva.usuario = reservaSeleccionada.usuario;
          }
        });
        setData(dataNew);
        abrirCerrarModalEditar();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const peticionDelete = async () => {
    await axios
      .delete(baseUrl + "/" + reservaSeleccionada._id)
      .then((response) => {
        setData(
          data.filter((reserva) => reserva._id !== reservaSeleccionada._id)
        );
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const seleccionarReserva = (reserva, caso) => {
    setReservaSeleccionada(reserva);
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };
  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };
  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Reserva</h3>
      <TextField
        className={styles.inputMaterial}
        label="Fecha"
        name="date"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Hora"
        name="hora"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Servicio"
        name="servicio"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Usuario"
        name="usuario"
        onChange={handleChange}
      />
      <TextField
        className={styles.inputMaterial}
        label="Estado"
        name="estado"
        onChange={handleChange}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPost()}>
          Insertar
        </Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Reserva</h3>
      <TextField
        className={styles.inputMaterial}
        label="Fecha"
        name="date"
        onChange={handleChange}
        value={reservaSeleccionada && reservaSeleccionada.date}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Hora"
        name="hora"
        onChange={handleChange}
        value={reservaSeleccionada && reservaSeleccionada.hora}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Servicio"
        name="servicio"
        onChange={handleChange}
        value={reservaSeleccionada && reservaSeleccionada.servicio}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Usuario"
        name="usuario"
        onChange={handleChange}
        value={reservaSeleccionada && reservaSeleccionada.usuario}
      />
      <TextField
        className={styles.inputMaterial}
        label="Estado"
        name="estado"
        onChange={handleChange}
        value={reservaSeleccionada && reservaSeleccionada.estado}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}>
          Editar
        </Button>
        <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  );
  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
        Estás seguro que deseas eliminar la reserva para
        <b>{reservaSeleccionada && reservaSeleccionada.servicio}</b>?{" "}
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => peticionDelete()}>
          Sí
        </Button>
        <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  );
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="container">
          <div className="card shadow my-4">
            <div className="card-header py-3">
              <h4 className="m-0 font-weight-bold text-primary text-center">
                Agenda
              </h4>
            </div>

            <div className="card-body ">
              <div className="container mb-2 ">
                <Button onClick={() => abrirCerrarModalInsertar()}>
                  <b>Insertar Reserva</b>
                </Button>
              </div>

              <MaterialTable
                columns={columnas}
                data={data}
                title={""}
                actions={[
                  {
                    icon: "edit",
                    tooltip: "Editar Registro",
                    onClick: (event, rowData) =>
                      seleccionarReserva(rowData, "Editar"),
                  },
                  {
                    icon: "delete",
                    tooltip: "Eliminar Registro",
                    onClick: (event, rowData) =>
                      seleccionarReserva(rowData, "Eliminar"),
                  },
                ]}
                options={{
                  actionsColumnIndex: -1,
                }}
                localization={{
                  header: {
                    actions: "Acciones",
                  },
                }}
              />
              <Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>
                {bodyInsertar}
              </Modal>
              <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
                {bodyEditar}
              </Modal>
              <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
                {bodyEliminar}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
