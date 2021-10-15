import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import { db } from "../Firebase/Firebase";
import { collection, query, getDocs } from "firebase/firestore";

const ItemPresentation = () => {
	let itemID = useParams();

	const [items, setItems] = useState([]);

	
	useEffect(() =>{
		const getProducts = async () => {
			const docs = [];
			const q = query(collection(db, "products"));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({...doc.data(), id: doc.id })
				setItems(docs.find((element => element.id === itemID.id)));	
		});
		};
		getProducts();
		},[itemID.id])

	
	return (
		<div className="Container">
			
			 <ItemDetailContainer key={items?.id} item={items} category={items?.Category}/>;
			

		</div>
	);
    
};
export default ItemPresentation