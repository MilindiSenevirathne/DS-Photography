import React from "react";
// import ResponsiveGallery from 'react-responsive-gallery';
import Image3 from "../Assets/Home/H3.jpg";
import Image5 from "../Assets/Home/H5.jpg";
import Image6 from "../Assets/Home/H6.jpg";
import Image7 from "../Assets/Home/H7.jpg";
import Image8 from "../Assets/Home/H8.jpg";
import Image9 from "../Assets/Home/H9.jpg";
import Image10 from "../Assets/Home/H10.jpg";
import Image11 from "../Assets/Home/H11.jpg";
import DztImageGalleryComponent from "reactjs-image-gallery";
import Header from "../Components/Header";
import './Home.css'

const images = [
    //   { id: 1, src: Image1, title: "foo", description: "bar" },
    {
        url:Image10,
        thumbUrl:Image10
    },
    {
        url:Image11,
        thumbUrl:Image11
    },
    {
        url:Image5,
        thumbUrl:Image5
    },
    {
        url:Image3,
        thumbUrl:Image3
    },
    {
        url:Image9,
        thumbUrl:Image9
    },
    {
        url:Image5,
        thumbUrl:Image5
    },
    {
        url:Image6,
        thumbUrl:Image6
    },
    {
        url:Image8,
        thumbUrl:Image8
    },
    {
        url:Image10,
        thumbUrl:Image10
    },
    {
        url:Image7,
        thumbUrl:Image7
    },
  ];


const Weddings = () => {


  return (
    <div>
        <Header/>
      <div>
      <DztImageGalleryComponent images={images} imgClassName="gallery_img" hideDownload={true} imageBackgroundColor="#fff"/>
      </div>
    </div>
  );
};

export default Weddings;
