import React from 'react'

const admin = () => {

    return (
        <div id="wrapper">

            <div id="content-wrapper" className="d-flex flex-column">


                <div className="container-fluid">
                    <h4 className="text-center my-4" > Gestion de Usuarios Internos </h4>
                    <table className="table table-bordered">
                        <thead className="table-dark" >
                            <tr>
                                <th>Empleado</th>
                                <th>Trabajo</th>
                                <th>Ajustes </th>


                            </tr>
                        </thead>
                        <tbody className="table-dark  table-hover ">
                            <tr>
                                <td> Anna Rivera </td>
                                <td> Limpieza facial </td>
                                <td> <div className="col-lg-2 "> <button type="button" className="btn btn-danger" >Cancelar</button> </div>  <div className="col-lg-4 mt-2"> <button type="button" className="btn btn-primary" >Editar</button> </div>     </td>

                            </tr>

                            <tr>
                                <td>Maria Castro</td>
                                <td> Hidratación Facial</td>
                                <td> <div className="col-lg-2 "> <button type="button" className="btn btn-danger" >Cancelar</button> </div> <div className="col-lg-4 mt-2"> <button type="button" className="btn btn-primary" >Editar</button> </div>   </td>

                            </tr>


                            <tr>
                                <td>Karina Ramirez</td>
                                <td> Grafilado </td>
                                <td> <div className="col-lg-2 "> <button type="button" className="btn btn-danger" >Cancelar</button> </div> <div className="col-lg-4 mt-2"> <button type="button" className="btn btn-primary" >Editar</button> </div>   </td>

                            </tr>


                            <tr>
                                <td> Luz Maria </td>
                                <td> Pixie</td>
                                <td> <div className="col-lg-2 "> <button type="button" className="btn btn-danger" >Cancelar</button> </div>  <div className="col-lg-4 mt-2"> <button type="button" className="btn btn-primary" >Editar</button> </div>    </td>

                            </tr>


                            <tr>
                                <td>Javier Rodriguez</td>
                                <td>Degradado</td>
                                <td> <div className="col-lg-2 "> <button type="button" className="btn btn-danger" >Cancelar</button> </div> <div className="col-lg-4 mt-2"> <button type="button" className="btn btn-primary" >Editar</button> </div>   </td>


                            </tr>

                            <tr>
                                <td>Juan Ortega</td>
                                <td>Buzz</td>
                                <td> <div className="col-lg-2 "> <button type="button" className="btn btn-danger" >Cancelar</button> </div> <div className="col-lg-4 mt-2"> <button type="button" className="btn btn-primary" >Editar</button> </div>   </td>

                            </tr>

                        </tbody>


                    </table>
                    <div className="ml-5">
                        <form className="user">
                            <div className="form-group row ">
                                <div className="col-5">
                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                        placeholder="Nombre" />
                                </div>
                                <div className="col-5">
                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                        placeholder="Trabajo" />
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-success">Agregar</button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default admin;