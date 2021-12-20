import React from "react";

const reporte = ({reserva}) => {
  
  let tabla = (
    <table id="table_id" className="display">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Servicio</th>
          <th>Usuario</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Row 2 Data 1</td>
          <td>Row 2 Data 2</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="container">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h4 className="m-0 font-weight-bold text-primary text-center">
                Reportes
              </h4>
            </div>
            <div className="card-body">
                {tabla}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reporte;
