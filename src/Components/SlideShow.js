import "./Slideshow.css";
import { useState, useEffect } from "react";
// import Image1 from "../Assets/Home/H1.jpg";
import Image2 from "../Assets/Home/H2.jpg";
import Image3 from "../Assets/Home/H3.jpg";
import Image4 from "../Assets/Home/H4.jpg";
import Image5 from "../Assets/Home/H5.jpg";
import Image6 from "../Assets/Home/H6.jpg";
import Image7 from "../Assets/Home/H7.jpg";
import Image8 from "../Assets/Home/H8.jpg";
import Image9 from "../Assets/Home/H9.jpg";
import Image10 from "../Assets/Home/H10.jpg";
import Image11 from "../Assets/Home/H11.jpg";

const images = [
  //   { id: 1, src: Image1, title: "foo", description: "bar" },
  { id: 2, src: Image2, title: "foo", description: "bar" },
  { id: 3, src: Image3, title: "foo", description: "bar" },
  { id: 4, src: Image4, title: "foo", description: "bar" },
  { id: 5, src: Image5, title: "foo", description: "bar" },
  { id: 6, src: Image6, title: "foo", description: "bar" },
  { id: 7, src: Image7, title: "foo", description: "bar" },
  { id: 8, src: Image8, title: "foo", description: "bar" },
  { id: 9, src: Image9, title: "foo", description: "bar" },
  { id: 10, src: Image10, title: "foo", description: "bar" },
  { id: 11, src: Image11, title: "foo", description: "bar" },
];

const Slideshow = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>


        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" />
        </div>
        
      </div>
    </div>
  );
};

export default Slideshow;
