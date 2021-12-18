import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Login = ({ setName = () => {} }) => {
    const [email, setEmail] = useState('');
    const [password, setConstrasena] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        setRedirect(true);
        setName(content.name);
    }

    if (redirect) {
        return <Navigate to="/" />;
    }
    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">

                <div className="container mt-5" style={{ height: "100%" }} >


                    <div className="card o-hidden border-0 shadow-lg mb-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}

                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block ">
                                    <img className="rounded img-fluid p-5" src="img/ingreso.jpg" style={{ height: "100%" }} alt="..." />
                                </div>
                                <div className="col-lg-6 my-auto">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Bienvenido de vuelta!</h1>
                                        </div>
                                        <form className="user" onSubmit={submit}>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user" placeholder="Email" required
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user" placeholder="Contraseña" required
                                                    onChange={e => setConstrasena(e.target.value)}
                                                />
                                            </div>
                                            <button className="btn btn-primary btn-user btn-block" type='submit'>
                                                Ingresar
                                            </button>
                                            <hr />
                                        </form>

                                        <div className="text-center">
                                            <a className="small" href="/registro">Crear una cuenta!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}
export default Login;
