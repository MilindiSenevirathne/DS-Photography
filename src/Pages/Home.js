import Slideshow from "../Components/SlideShow";
import "../Pages/Home.css";
import Image from "../Assets/camera.png";
import Facebook from "../Assets/facebook.png";
import Instagram from "../Assets/instagram (1).png";
import Image2 from "../Assets/Disal.jpg";
import Wedding from "../Assets/Home/H3.jpg"
import Wedding2 from "../Assets/Home/H6.jpg"

const Home = () => {
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
            <h4 className="desc_2" style={{textAlign:"center"}}>
              PassionArt wedding photography sri lanka seek to portray all
              brides & bridegrooms in their own natural style<br></br> and we
              make the photos to be expressions of their natural charm. Blending
              that style with our creativeness<br></br> we strive to make their
              wedding day photos to be really awesome.
            </h4>
          </div>
          <div>
          <div className="work_div">
            <img src={Wedding} alt="Snow" className="work_img"/>
            <img src={Wedding2} alt="Snow" className="hidden_img"/>
            <h1 className="work_type">Weddings</h1>
          </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="about">Favorite Captures</h1>
        <h6 className="about_name">BEST-LOVED</h6>
        <div className="">
          <div>
            <h4 className="desc_2" style={{textAlign:"center"}}>
            Passing wondrous moments may not come with the same glow again. 
            But we freeze them in beautiful <br></br> photographs to be viewed and 
            reviewed to ones heart’s content. And that is the work we love <br></br>
            most – just taking pretty pictures.
            </h4>
          </div>
          <div>
          <div class="portfolio__nav">
            <span class="portfolio__item" data-filter="all">All</span>
            <span class="portfolio__item" data-filter=".web">Web</span>
            <span class="portfolio__item" data-filter=".ux">Ui/Ux</span>
            <span class="portfolio__item" data-filter=".blog">Blog</span>
          </div>

          <div class="portfolios__container bd-grid">
          <div class="portfolio__content mix ux">
            <a href="https://www.figma.com/file/0UQAyOxjbKhF1hrW0iIBMF/IDOC"
              ><img src="data:image/jpeg;base64,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" class="portfolio__img" alt=""
            /></a>
            <div class="portfolio__data">
              <a href="https://www.figma.com/file/0UQAyOxjbKhF1hrW0iIBMF/IDOC"
                ><span class="portfolio__subtitle"
                  >Document Management System</span
                ></a
              >

              <h2 class="portfolio__title">
                This a document management system interface that I implemented
                to our second year software project.
              </h2>
            </div>
          </div>

          <div class="portfolio__content mix blog">
            <a
              href="https://vihanpamudya12.medium.com/basic-concepts-in-javascript-fdd7b8ea7640"
              ><img
                src="data:image/jpeg;base64,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"
                class="portfolio__img"
                alt=""
            /></a>
            <div class="portfolio__data">
              <a
                href="https://vihanpamudya12.medium.com/basic-concepts-in-javascript-fdd7b8ea7640"
              >
                <span class="portfolio__subtitle"
                  >Basic Concepts in JavaScript🤠</span
                >
              </a>
              <h2 class="portfolio__title">
                Hello everyone!!! This is my first article. Here I’m going to
                write about basic concepts in JavaScript.
              </h2>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Home;
