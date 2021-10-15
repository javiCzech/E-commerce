import React from 'react'
import "bootswatch/dist/minty/bootstrap.min.css";
import '../NavBar/NavBarCss.css'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import img from '../Assets/logo3.png'


export const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                <Link 
                className="navbar-brand" 
                to="/">
                    <img src={img} id="navImg"alt="Logo"/> 
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Link 
                            className="navbar-brand" 
                            to="/">

                            <li className="nav-item">
                                Home
                            <span className="visually-hidden">(current)</span>
                                
                                
                            </li>
                            </Link>
                            <Link 
                            className="navbar-brand" 
                            to="/Buzos">
                            <li className="nav-item">
                                Buzos
                            </li>
                            </Link>
                            <Link 
                            className="navbar-brand" 
                            to="/Remeras">
                            <li className="nav-item">
                                Remeras
                            </li>
                            </Link>
                            <Link 
                            className="navbar-brand" 
                            to="/Zapatillas">
                            <li className="nav-item">
                               Zapatillas
                            </li>
                            </Link>
                            <CartWidget/>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
    
    )
}
