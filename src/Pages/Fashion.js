import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image1 from "../Assets/Home/Fashion/1.jpg";
import Image2 from "../Assets/Home/Fashion/2.jpg";
import Image3 from "../Assets/Home/Fashion/3.jpg";
import Image4 from "../Assets/Home/Fashion/4.jpg";
import Image5 from "../Assets/Home/Fashion/5.jpg";
import Image6 from "../Assets/Home/Fashion/6.jpg";
import Image7 from "../Assets/Home/Fashion/7.jpg";
import Image8 from "../Assets/Home/Fashion/8.jpg";
import Image9 from "../Assets/Home/Fashion/9.jpg";
import Image10 from "../Assets/Home/Fashion/10.jpg";
import Image11 from "../Assets/Home/Fashion/11.jpg";
import Image12 from "../Assets/Home/Fashion/12.jpg";
import Image13 from "../Assets/Home/Fashion/13.jpg";
import Image14 from "../Assets/Home/Fashion/14.jpg";
import Image15 from "../Assets/Home/Fashion/15.jpg";
import Image16 from "../Assets/Home/Fashion/16.jpg";
import Image17 from "../Assets/Home/Fashion/17.jpg";
import Image18 from "../Assets/Home/Fashion/18.jpg";
import Image19 from "../Assets/Home/Fashion/19.jpg";
import Image20 from "../Assets/Home/Fashion/20.jpg";
import Image21 from "../Assets/Home/Fashion/21.jpg";
import Image22 from "../Assets/Home/Fashion/22.jpg";
import Image23 from "../Assets/Home/Fashion/23.jpg";
import Image24 from "../Assets/Home/Fashion/24.jpg";
import Image25 from "../Assets/Home/Fashion/25.jpg";
import Image26 from "../Assets/Home/Fashion/26.jpg";
import Image27 from "../Assets/Home/Fashion/27.jpg";
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
];

const Fashion = () => {
  const [data, setData] = useState({ img: "", i: 0 });

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

export default Fashion;
