import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "../Slider/sliderCss.css";
import img from "../Assets/foto1.png";
import img2 from "../Assets/foto2.png";
import img3 from "../Assets/foto3.png";
export const Slider = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item interval={2500}>
          <img className="d-block img1" src={img} alt="One" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block img1"
            src={img3}
            alt="Two"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block img1" src={img2} alt="One" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
