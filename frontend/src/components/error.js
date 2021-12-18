import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {

    return (
        <div className="container-fluid mt-5">
            <div className="text-center">
                <div className="error mx-auto" data-text="404">404</div>
                <p className="lead text-gray-800 mb-5">Pagina no encontrada!</p>
                <Link to="/" className="nav-link">
                            Volver al inicio
                </Link>
            </div>
        </div>
    )

}
export default Error;