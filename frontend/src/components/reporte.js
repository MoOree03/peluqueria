import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from 'material-table'




const baseUrl = "http://localhost:5000/api/reservas";
const columnas = [
  {
     title:"Fecha",
     field:"date"
  },
  {
    title:"Hora",
    field:"hora"
 },
 {
  title:"Servicio",
  field:"servicio"
},
{
  title:"Usuario",
  field:"usuario"
},
{
  title:"Estado",
  field:"estado"
},
]
function Reporte() {
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
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

            <div className="card-body">
              <MaterialTable
                columns={columnas}
                data={data}
                title={""}
                actions={[
                  {
                    icon:'edit',
                    tooltip:'Editar Registro', 
                    onClick:(event,rowData)=>alert('Has presionado editar: '+rowData.date)
                  },
                  {
                    icon:'delete',
                    tooltip:'Eliminar Registro', 
                    onClick:(event,rowData)=>window.confirm('Estás seguro de eliminar '+rowData.date+'?')
                  }
                ]}
                options={{
                  actionsColumnIndex:-1
                }}
                localization={{
                  header:{
                    actions:'Acciones'
                  }
                }}
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reporte;
