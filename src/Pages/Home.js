import Slideshow from "../Components/SlideShow";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Pages/Home.css";
import Image2 from "../Assets/Disal.jpg";
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
import L3 from "../Assets/Home/Favourite/L3.jpg";
import L4 from "../Assets/Home/Favourite/L4.jpg";
import L5 from "../Assets/Home/Favourite/L5.jpg";
import L6 from "../Assets/Home/Favourite/L6.jpg";
import L8 from "../Assets/Home/Favourite/L8.jpg";
import L9 from "../Assets/Home/Favourite/L9.jpg";
import S2 from "../Assets/Home/Favourite/S2.jpg";
import S3 from "../Assets/Home/Favourite/S3.jpg";
import S4 from "../Assets/Home/Favourite/S4.jpg";
import S5 from "../Assets/Home/Favourite/S5.jpg";
import S6 from "../Assets/Home/Favourite/S6.jpg";
import S7 from "../Assets/Home/Favourite/S7.jpg";
import S8 from "../Assets/Home/Favourite/S8.jpg";
import C1 from "../Assets/3.jpg";
import C2 from "../Assets/4.jpg";
import C3 from "../Assets/5.jpg";
import Header from "../Components/Header";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../Components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const favorite = [
      {
        id: 2,
        src: A1,
        title: "foo",
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
        genre_ids: [2, 25, 120],
      },
      {
        id: 18,
        src: L1,
        title: "foo",
        description: "bar",
        genre_ids: [4, 25, 120],
      },
      {
        id: 19,
        src: L2,
        title: "foo",
        description: "bar",
        genre_ids: [4, 25, 120],
      },
      {
        id: 27,
        src: L3,
        title: "foo",
        description: "bar",
        genre_ids: [4, 25, 120],
      },
      {
        id: 28,
        src: L4,
        title: "foo",
        description: "bar",
        genre_ids: [4, 25, 120],
      },
      {
        id: 29,
        src: L5,
        title: "foo",
        description: "bar",
        genre_ids: [4, 25, 120],
      },
      {
        id: 30,
        src: L6,
        title: "foo",
        description: "bar",
        genre_ids: [4, 25, 120],
      },
      {
        id: 31,
        src: L8,
        title: "foo",
        description: "bar",
        genre_ids: [4, 25, 120],
      },
      {
        id: 32,
        src: L9,
        title: "foo",
        description: "bar",
        genre_ids: [4, 25, 120],
      },
      {
        id: 20,
        src: S2,
        title: "foo",
        description: "bar",
        genre_ids: [3, 25, 120],
      },
      {
        id: 21,
        src: S3,
        title: "foo",
        description: "bar",
        genre_ids: [3, 25, 120],
      },
      {
        id: 22,
        src: S4,
        title: "foo",
        description: "bar",
        genre_ids: [3, 25, 120],
      },
      {
        id: 23,
        src: S5,
        title: "foo",
        description: "bar",
        genre_ids: [3, 25, 120],
      },
      {
        id: 24,
        src: S6,
        title: "foo",
        description: "bar",
        genre_ids: [3, 25, 120],
      },
      {
        id: 25,
        src: S7,
        title: "foo",
        description: "bar",
        genre_ids: [3, 25, 120],
      },
      {
        id: 26,
        src: S8,
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
      <header>
        <Header />
      </header>

      <div className="content">
        <div className="slides">
          <Slideshow />
        </div>

        <div className="location">
          <h5>Hirana. Panadura</h5>
          <div class="d-flex justify-content-center line">
            <div class="vr"></div>
          </div>
          <div>
            <h6 className="mt-2">
              We make your special days with splendid memories to last a
              lifetime.
            </h6>
          </div>
        </div>

        <div className="mt-4 my_photography" id="welcome">
          <div className="mt-4 box">
            <div className="d-flex justify-content-center box_2">
              <div className="box_3">
                <h3 className="about_name2">My Photography</h3>
                <h4 className="desc_2">
                  I have had a passion for photography since I was young. In the
                  early days, I didn’t know about my ability in this field. I
                  have a bachelor’s degree in science from the University of
                  Ruhuna and while I was at the university, I realizes I have
                  the ability to do this. Currently, I am covering weddings,
                  homecomings, engagements, birthday parties, fashion events, as
                  well as pre-shoots. If you are interested you can contact me.
                  You all are welcome to my page!
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4" id="about">
          <h1 className="about">About Me</h1>
          <h6 className="about_name">Disal Senevirathne</h6>
          <div className="d-flex justify-content-center">
            <div className="box_1">
              <h3 className="about_name2">I'm Disal Senevirathne</h3>
              <h4 className="desc_2">
                I am a Sri Lankan wedding and portrait photographer. I started
                photography like most do- as a hobby! I would have never dreamt
                that it would eventually turn into a career for me. After
                beginning as a hobby I realized that I liked taking photos and
                making people FEEL a certain way more than I thought possible! I
                dived into practicing more, educating myself and thus started
                the beginning of a wonderful thing that is now my full-time job.
              </h4>
              <a href="https://www.facebook.com/disalgeelaka"><button className="about_button">Learn More</button></a>
            </div>
            <div className="">
              <img src={Image2} alt="Snow" className="about_img" />
            </div>
          </div>
        </div>

        <div className="mt-4" id="works">
          <h1 className="about">My Works</h1>
          <h6 className="about_name">Work Types</h6>
          <div className="">
            <div>
              <h4 className="desc_2" style={{ textAlign: "center" }}>
                Disal Senevirathne Photography Sri Lanka aims to capture each
                bride and groom in their
                <br /> own unique natural style, and we edit the images to
                highlight their inherent charm.
                <br /> We aim to make their wedding day images extremely great
                by fusing their style with our creativity.
              </h4>
            </div>
            <div className="works">
              <div className="work_div">
                <Link to="/weddings">
                  <button className="btn btn-light btn-rounded work_button">
                    View Albums
                  </button>
                </Link>
                <button className="btn btn-warning btn-rounded work_type">
                  Weddings
                </button>
              </div>
              <div className="work_div3">
                <Link to="/preshoot">
                  <button className="btn btn-light btn-rounded work_button">
                    View Albums
                  </button>
                </Link>
                <button className="btn btn-warning btn-rounded work_type">
                  Pre Shoots
                </button>
              </div>
              <div className="work_div4">
                <Link to="/fashion">
                  <button className="btn btn-light btn-rounded work_button">
                    View Albums
                  </button>
                </Link>
                <button className="btn btn-warning btn-rounded work_type">
                  Fashion
                </button>
              </div>
              <div className="work_div5">
                <Link to="/events">
                  <button className="btn btn-light btn-rounded work_button">
                    View Albums
                  </button>
                </Link>
                <button className="btn btn-warning btn-rounded work_type">
                  Events
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4" id="captures">
          <h1 className="about">Favorite Captures</h1>
          <h6 className="about_name">BEST-LOVE</h6>
          <div>
            <div>
              <h4 className="desc_2" style={{ textAlign: "center" }}>
                Wonderful moments may not reappear with the same radiance.
                However, we capture them
                <br /> in stunning pictures that may be looked at and examined
                endlessly.
                <br /> And taking beautiful images is the kind of labor we enjoy
                doing the most.
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

        {/* <div className="mt-4" id="client">
          <h1 className="about">Clients' Experences</h1>
          <h6 className="about_name">Testimonial</h6>
          <div>
            <div>
              <h4 className="desc_2" style={{ textAlign: "center" }}>
                Clients are the most valuble assets according to us. Their
                happiness is the <br />
                most considerable thing in here. Take a look what our clients'
                thought on my works.
              </h4>
            </div>
          </div>
          <div className="d-flex justify-content-center slider">
            <SimpleImageSlider
              width={896}
              height={504}
              images={image}
              showBullets={true}
              showNavs={true}
            />
            <Carousel autoFocus={true} autoPlay={false} >
                <div>
                    <img src={C1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={C2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={C3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            
          </div>
        </div> */}

        <div className="mt-4" id="contact">
          <h1 className="about">Contact Me</h1>
          <h6 className="about_name">Get in touch</h6>

          <div class="contact__contents bd-grid mt-4">
            <div class="contact__box">
              <i class="bx bx-home contact__icon"></i>
              <h3 class="contact__title">Location</h3>
              <span class="contact__description">Panadura, Sri Lanka</span>
            </div>

            <div class="contact__box">
              <i class="bx bx-envelope contact__icon"></i>
              <h3 class="contact__title">Email</h3>
              <span class="contact__description">disalgeelaka2@gmail.com</span>
            </div>

            <div class="contact__box">
              <i class="bx bx-phone contact__icon"></i>
              <h3 class="contact__title">Phone</h3>
              <span class="contact__description">+94 714036058</span>
            </div>
          </div>

          <div className="map__contents bd-grid mt-4">
            <div className="section">
              <div class="contact__container container">
                <iframe
                  className="map mt-3"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=disal%20senevirathne%20&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  title=" Location"
                ></iframe>
              </div>
            </div>
            <div className="section mt-3">
              <div class="contact__container container grid">
                <form
                  action="https://formsubmit.co/disalgeelaka2@gmail.com"
                  method="POST"
                  class="contact__form grid"
                >
                  <input
                    type="hidden"
                    name="_template"
                    value="Email from Portfolio"
                  />
                  <div class="contact__inputs grid">
                    <div class="contact__content">
                      <label for="" class="contact__label">
                        Name
                      </label>
                      <input type="text" name="name" class="contact__input" />
                    </div>
                    <div class="contact__content">
                      <label for="" class="contact__label">
                        Email
                      </label>
                      <input type="email" name="email" class="contact__input" />
                    </div>
                  </div>
                  <div class="contact__content">
                    <label for="" class="contact__label">
                      Title
                    </label>
                    <input type="text" name="project" class="contact__input" />
                  </div>
                  <div class="contact__content">
                    <label for="" class="contact__label">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id=""
                      cols="0"
                      rows="7"
                      class="contact__input"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="button button--flex"
                      id="submit__button"
                    >
                      Send Message
                      <i class="uil uil-message button__icon"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
