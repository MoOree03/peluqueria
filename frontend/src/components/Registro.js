import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
const Registro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setContrasena] = useState('');
    let [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:4000/api/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        });
        setRedirect(redirect = true);
    }
    if (redirect)
        return <Navigate to="/ingresar" />
    return (

        <div id="wrapper">

            <div id="content-wrapper" className="d-flex flex-column">
                <div className="container mt-5" style={{ height: "100%" }}>
                    <div className="card o-hidden border-0 shadow-lg mb-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-block ">
                                    <img className="rounded img-fluid p-5" src="img/registro.jpg" style={{ height: "100%" }} alt="..." />
                                </div>
                                <div className="col-lg-7 my-auto">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Crea una cuenta!</h1>
                                        </div>
                                        <form className="user" onSubmit={submit}>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user" placeholder="Nombre" required
                                                    onChange={e => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" placeholder="Correo" required
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="password" className="form-control form-control-user" placeholder="Contraseña" required
                                                        onChange={e => setContrasena(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="password" className="form-control form-control-user" placeholder="Confirmar contraseña" required
                                                        //onChange={e => setConfirmar(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <button className="btn btn-primary btn-user btn-block" type='submit'>
                                                Registrar
                                            </button>
                                            <hr />

                                        </form>
                                        <div className="text-center">
                                            <Link to="/ingresar" className="small">
                                            Ya tiene una cuenta? Ingrese!
                                            </Link>
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



export default Registro;