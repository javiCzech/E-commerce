import React, { useState } from 'react'
import '../ItemDetailContainer/ItemDetailContainerCss.css'
import { ItemCount} from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


export const ItemDetailContainer = ({item}) => {
	
	const [producto, setProducto] = useState(0)
	

	const onAdd = (p) => {
		setProducto(p)
	}
    return (

<div className="product-detail">
<div className="container">
	<div className="row">
		<div className="col-lg-9">
			<div className="row align-items-center product-detail-top">
				<div className="col-md-5">
					<div className="product-slider-single">
						<img src={item?.pictureURL} alt={item?.title}/>
					</div>
				</div>
				<div className="col-md-7">
					<div className="product-content">
						<div className="title"><h2>{item?.title}</h2></div>
						<div className="ratting">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<div id="calculo">
						{producto > 0 ?
						(<div id="control">
						<Link to={`/Cart`}>
							<button id="tmr" className="btn btn-primary mt-5">Terminar mi Compra</button>
							</Link></div>    
							): <ItemCount
							initial={0}
							onAdd={onAdd}
							item={item}/> }
							</div>
						
					</div>
				</div>
			</div>
			
			<div className="row product-detail-bottom">
				<div className="col-lg-12">
					<ul className="nav nav-pills nav-justified">
						<li className="nav-item">
							<a className="nav-link active" data-toggle="pill" href="#description">Detalle</a>
						</li>
					</ul>

					<div className="tab-content">
						<div id="description" className="container tab-pane active"><br/>
							<h4>Descripcion del producto</h4>
							<p>
							{item?.description} 
							</p>
						</div>
						
					</div>
				</div>
			</div>	
			
		</div>
		
		<div className="col-lg-3">
			<div className="sidebar-widget category">
				<h2 className="title">Categorias</h2>
				<ul>
					<li><Link to="/Buzos">Buzos</Link></li>
					<li><Link to="/Remeras">Remeras</Link></li>
					<li><Link to="/Zapatillas">Zapatillas</Link></li>
				</ul>
			</div>
			
			
			<div className="sidebar-widget brands">
				<h2 className="title">Nuestras marcas</h2>
				<ul>
					<li><Link to="https://www.dcshoes.com.ar/">DC Shoes</Link> <span>(45)</span></li>
					<li><Link to="https://rusty.com.ar/">Rusty</Link> <span>(34)</span></li>
					<li><Link to="https://www.vans.com.ar/homevans/">Vans</Link> <span>(67)</span></li>
					<li><Link to="https://www.instagram.com/vulcan.clothing.brand/?hl=es">Vulcan</Link> <span>(74)</span></li>
				</ul>
			</div>
			
			<div className="sidebar-widget tag">
				<h2 className="title">Tags de productos</h2>
				<button className="tags">Tela</button>
				<button className="tags">Cuero</button>
				<button className="tags">Gamusa</button>
				<button className="tags">Blanco</button>
				<button className="tags">Negro</button>
				<button className="tags">Street</button>
				<button className="tags">Pure</button>
				<button className="tags">Skate</button>
				<button className="tags">Slim</button>
				<button className="tags">Lite</button>
				<button className="tags">Trase</button>
				<button className="tags">Anvil</button>
			</div>
		</div>
	</div>
</div>
</div>


    )
}
