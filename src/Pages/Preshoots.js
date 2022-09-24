import Footer from "../Components/Footer";
import Header from "../Components/HeaderH";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image1 from "../Assets/Home/Preshoot/1.jpg";
import Image2 from "../Assets/Home/Preshoot/2.jpg";
import Image3 from "../Assets/Home/Preshoot/3.jpg";
import Image4 from "../Assets/Home/Preshoot/4.jpg";
import Image5 from "../Assets/Home/Preshoot/5.jpg";
import Image6 from "../Assets/Home/Preshoot/6.jpg";
import Image7 from "../Assets/Home/Preshoot/7.jpg";
import Image8 from "../Assets/Home/Preshoot/8.jpg";
import Image9 from "../Assets/Home/Preshoot/9.jpg";
import Image10 from "../Assets/Home/Preshoot/10.jpg";
import Image11 from "../Assets/Home/Preshoot/11.jpg";
import Image12 from "../Assets/Home/Preshoot/12.jpg";
import Image13 from "../Assets/Home/Preshoot/13.jpg";
import Image14 from "../Assets/Home/Preshoot/14.jpg";
import Image15 from "../Assets/Home/Preshoot/15.jpg";
import Image16 from "../Assets/Home/Preshoot/16.jpg";
import Image17 from "../Assets/Home/Preshoot/17.jpg";
import Image18 from "../Assets/Home/Preshoot/18.jpg";
import Image19 from "../Assets/Home/Preshoot/19.jpg";
import Image20 from "../Assets/Home/Preshoot/20.jpg";
import Image21 from "../Assets/Home/Preshoot/21.jpg";
import Image22 from "../Assets/Home/Preshoot/22.jpg";
import Image23 from "../Assets/Home/Preshoot/23.jpg";
import Image24 from "../Assets/Home/Preshoot/24.jpg";
import Image25 from "../Assets/Home/Preshoot/25.jpg";
import Image26 from "../Assets/Home/Preshoot/26.jpg";
import Image27 from "../Assets/Home/Preshoot/27.jpg";
import Image28 from "../Assets/Home/Preshoot/28.jpg";
import Image30 from "../Assets/Home/Preshoot/30.jpg";
import Image31 from "../Assets/Home/Preshoot/31.jpg";
import Image32 from "../Assets/Home/Preshoot/32.jpg";
import Image33 from "../Assets/Home/Preshoot/33.jpg";
import Image34 from "../Assets/Home/Preshoot/34.jpg";
import Image35 from "../Assets/Home/Preshoot/35.jpg";
import Image36 from "../Assets/Home/Preshoot/36.jpg";
import Image37 from "../Assets/Home/Preshoot/37.jpg";
import Image38 from "../Assets/Home/Preshoot/38.jpg";
import Image39 from "../Assets/Home/Preshoot/39.jpg";
import Image40 from "../Assets/Home/Preshoot/40.jpg";
import Image41 from "../Assets/Home/Preshoot/41.jpg";
import Image42 from "../Assets/Home/Preshoot/42.jpg";
import Image43 from "../Assets/Home/Preshoot/43.jpg";
import Image44 from "../Assets/Home/Preshoot/44.jpg";
import React, { useState } from "react";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image30,
  Image31,
  Image32,
  Image33,
  Image34,
  Image35,
  Image36,
  Image37,
  Image38,
  Image39,
  Image40,
  Image41,
  Image42,
  Image43,
  Image44,
];

const Preshoots = () => {
  const [data, setData] = useState({ img: "", i: 0 });
  window.scrollTo(0, 0);
  const viewImage = (img, i) => {
    setData({ img, i });
  };
  return (
    <div>
      <Header />

      <div style={{ padding: "80px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer />
    </div>
  );
};

export default Preshoots;
