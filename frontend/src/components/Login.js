import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Navigate } from "react-router";

const baseUrl = "http://localhost:5000/api/login";

const Login = () => {
  const [form, setForm] = useState(false);
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="container mt-5" style={{ width: "100%" }}>
          <div className="card o-hidden border-0 shadow-lg mb-5">
            <div className="card-body p-0">
              <div className="row pr-5">
                <div className="col-lg-6 d-none d-lg-block ">
                  <img
                    className="rounded img-fluid p-5"
                    src="img/ingreso.jpg"
                    style={{ height: "100%" }}
                    alt="..."
                  />
                </div>
                <div className="col-lg-6 my-auto ">
                  <div className="mb-3">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Bienvenido de vuelta!
                      </h1>
                    </div>
                    <Formik
                      initialValues={{
                        correo: "",
                        password: "",
                      }}
                      validate={(valores) => {
                        let errores = {};
                        if (!valores.correo) {
                          errores.correo = "Por favor ingresa un correo";
                        } else if (
                          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                            valores.correo
                          )
                        ) {
                          errores.correo =
                            "El correo solo puede contener letras, números, puntos,guiones y guion bajo. ";
                        }
                        if (!valores.password) {
                          errores.password =
                            "Por favor ingresar una contraseña";
                        } else if (
                          !/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(
                            valores.password
                          )
                        ) {
                          errores.password =
                            "La contraseña debe tener al entre 8 y 16 caracteres, una minúscula, una mayúscula y un caracter especial.";
                        }

                        return errores;
                      }}
                      onSubmit={(valores, { resetForm }) => {
                        const peticionPost = async () => {
                          await axios.post(
                            baseUrl,
                            {
                              email: valores.correo,
                              password: valores.password,
                            },
                            {
                              withCredentials: true,
                            }
                          );
                        };
                        resetForm();
                        peticionPost();

                        setForm(true);
                        setTimeout(() => setForm(false), 3000);
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form className="formulario mr-5 pr-5">
                          <div>
                            <label htmlFor="correo">Correo</label>
                            <Field
                              type="text"
                              id="correo"
                              name="correo"
                              placeholder="correo@correo.com"
                            />
                            {touched.correo && errors.correo && (
                              <div className="text-danger small">
                                {errors.correo}
                              </div>
                            )}
                          </div>
                          <div>
                            <label htmlFor="password">Contraseña</label>
                            <Field
                              type="password"
                              id="password"
                              name="password"
                              placeholder="********"
                            />
                            {touched.password && errors.password && (
                              <div className="text-danger small">
                                {errors.password}
                              </div>
                            )}
                          </div>
                          <button
                            className="btn btn-primary btn-user btn-block"
                            type="submit"
                          >
                            Ingresar
                          </button>
                          {form && <p className="text-info text-center m-3">Validando...</p>}
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <div className="text-center">
                    <a className="small" href="/registro">
                      Crear una cuenta!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
