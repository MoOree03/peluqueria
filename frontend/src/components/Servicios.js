import { Link } from 'react-router-dom'
import React from 'react'

const Servicios = () => {

    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">

                <div className="container mt-5" style={{ height: "100%" }} >



                    <div className="card o-hidden border-0 shadow-lg mb-5 p-5">
                        <h2 className="text-center mb-5">Nuestros Servicios!</h2>
                        <div className="card-deck">
                            <div className="card">
                                <img src="img/servicio1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Servicio 1</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec arcu odio. Maecenas quis orci aliquet, tincidunt purus luctus, aliquet risus. Curabitur eget lobortis massa. Ut eget sagittis sapien. In interdum eget enim ac ultrices. Cras condimentum convallis est et hendrerit.</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/servicio" className="nav-link text-center">
                                        Agendar!
                                    </Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src="img/servicio2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Servicio 2</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec arcu odio. Maecenas quis orci aliquet, tincidunt purus luctus, aliquet risus. Curabitur eget lobortis massa. Ut eget sagittis sapien. In interdum eget enim ac ultrices. Cras condimentum convallis est et hendrerit.</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/servicio" className="nav-link text-center">
                                        Agendar!
                                    </Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src="img/servicio3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Servicio 3</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec arcu odio. Maecenas quis orci aliquet, tincidunt purus luctus, aliquet risus. Curabitur eget lobortis massa. Ut eget sagittis sapien. In interdum eget enim ac ultrices. Cras condimentum convallis est et hendrerit.</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/servicio" className="nav-link text-center">
                                        Agendar!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Servicios;