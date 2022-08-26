const Home = () => {
  return (
    <div>
      <div className="navbar" style={{width:"60%"}}>
        <div className="nav_links">
          <ul class="nav flex-column">
            <li class="nav-item">
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
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <div className="name">
            <h1>DS Photography</h1>
        </div>

        <div>
            <h6>Best phogragraphs and <br/>give value for money.</h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
