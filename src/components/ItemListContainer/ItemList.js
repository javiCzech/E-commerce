import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import { db } from "../Firebase/Firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { ButtonGroup, DropdownButton } from "react-bootstrap";
import Dropdown from "@restart/ui/esm/Dropdown";
import '../ItemListContainer/itemListCss.css'
const ItemList = ({ category }) => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      const docs = [];
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
        setItems(docs.filter((element => category ? element.Category === category : element)));
      });
    };
    getProducts()
  }, [category])


    const highPrice= async () => {
    const docs = [];
    const q = query(collection(db, "products"), orderBy("price", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id })
      setItems(docs.filter((element => category ? element.Category === category : element)));
      console.log(docs)
});
console.log(docs)
    };
    const lowPrice= async () => {
      const docs = [];
      const q = query(collection(db, "products"), orderBy("price"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
        setItems(docs.filter((element => category ? element.Category === category : element)));
        console.log(docs)
  });
  console.log(docs)
      };


  return (
    <div className="container">
      <div className="row">
        <div className="ordenar">
        <ButtonGroup className="mb-5" size="lg">
        <DropdownButton as={ButtonGroup} title="Ordenar por precio:" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1" onClick={highPrice} className="btn btn-primary" id="boton10">Mayor a Menor</Dropdown.Item>
        <Dropdown.Item eventKey="1" onClick={lowPrice} className="btn btn-primary" id="boton20">Menor a Mayor</Dropdown.Item>
        </DropdownButton>
        </ButtonGroup>
        </div>
        <div className="col-12">
        </div>
        {items.map(itm => {
          return (
            <div className="col-md-6 col-lg-4" key={itm?.id}>
              <Link to={`/ItemDetail/${itm?.id}`}>
                <Item data={itm} category={itm?.Category} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );

};

ItemList.defaultProps = {
  "category": ""
}

export default ItemList