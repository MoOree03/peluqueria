import { Link } from 'react-router-dom'
import React from 'react'

const Nav = ({name,setName=()=>{}}) => {

    const logout = async () => {
        await fetch('http://localhost:4000/api/logout', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        setName('');
    }
    let menu;
    if (typeof name === 'undefined') {
        menu = (
            <ul className="navbar-nav ml-auto ">

                <li className="nav-item mx-2">
                    <Link to="/" className="nav-link">
                        Inicio
                    </Link>
                </li>
                <li className="nav-item mx-2">
                    <Link to="/servicios" className="nav-link">
                        Servicios
                    </Link>
                </li>
                <li className="nav-item mx-2">
                    <Link to="/ingresar" className="nav-link">
                        Ingresar
                    </Link>
                </li>
                <li className="nav-item mx-2">
                    <Link to="/registro" className="nav-link">
                        Registrarse
                    </Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav ml-auto ">

                <li className="nav-item mx-2">
                    <Link to="/" className="nav-link">
                        Inicio
                    </Link>
                </li>
                <li className="nav-item mx-2">
                    <Link to="/servicios" className="nav-link">
                        Servicios
                    </Link>
                </li>
                <li className="nav-item mx-2">
                    <Link to="/ingresar" className="nav-link" onClick={logout}>
                        Salir
                    </Link>
                </li>
            </ul>

        )

    }



    return (
        <nav className="navbar navbar-expand navbar-dark bg-gradient-warning topbar  static-top shadow px-5">
            <Link className="navbar-brand"  to="/">
                <img src="/img/salon.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                PeluqueriaUnisex
            </Link>
            {menu}
        </nav>
    )
}


export default Nav;