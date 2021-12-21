import React from 'react'

const Servicio = () => {

    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="container my-5" style={{ height: "100%" }} >

                    <div className="card text-center">
                        <div className="card-header">
                            Servicio 1
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-center mx-auto">
                                <div className="col-lg-4 col-md-12 my-auto pl-5">
                                    <img className="rounded img-fluid" src="img/servicio1.jpg" style={{ height: "380px" }} alt="..." />
                                </div>
                                <div className="col-lg-8 col-md-12 my-auto pl-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum pellentesque risus vitae maximus. Phasellus consectetur mi nec urna finibus elementum. Ut eros turpis, iaculis in vestibulum vel, ornare ac nunc. Maecenas lectus risus, tincidunt lobortis egestas eu, fringilla sit amet purus. Donec non elementum dolor. Quisque consequat risus at bibendum consequat. Sed risus sem, congue vitae risus sed, mattis ultricies mi. </p>
                                </div>
                                <hr size="2" width="100%" />

                                <h3 className="text-center mb-4">Horarios</h3>


                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}


export default Servicio;
