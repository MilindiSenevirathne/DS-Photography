import Facebook from "../Assets/facebook.png";
import Instagram from "../Assets/instagram (1).png";
import Image from "../Assets/camera.png";

const Header = () =>{
    return(
        <div>
            <div className="header">
        <div
          className="d-flex justify-content-around navbar"
          style={{ boxShadow: "none" }}
        >
          <div className="nav_links">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#welcome"
                  style={{ color: "#bfbdbd" }}
                >
                  WELCOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about" style={{ color: "#bfbdbd" }}>
                  ABOUT ME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#works" style={{ color: "#bfbdbd" }}>
                  MY WORKS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#captures" style={{ color: "#bfbdbd" }}>
                  PORTFOLIO
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" style={{ color: "#bfbdbd" }}>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div
            className="d-flex justify-content-center line"
            style={{ height: "150px" }}
          >
            <div className="vr"></div>
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
              <a href="https://www.facebook.com/disalgeelaka">
                <img src={Facebook} className="me-2 fb" />
              </a>
              <a href="https://www.instagram.com/disalsenavi/">
                <img src={Instagram} className="insta" />
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Header;