import React, {useState} from "react";
import { render } from "react-dom";
// import ResponsiveGallery from 'react-responsive-gallery';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Gallery from 'react-photo-gallery';
import Image1 from "../Assets/Home/wedding/1.jpg";
import Image2 from "../Assets/Home/wedding/2.jpg";
import Image3 from "../Assets/Home/wedding/3.jpg";
import Image4 from "../Assets/Home/wedding/4.jpg";
import Image5 from "../Assets/Home/wedding/5.jpg";
import Image6 from "../Assets/Home/wedding/6.jpg";
import Image7 from "../Assets/Home/wedding/7.jpg";
import Image8 from "../Assets/Home/wedding/8.jpg";
import Image9 from "../Assets/Home/wedding/9.jpg";
import Image10 from "../Assets/Home/wedding/10.jpg";
import Image11 from "../Assets/Home/wedding/11.jpg";
import Image12 from "../Assets/Home/wedding/12.jpg";
import Image13 from "../Assets/Home/wedding/13.jpg";
import Image14 from "../Assets/Home/wedding/14.jpg";
import Image15 from "../Assets/Home/wedding/15.jpg";
import Image16 from "../Assets/Home/wedding/16.jpg";
import Image17 from "../Assets/Home/wedding/17.jpg";
import Image18 from "../Assets/Home/wedding/18.jpg";
import Image19 from "../Assets/Home/wedding/19.jpg";
import Image20 from "../Assets/Home/wedding/20.jpg";
import Image21 from "../Assets/Home/wedding/21.jpg";
import Image22 from "../Assets/Home/wedding/22.jpg";
import Image23 from "../Assets/Home/wedding/23.jpg";
import Image24 from "../Assets/Home/wedding/24.jpg";
import Image25 from "../Assets/Home/wedding/25.jpg";
import Image26 from "../Assets/Home/wedding/26.jpg";
import Image27 from "../Assets/Home/wedding/27.jpg";
import Image28 from "../Assets/Home/wedding/28.jpg";
import Image29 from "../Assets/Home/wedding/29.jpg";
import Image30 from "../Assets/Home/wedding/30.jpg";
import Image31 from "../Assets/Home/wedding/31.jpg";
import Image32 from "../Assets/Home/wedding/32.jpg";
import Image33 from "../Assets/Home/wedding/33.jpg";
import Image34 from "../Assets/Home/wedding/34.jpg";
import Image35 from "../Assets/Home/wedding/35.jpg";
import Image36 from "../Assets/Home/wedding/36.jpg";
import Image37 from "../Assets/Home/wedding/37.jpg";
import Image38 from "../Assets/Home/wedding/38.jpg";
import Image39 from "../Assets/Home/wedding/39.jpg";
import Image40 from "../Assets/Home/wedding/40.jpg";
import Image41 from "../Assets/Home/wedding/41.jpg";
import Image42 from "../Assets/Home/wedding/42.jpg";
import Image43 from "../Assets/Home/wedding/43.jpg";
import Image44 from "../Assets/Home/wedding/44.jpg";
import Image45 from "../Assets/Home/wedding/45.jpg";
import DztImageGalleryComponent from "reactjs-image-gallery";
import Header from "../Components/Header";
import './Home.css'
import Footer from "../Components/Footer";

const images = [
    Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8,
    Image9, Image10, Image11, Image12, Image13, Image14, Image15,
    Image16, Image17, Image18, Image19, Image20, Image21,Image22,
    Image23,Image24,Image25,Image26,Image27,Image28,Image29,Image30,
    Image31,Image32,Image33,Image34,Image35,Image36,Image37,Image38,Image39,
    Image40,Image41,Image42,Image43,Image44,Image45
  ];


const Weddings = () => {

    const [data,setData]=useState({img: '',i:0})

    const viewImage = (img,i)=>{
        setData({img,i})
    }

    // const imgAction = (action) =>{
    //     let i= data.i;
    //     if(action==='next'){
    //         setData({img:images[i+1], i:i+1})
    //     }
    // }

  return (
    <>
   
    <div>
        <Header/>
        {/* {data.img && 
        <div style={{
            width:"100%",
            heigth:"100vh",
            background:"black",
            position:"fixed",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            overflow:"hidden"
        }}>
            <button style={{position:"absolute", top:"10px", right:"10px"}}>X</button>
            <button>Previous</button>
            <img src={data.img} style={{width:'auto', maxWidth:"90%", maxHeight:"90%"}} />
            <button onClick={()=>imgAction('next')}>Next</button>
        </div>
    } */}
      <div style={{padding:"80px"}}>
      {/* <DztImageGalleryComponent images={images} imgClassName="gallery_img" hideDownload={true} imageBackgroundColor="#fff"/> */}
      {/* <Gallery photos={images} />; */}
      <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="10px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                            onClick={()=>viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
      </div>
      <Footer />
    </div>
        </>
  );
};

export default Weddings;
