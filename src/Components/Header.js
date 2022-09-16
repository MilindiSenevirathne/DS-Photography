import Facebook from "../Assets/facebook.png";
import Instagram from "../Assets/instagram (1).png";
import Image from "../Assets/logo2.png";

const Header = () => {

    function myFunction() {
        let x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
  return (
    <div>
      <div className="colapse">
      <div class="mobile-container">

<div class="topnav">
  <a href="#home" class="active">Logo</a>
  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <a href="javascript:void(0);" class="icon" onclick={()=>myFunction()}>
    <i class="fa fa-bars"></i>
  </a>
</div>

{/* <div style="padding-left:16px">
  <h3>Vertical Mobile Navbar</h3>
  <p>This example demonstrates how a navigation menu on a mobile/smart phone could look like.</p>
  <p>Click on the hamburger menu (three bars) in the top right corner, to toggle the menu.</p>
</div> */}


</div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>
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
