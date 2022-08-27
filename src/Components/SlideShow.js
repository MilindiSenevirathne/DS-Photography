import "./Slideshow.css";
import { useState, useEffect } from "react";
import Image1 from "../Assets/5.jpg";
import Image2 from "../Assets/behance-3.jpg";
import Image3 from "../Assets/m2.jpg";
import Image4 from "../Assets/me4.jpg";
import Image5 from "../Assets/me5.jpg";

const colors = [Image1, "#00C49F", "#FFBB28", "red", "pink", "black"];
const images = [
  { id: 1, src: Image1, title: "foo", description: "bar" },
  { id: 2, src: Image2, title: "foo", description: "bar" },
  { id: 3, src: Image3, title: "foo", description: "bar" },
  { id: 4, src: Image4, title: "foo", description: "bar" },
  { id: 5, src: Image5, title: "foo", description: "bar" },
];
const delay = 5000;

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="mt-4 slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map(({ id, src, title, description }) => (
          <img
            className="me-4 slide_image"
            key={id}
            src={src}
            title={title}
            alt={description}
            height="600px"
            style={id ? {transition:"ease-in-out"}:{}}
          />
        ))}
      </div>
      {/* <marquee
        behavior="scroll"
        direction="left"
        scrolldelay="1000"
        scrollamount="100"
      >
       { images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} height="600px"/>)}
      </marquee> */}
    </div>
  );
};

export default Slideshow;
