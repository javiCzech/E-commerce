import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/FooterCss.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h1>E-Shop</h1>
                            <p>
                                E-Shop es un e-commerce creado en el curso de ReactJs de coderHouse, esta basado en productos de skate desde zapatillas hasta buzos y remeras.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Paginas Asociadas</h3>
                            <ul>
                                <li><a href="https://www.dcshoes.com.ar/" target="_blank" rel="noreferrer">Dc Argentina</a></li>
                                <li><a href="https://www.vans.com.ar/" target="_blank" rel="noreferrer">Vans</a></li>
                                <li><a href="https://www.dafiti.com.ar/" target="_blank" rel="noreferrer">Dafiti</a></li>
                                <li><a href="https://rusty.com.ar/" target="_blank" rel="noreferrer">Rusty</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Links rapidos</h3>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='Buzos'>Buzos</Link></li>
                                <li><Link to='Remeras'>Remeras</Link></li>
                                <li><Link to='Zapatillas'>Zapatillas</Link></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Contacto</h3>
                            <div className="contact-info">
                                <p><i className="fa fa-map-marker"></i>San Isidro</p>
                                <p className="mt-2"><i className="fa fa-envelope"></i>javier.brizuela237@gmail.com</p>
                                <p className="mt-2"><i className="fa fa-phone"></i>1162451865</p>
                                <div className="social">
                                <a href="https://www.linkedin.com/in/carlos-javier-brizuela-czech-a87703208/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row payment">
                    <div className="col-md-6">
                        <div className="payment-method">
                            <p>Pagos aceptados:</p>
                            <img src="https://pngimg.com/uploads/paypal/paypal_PNG25.png" alt="Payment Method" />
                            <img src="https://teatroselectro.com.ar/wp-content/uploads/2020/04/mercadopago-logo-fondo-transparente-300x-300x144.png" alt="Payment Method" />
                        </div>
                    </div>
                    
                </div>
                <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 copyright">
                        <p>Copyright &copy;. All Rights Reserved</p>
                    </div>

                    <div className="col-md-6 template-by">
                        <p>Pagina creada por Javier Brizuela</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}
