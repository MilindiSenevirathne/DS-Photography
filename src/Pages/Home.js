import Slideshow from "../Components/SlideShow";

const Home = () => {
  return (
    <div>
      <div>
      <div className="d-flex justify-content-around navbar" style={{}}>
        <div className="nav_links">
          <ul class="nav flex-column" style={{color:"black"}}>
            <li class="nav-item" >
              <a class="nav-link active" href="#">
                WELCOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ABOUT ME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                MY WORKS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                PORTFOLIO
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <div className="name">
            <h1 style={{fontFamily:"Space Mono"}}>DS Photography</h1>
        </div>

        <div>
            <h6>Best phogragraphs and <br/>give value for money.</h6>
        </div>
      </div>
      </div>

      <div>
        <Slideshow />
      </div>
    </div>
  );
};

export default Home;
