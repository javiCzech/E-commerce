import React, { useState } from "react";
import "bootswatch/dist/minty/bootstrap.min.css";
import "../ItemCount/itemCountCss.css";
import { useCartContext } from "../CardContext/CardContext";

export const ItemCount = ({ item, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const { addToCart } = useCartContext();

  const handleIncrement = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    } else {
      return false;
    }
  };
  const handleDecrement = () => {
    if (contador > initial) {
      setContador(contador - 1);
    } else {
      return false;
    }
  };
  const add = () => {
    if (item.stock > 0) {
      setContador(item.stock - contador);
      onAdd(contador);
      addToCart(item, contador);
      }
  };
  return (
    <>
      
      <div className="price">
        $ {item?.price} {(item?.price) && <span>{item?.price * 1.25}</span>}
      </div>
      <div className="details">
        <p>
            <b>3 Y 6 cuotas sin interés</b>
            </p>
            <p>
            Ver otras promociones de Mercado Pago
            </p>
            <p>
            Según la promo de tu tarjeta/banco
            </p>
            <p>
            ENVÍO GRATIS EN COMPRAS SUPERIORES A $600
            </p>
        
      </div>

      <div className="quantity">
      <p><b>Stock: {item?.stock}</b></p>
        <h4>Cantidad:</h4>
        <div className="qty">
        <button className="btn btn-primary" onClick={handleDecrement}>-</button>
              <span className="cuenta">{contador}</span>
              <button className="btn btn-primary" onClick={handleIncrement}>+</button>
          
          
        </div>
      </div>
      <button id="btn1" className="btn btn-primary" onClick={add}>
            Comprar
          </button>
    </>
  );
};
