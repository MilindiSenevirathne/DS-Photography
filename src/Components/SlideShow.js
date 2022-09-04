import "./Slideshow.css";
import Image1 from "../Assets/Home/H1.JPG";
import Image2 from "../Assets/Home/H2.jpg";
import Image3 from "../Assets/Home/H3.jpg";
import Image4 from "../Assets/Home/H4.jpg";
import Image5 from "../Assets/Home/H5.jpg";
import Image6 from "../Assets/Home/H6.jpg";
import Image7 from "../Assets/Home/H8.jpg";
import Image8 from "../Assets/Home/H9.jpg";
import Image9 from "../Assets/Home/H10.jpg";
import Image10 from "../Assets/Home/H11.jpg";


const Slideshow = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={Image1} className="slide-img" alt="img" />
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" alt="img" />
        </div>
        <div className="slide">
          <img src={Image3} className="slide-img"  alt="img"/>
        </div>
        <div className="slide">
          <img src={Image4} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image5} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image6} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image7} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image8} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image9} className="slide-img" alt="img"/>
        </div>


        <div className="slide">
          <img src={Image1} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image2} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image3} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image4} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image5} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image6} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image7} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image8} className="slide-img" alt="img"/>
        </div>
        <div className="slide">
          <img src={Image9} className="slide-img" alt="img"/>
        </div>
        
      </div>
    </div>
  );
};

export default Slideshow;