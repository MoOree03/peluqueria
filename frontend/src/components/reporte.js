import React from 'react'

const reporte = () => {

    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">

                <div class="container">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h4 class="m-0 font-weight-bold text-primary text-center">Reportes</h4>
                        </div>
                        <div className="m-5">
                            <form className="user">
                                <div className="form-group row text-center">
                                    <div className="col-12 text-center">
                                        <button type="button" class="btn btn-info">Espacios disponibles en la agenda dado día y servicio</button>
                                    </div>
                                </div>
                                <div className="form-group row text-center ">
                                    <div className="col-6 text-center">
                                        <button type="button" class="btn btn-info">Usuarios atendidos por día</button>
                                    </div>
                                    <div className="col-6 text-center">
                                        <button type="button" class="btn btn-info">Ingresos por día y por servicio.</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="p-5">

                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}


export default reporte;