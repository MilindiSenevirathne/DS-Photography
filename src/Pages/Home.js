import Slideshow from "../Components/SlideShow";
import { useState, useEffect } from "react";
import "../Pages/Home.css";
import Image from "../Assets/camera.png";
import Facebook from "../Assets/facebook.png";
import Instagram from "../Assets/instagram (1).png";
import Image2 from "../Assets/Disal.jpg";
import Wedding from "../Assets/Home/H3.jpg";
import Wedding2 from "../Assets/Home/H6.jpg";
import mixitup from "mixitup";
import Image3 from "../Assets/Home/H3.jpg";
import Image4 from "../Assets/Home/H4.jpg";
import Image5 from "../Assets/Home/H5.jpg";
import Image6 from "../Assets/Home/H6.jpg";
import Image7 from "../Assets/Home/H7.jpg";
import Image8 from "../Assets/Home/H8.jpg";
import Image9 from "../Assets/Home/H9.jpg";
import Image10 from "../Assets/Home/H10.jpg";
import Image11 from "../Assets/Home/H11.jpg";
import ImageComponent from "../Components/Image";
import Filter from "../Components/Filter";
import { motion, AnimatePresence } from "framer-motion";
import A1 from "../Assets/Home/Favourite/A1.jpg";
import A2 from "../Assets/Home/Favourite/A2.jpg";
import A3 from "../Assets/Home/Favourite/A3.jpg";
import A4 from "../Assets/Home/Favourite/A4.jpg";
import A5 from "../Assets/Home/Favourite/A5.jpg";
import A6 from "../Assets/Home/Favourite/A6.jpg";
import A8 from "../Assets/Home/Favourite/A8.jpg";
import A9 from "../Assets/Home/Favourite/A9.jpg";
import N1 from "../Assets/Home/Favourite/N1.jpg";
import N2 from "../Assets/Home/Favourite/N2.jpg";
import N3 from "../Assets/Home/Favourite/N3.jpg";
import N4 from "../Assets/Home/Favourite/N4.jpg";
import N5 from "../Assets/Home/Favourite/N5.jpg";
import N6 from "../Assets/Home/Favourite/N6.jpg";
import N8 from "../Assets/Home/Favourite/N8.jpg";
import N9 from "../Assets/Home/Favourite/N9.jpg";
import L1 from "../Assets/Home/Favourite/L1.jpg";
import L2 from "../Assets/Home/Favourite/L2.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import C1 from "../Assets/3.jpg";
import C2 from "../Assets/4.jpg";
import C3 from "../Assets/5.jpg";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const images = [
      //   { id: 1, src: Image1, title: "foo", description: "bar" },
      {
        id: 2,
        src: Image2,
        title: "foo",
        description: "bar",
        // genre_ids: [1, 25, 120],
      },
      {
        id: 3,
        src: Image3,
        title: "foo",
        description: "bar",
        // genre_ids: [1, 25, 120],
      },
      {
        id: 4,
        src: Image4,
        title: "foo",
        description: "bar",
        genre_ids: [2, 25, 120],
      },
      {
        id: 5,
        src: Image5,
        title: "foo",
        description: "bar",
        // genre_ids: [1, 25, 120],
      },
      {
        id: 6,
        src: Image6,
        title: "foo",
        description: "bar",
        // genre_ids: [1, 25, 120],
      },
      {
        id: 7,
        src: Image7,
        title: "foo",
        description: "bar",
        // genre_ids: [1, 25, 120],
      },
      {
        id: 8,
        src: Image8,
        title: "foo",
        description: "bar",
        genre_ids: [2, 25, 120],
      },
      {
        id: 9,
        src: Image9,
        title: "foo",
        description: "bar",
        // genre_ids: [1, 25, 120],
      },
      {
        id: 10,
        src: Image10,
        title: "foo",
        description: "bar",
        // genre_ids: [1, 25, 120],
      },
      {
        id: 11,
        src: Image11,
        title: "foo",
        description: "bar",
        // genre_ids: [2, 25, 120],
      },
    ];

    const favorite = [
      //   { id: 1, src: Image1, title: "foo", description: "bar" },
      {
        id: 2,
        src: A1,
        title: "foo",
        description: "bar",
        genre_ids: [1, 25, 120],
      },
      {
        id: 3,
        src: A2,
        title: "foo",
        description: "bar",
        genre_ids: [1, 25, 120],
      },
      {
        id: 4,
        src: A3,
        title: "foo",
        description: "bar",
        genre_ids: [1, 25, 120],
      },
      {
        id: 5,
        src: A4,
        title: "foo",
        description: "bar",
        genre_ids: [1, 25, 120],
      },
      {
        id: 6,
        src: A5,
        title: "foo",
        description: "bar",
        genre_ids: [1, 25, 120],
      },
      {
        id: 7,
        src: A6,
        title: "foo",
        description: "bar",
        genre_ids: [1, 25, 120],
      },
      {
        id: 8,
        src: A8,
        title: "foo",
        description: "bar",
        genre_ids: [1, 25, 120],
      },
      {
        id: 9,
        src: A9,
        title: "foo",
        description: "bar",
        genre_ids: [1, 25, 120],
      },
      {
        id: 10,
        src: N1,
        title: "foo",
        description: "bar",
        genre_ids: [2, 25, 120],
      },
      {
        id: 11,
        src: N2,
        title: "foo",
        description: "bar",
        genre_ids: [2, 25, 120],
      },
      {
        id: 12,
        src: N3,
        title: "foo",
        description: "bar",
        genre_ids: [2, 25, 120],
      },
      {
        id: 13,
        src: N4,
        title: "foo",
        description: "bar",
        genre_ids: [2, 25, 120],
      },
      {
        id: 14,
        src: N5,
        title: "foo",
        description: "bar",
        genre_ids: [2, 25, 120],
      },
      {
        id: 15,
        src: N6,
        title: "foo",
        description: "bar",
        genre_ids: [2, 25, 120],
      },
      {
        id: 16,
        src: N8,
        title: "foo",
        description: "bar",
        genre_ids: [2, 25, 120],
      },
      {
        id: 17,
        src: N9,
        title: "foo",
        description: "bar",
        genre_ids: [3, 25, 120],
      },
      {
        id: 18,
        src: L1,
        title: "foo",
        description: "bar",
        genre_ids: [3, 25, 120],
      },
      {
        id: 19,
        src: L2,
        title: "foo",
        description: "bar",
        genre_ids: [3, 25, 120],
      },
    ];

    setPopular(favorite);
    setFiltered(favorite);
  };

  const image = [{ url: C1 }, { url: C2 }, { url: C3 }];

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
          <div className="d-flex justify-content-center works">
            <div className="work_div">
              <button className="btn btn-light btn-rounded work_button">
                View Albums
              </button>
              <button className="btn btn-warning btn-rounded work_type">
                Weddings
              </button>
            </div>
            {/* <div className="me-2 work_div2">
              <button className="btn btn-light btn-rounded work_button">
                View Albums
              </button>
              <button className="btn btn-warning btn-rounded work_type">
                Homecomings
              </button>
            </div> */}
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
        <h1 className="about">Favorite Captures</h1>
        <h6 className="about_name">BEST-LOVE</h6>
        <div>
          <div>
            <h4 className="desc_2" style={{ textAlign: "center" }}>
              Passing wondrous moments may not come with the same glow again.
              But we freeze them in beautiful <br></br> photographs to be viewed
              and reviewed to ones heart’s content. And that is the work we love{" "}
              <br></br> most – just taking pretty pictures.
            </h4>
          </div>
          <div className="mt-4">
            <Filter
              popular={popular}
              setFiltered={setFiltered}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
            />
            <div className="mt-4"></div>
            <motion.div layout className="popular-images">
              <AnimatePresence>
                {filtered.map((image) => {
                  return <ImageComponent key={image.id} image={image} />;
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="about">Clients' Experences</h1>
        <h6 className="about_name">Testimonial</h6>
        <div>
          <div>
            <h4 className="desc_2" style={{ textAlign: "center" }}>
              Passing wondrous moments may not come with the same glow again.
              But we freeze them in beautiful <br></br> photographs to be viewed
              and reviewed to ones heart’s content. And that is the work we love{" "}
              <br></br> most – just taking pretty pictures.
            </h4>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <SimpleImageSlider
            width={896}
            height={504}
            images={image}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
