import React from 'react'

const Inicio = () => {


    return (
        <div id="wrapper">
            {/* <!-- Page Wrapper --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper">

                {/* <!-- Main Content --> */}

                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div className="d-block ">
                    <div style={{ height: "520px", overflow: "hidden", position: "relative" }}>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="3000" >
                            <div className="carousel-inner">
                                <div className="carousel-item active"  >
                                    <img className="" src="img/carrucel3.jpg" style={{ height: "1000px", width: "100%" }} alt="..." />
                                </div>
                                <div className="carousel-item" >
                                    <img src="img/carrucel1.jpg" style={{ height: "1000px", width: "100%" }} alt="..." />
                                </div>
                                <div className="carousel-item" >
                                    <img src="img/carrucel2.jpg" style={{ height: "1000px", width: "100%" }} alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="h-45 m-5">
                    <div className="row justify-content-center mx-auto" style={{ width: "75%" }}>
                        <div className="col-lg-4 col-md-12 my-auto pl-5">
                            <img className="rounded img-fluid" src="img/team.jpg" style={{ height: "380px" }} alt="..." />
                        </div>
                        <div className="col-lg-6 col-md-12 my-auto pl-5">
                            <h3>Nuestro Equipo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum pellentesque risus vitae maximus. Phasellus consectetur mi nec urna finibus elementum. Ut eros turpis, iaculis in vestibulum vel, ornare ac nunc. Maecenas lectus risus, tincidunt lobortis egestas eu, fringilla sit amet purus. Donec non elementum dolor. Quisque consequat risus at bibendum consequat. Sed risus sem, congue vitae risus sed, mattis ultricies mi. Integer blandit fermentum sollicitudin. Morbi elementum felis mauris, commodo malesuada ante ultrices sed. Nunc dapibus quis purus vel scelerisque. Duis ut risus nunc. Suspendisse potenti. Cras sit amet diam tortor. Nullam eget felis congue, feugiat ex quis, dictum nisi.</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Inicio;