import Slideshow from "../Components/SlideShow";
import { useState, useEffect } from "react";
import "../Pages/Home.css";
import Image from "../Assets/camera.png";
import Facebook from "../Assets/facebook.png";
import Instagram from "../Assets/instagram (1).png";
import Image2 from "../Assets/Disal.jpg";
import Wedding from "../Assets/Home/H3.jpg";
import Wedding2 from "../Assets/Home/H6.jpg";
import mixitup from 'mixitup'
import Image3 from "../Assets/Home/H3.jpg";
import Image4 from "../Assets/Home/H4.jpg";
import Image5 from "../Assets/Home/H5.jpg";
import Image6 from "../Assets/Home/H6.jpg";
import Image7 from "../Assets/Home/H7.jpg";
import Image8 from "../Assets/Home/H8.jpg";
import Image9 from "../Assets/Home/H9.jpg";
import Image10 from "../Assets/Home/H10.jpg";
import Image11 from "../Assets/Home/H11.jpg";
import Movie from "../Components/Movie";
import Filter from "../Components/Filter";

const Home = () => {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);


  useEffect(()=>{
    fetchPopular();
  },[]);

  const fetchPopular = async ()=>{
    const images = [
      //   { id: 1, src: Image1, title: "foo", description: "bar" },
        { id: 2, src: Image2, title: "foo", description: "bar", genre_ids:1 },
        { id: 3, src: Image3, title: "foo", description: "bar", genre_ids:1  },
        { id: 4, src: Image4, title: "foo", description: "bar", genre_ids:2  },
        { id: 5, src: Image5, title: "foo", description: "bar", genre_ids:1  },
        { id: 6, src: Image6, title: "foo", description: "bar", genre_ids:1  },
        { id: 7, src: Image7, title: "foo", description: "bar", genre_ids:1  },
        { id: 8, src: Image8, title: "foo", description: "bar", genre_ids:2  },
        { id: 9, src: Image9, title: "foo", description: "bar", genre_ids:1  },
        { id: 10, src: Image10, title: "foo", description: "bar", genre_ids:1  },
        { id: 11, src: Image11, title: "foo", description: "bar", genre_ids:2  },
      ];

     console.log(images)
      setPopular(images)
      setFiltered(images)
  }
  return (
    <div>
      <div>
        <div
          className="d-flex justify-content-around navbar"
          style={{ boxShadow: "none" }}
        >
          <div className="nav_links">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#"
                  style={{ color: "#bfbdbd" }}
                >
                  WELCOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "#bfbdbd" }}>
                  ABOUT ME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "#bfbdbd" }}>
                  MY WORKS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "#bfbdbd" }}>
                  PORTFOLIO
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "#bfbdbd" }}>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div
            class="d-flex justify-content-center line"
            style={{ height: "150px" }}
          >
            <div class="vr"></div>
          </div>

          <div className="name_div">
            <img src={Image} alt="Snow" className="camera_img" />
            <h1 className="name">DS Photography</h1>
          </div>

          <div
            class="d-flex justify-content-center line"
            style={{ height: "150px" }}
          >
            <div class="vr"></div>
          </div>

          <div>
            <div className="desc1">
              Best phogragraphs and <br />
              give value for money.
            </div>
            <div className="icons">
              <a href="facebook.com">
                <img src={Facebook} className="me-2 fb" />
              </a>
              <a href="facebook.com">
                <img src={Instagram} className="insta" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Slideshow />
      </div>

      <div className="location">
        <h5>Hirana. Panadura</h5>
        <div class="d-flex justify-content-center line">
          <div class="vr"></div>
        </div>
        <div>
          <h6 className="mt-2">
            We make your special days with splendid memories to last a lifetime.
          </h6>
        </div>
      </div>

      <div className="mt-4 my_photography">
        <div className="mt-4 box">
          <div className="d-flex justify-content-center box_2">
            <div className="box_3">
              <h3 className="about_name2">My Photography</h3>
              <h4 className="desc_2">
                I am a Texas based wedding and portrait photographer. I started
                photography like most do- as a hobby! I would have never dreamt
                that it would eventually turn into a career for me. After
                beginning as a hobby I realized that I liked taking photos and
                making people FEEL a certain way more than I thought possible! I
                dived into practicing more, educating myself and thus started
                the beginning of a wonderful thing that is now my full-time job.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="about">About Me</h1>
        <h6 className="about_name">Disal Senevirathne</h6>
        <div className="d-flex justify-content-center">
          <div className="box_1">
            <h3 className="about_name2">I'm Disal Senevirathne</h3>
            <h4 className="desc_2">
              I am a Texas based wedding and portrait photographer. I started
              photography like most do- as a hobby! I would have never dreamt
              that it would eventually turn into a career for me. After
              beginning as a hobby I realized that I liked taking photos and
              making people FEEL a certain way more than I thought possible! I
              dived into practicing more, educating myself and thus started the
              beginning of a wonderful thing that is now my full-time job.
            </h4>
            <button className="about_button">Learn More</button>
          </div>
          <div className="">
            <img src={Image2} alt="Snow" className="about_img" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="about">My Works</h1>
        <h6 className="about_name">Work Types</h6>
        <div className="">
          <div>
            <h4 className="desc_2" style={{ textAlign: "center" }}>
              PassionArt wedding photography sri lanka seek to portray all
              brides & bridegrooms in their own natural style<br></br> and we
              make the photos to be expressions of their natural charm. Blending
              that style with our creativeness<br></br> we strive to make their
              wedding day photos to be really awesome.
            </h4>
          </div>
          <div className="d-flex justify-content-center">
            <div className="work_div">
              <button className="btn btn-light btn-rounded work_button">
                View Albums
              </button>
              <button className="btn btn-warning btn-rounded work_type">
                Weddings
              </button>
            </div>
            <div className="work_div2">
              <button className="btn btn-light btn-rounded work_button">
                View Albums
              </button>
              <button className="btn btn-warning btn-rounded work_type">
                Homecomings
              </button>
            </div>
            <div className="work_div3">
              <button className="btn btn-light btn-rounded work_button">
                View Albums
              </button>
              <button className="btn btn-warning btn-rounded work_type">
                Pre Shoots
              </button>
            </div>
            <div className="work_div4">
              <button className="btn btn-light btn-rounded work_button">
                View Albums
              </button>
              <button className="btn btn-warning btn-rounded work_type">
                Engagements
              </button>
            </div>
            <div className="work_div5">
              <button className="btn btn-light btn-rounded work_button">
                View Albums
              </button>
              <button className="btn btn-warning btn-rounded work_type">
                Birthday
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="about">About Me</h1>
        <h6 className="about_name">Disal Senevirathne</h6>
        <div>
        <div>
            <h4 className="desc_2" style={{ textAlign: "center" }}>
              PassionArt wedding photography sri lanka seek to portray all
              brides & bridegrooms in their own natural style<br></br> and we
              make the photos to be expressions of their natural charm. Blending
              that style with our creativeness<br></br> we strive to make their
              wedding day photos to be really awesome.
            </h4>
          </div>
          <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
          <div className="popular-movies">
            {popular.map(image =>{
              return <Movie key={image.id} image={image}/>;
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
