
import React from "react";
import '../Item/ItemCss.css'
const Item = ({ data }) => {

  return (
	  
        <div className="card-box">
        <div className="card-thumbnail">
            <img src={data?.pictureURL} className="img-fluid" alt={data?.title}/>
        </div>
        <h3>{data?.title}</h3>
        <p className="text-secondary">Precio: $ {data?.price}</p>
        <p className="envio">Envio Gratis</p>
      </div>
	
  );
};

export default Item;
