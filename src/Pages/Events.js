import Footer from "../Components/Footer";
import HeaderH from "../Components/HeaderH";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image1 from "../Assets/Home/Events/1.jpg";
import Image2 from "../Assets/Home/Events/2.jpg";
import Image3 from "../Assets/Home/Events/3.jpg";
import Image4 from "../Assets/Home/Events/4.jpg";
import Image5 from "../Assets/Home/Events/5.jpg";
import Image6 from "../Assets/Home/Events/6.jpg";
import Image7 from "../Assets/Home/Events/7.jpg";
import Image8 from "../Assets/Home/Events/8.jpg";
import Image9 from "../Assets/Home/Events/9.jpg";
import Image10 from "../Assets/Home/Events/10.jpg";
import Image11 from "../Assets/Home/Events/11.jpg";
import Image12 from "../Assets/Home/Events/12.jpg";
import Image13 from "../Assets/Home/Events/13.jpg";
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
];

const Events = () => {
  const [data, setData] = useState({ img: "", i: 0 });
  window.scrollTo(0, 0);
  const viewImage = (img, i) => {
    setData({ img, i });
  };
  return (
    <div>
      <HeaderH />

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

export default Events;
