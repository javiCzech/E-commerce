import React from "react";
import { Servicios } from "../barraServicios/Servicios";
import { Slider } from "../Slider/Slider";
import ItemList from "./ItemList";




export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <Slider/>
      <Servicios/>
      <ItemList />
    </div>
  );
};
