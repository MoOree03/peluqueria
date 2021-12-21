import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/register";

const Registro = () => {
  const [form, setForm] = useState(false);
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="container mt-5" style={{ height: "100%" }}>
          <div className="card o-hidden border-0 shadow-lg mb-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block ">
                  <img
                    className="rounded img-fluid p-5"
                    src="img/registro.jpg"
                    style={{ height: "100%" }}
                    alt="..."
                  />
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Crea una cuenta!
                      </h1>
                    </div>
                    <Formik
                      initialValues={{
                        nombre: "",
                        correo: "",
                        password: "",
                        passwordC: "",
                      }}
                      validate={(valores) => {
                        let errores = {};
                        if (!valores.nombre) {
                          errores.nombre = "Por favor ingresa un nombre";
                        } else if (
                          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)
                        ) {
                          errores.nombre =
                            "El nombre solo puede contener letras y espacios";
                        }
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
                        if (valores.password !== valores.passwordC) {
                          errores.passwordC =
                            "La confirmación debe coincidir con la contraseña";
                        }
                        return errores;
                      }}
                      onSubmit={(valores, { resetForm }) => {
                        const peticionPost = async () => {
                          await axios.post(baseUrl, {
                            name: valores.nombre,
                            email: valores.correo,
                            password: valores.password,
                          });
                        };
                        resetForm();
                        setForm(true);
                        setTimeout(() => setForm(false), 3000);
                        peticionPost();
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form className="formulario">
                          <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field
                              type="text"
                              id="nombre"
                              name="nombre"
                              placeholder="Emilio"
                            />
                            {touched.nombre && errors.nombre && (
                              <div className="error">{errors.nombre}</div>
                            )}
                          </div>
                          <div>
                            <label htmlFor="correo">Correo</label>
                            <Field
                              type="text"
                              id="correo"
                              name="correo"
                              placeholder="correo@correo.com"
                            />
                            {touched.correo && errors.correo && (
                              <di className="error">{errors.correo}</di>
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
                              <di className="error">{errors.password}</di>
                            )}
                          </div>
                          <div>
                            <label htmlFor="passwordC">
                              Confirmar contraseña
                            </label>
                            <Field
                              type="password"
                              id="passwordC"
                              name="passwordC"
                              placeholder="********"
                            />
                            {touched.passwordC && errors.passwordC && (
                              <di className="error">{errors.passwordC}</di>
                            )}
                          </div>
                          <button
                            className="btn btn-primary btn-user btn-block"
                            type="submit"
                          >
                            Registrar
                          </button>
                          {form && (
                            <p className="exito">
                              Formulario enviado con exito!
                            </p>
                          )}
                        </Form>
                      )}
                    </Formik>

                    <div className="text-center mt-5">
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
  );
};

export default Registro;
