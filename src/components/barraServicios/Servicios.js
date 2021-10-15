import React from 'react'
import '../barraServicios/ServiciosCss.css'
export const Servicios = () => {
    return (
        <div className="feature">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 feature-col">
                        <div className="feature-content">
                            <i className="fa fa-shield"></i>
                            <h2>Compra protegida</h2>
                            <p>
                                Compra protegida por nuestros servicios.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 feature-col">
                        <div className="feature-content">
                            <i className="fa fa-shopping-bag"></i>
                            <h2>Productos Originales</h2>
                            <p>
                                Productos de calidad premium, 100% originales.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 feature-col">
                        <div className="feature-content">
                            <i className="fa fa-truck"></i>
                            <h2>Delivery a todo el pais</h2>
                            <p>
                                Envios a todo el pais con correo argentino y andreani.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 feature-col">
                        <div className="feature-content">
                            <i className="fa fa-phone"></i>
                            <h2>Soporte Telefonico</h2>
                            <p>
                                Soporte telefonico ante cualquier duda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





