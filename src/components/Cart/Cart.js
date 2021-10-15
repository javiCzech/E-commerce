import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../CardContext/CardContext'
import './Cartcss.css'

export const Cart = () => {
    const { cart, removeItem, clear, totalPrice} = useCartContext()
    
    return (
        <>
            <div className="cart-page">
            <h4 id="shop">Carrito de compras</h4>
            </div>
            {(cart[0]) &&
            <div className="container mt-5 mb-5">
            <div className="col-md-8 w-100">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Producto</th>
                                        <th>Nombre</th>
                                        <th>Cantidad</th>
                                        <th>Valor unitario</th>
                                        
                                        
                                    </tr>
                                </thead>
                                </table>
                                </div>
                                </div>}
            {(cart[0]) ?
            <div>
            {cart.map(cart => {
                return (
                    <div className="container mt-5 mb-5" key={cart?.id}>
                    <div className="d-flex justify-content-center row" id="fondo">
                        <div className="col-md-8 w-100">
                            
                            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded w-100">
                                <div className="imagenCarrito"><img className="rounded" src={cart?.pictureURL} width="70" alt={cart?.title} /></div>
                                <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{cart?.title}</span>
                                    <div className="d-flex flex-row product-desc">
                                        <div className="size ms-1"><span className="text-grey">Talle: </span><span className="fw-bold">&nbsp;{cart?.Talle}</span></div>
                                        <div className="color ms-4"><span className="text-grey">Color: </span><span className="fw-bold">&nbsp;{cart?.Color}</span></div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center qty">
                                    <h5 className="text-grey mt-1" id="cantidad1"><b>{cart?.quantity}</b></h5>
                                </div>
                                <div className="precio1">
                                    <h5 className="text-grey" id="precio2">$ {cart?.price}</h5>
                                </div>
                                <div className="d-flex align-items-center"><button className="btn btn-danger" onClick={() => removeItem(cart.id)}><i className="fas fa-trash-alt"></i></button></div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                    
                );
            })
            
        }



                    <div className="totalCompra">
                    <div className="CajaCompra">
                        <div className="cart-summary">
                            <div className="cart-content">
                                <h3>Resumen del carrito</h3>
                                <p>Sub Total<span>${totalPrice}</span></p>
                                <p>Costo de envio<span>Envio Gratis</span></p>
                                <h4>Precio final<span>${totalPrice}</span></h4>
                            </div>
                            <div className="cart-btn">
                                <button className="btn btn-danger" id="btn4" onClick={clear}>Limpiar Carrito</button>
                                <Link to={`/Formulario`}><button className="btn" id="btn2">Pagar</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        
        
        </div> : <div className="text-center mt-5"><h1 className="text-center">No hay items en el carrito</h1> <Link to="/"><button className="btn btn-primary mt-5 mb-5">Seguir Comprando</button></Link></div>}
        </>
    )
}
