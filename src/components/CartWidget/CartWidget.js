
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../CardContext/CardContext'
import { Link } from 'react-router-dom'
export const CartWidget = () => {
    const {cart} = useCartContext();
    const totalItems = cart.reduce((acc, item)=>{
        return acc + item.quantity
    },0);
    return (
        <Link to={`/Cart`}>
        <li className="nav-item">
        <div className="nav-link">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span style={{marginLeft: 5}}>{totalItems}</span>
        </div>
        </li>
        </Link>
    )
}
