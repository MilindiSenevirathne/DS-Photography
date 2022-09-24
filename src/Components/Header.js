import Facebook from "../Assets/facebook.png";
import Instagram from "../Assets/instagram (1).png";
import Image from "../Assets/logo2.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="colapse">
        <div class="mobile-container">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>
        </div>
        
      </div>
      <div className="header">
        <div
          className="d-flex justify-content-around navbar"
          style={{ boxShadow: "none", paddingTop:"0px" }}
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
                <a
                  class="nav-link"
                  href="#captures"
                  style={{ color: "#bfbdbd" }}
                >
                  PORTFOLIO
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#contact"
                  style={{ color: "#bfbdbd" }}
                >
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
  );
};

export default Header;
