
const Footer = ( )=>{
    return(
        <footer
        class="text-center text-lg-start text-white mt-5"
        style={{ backgroundColor: "#fcb323" }}
      >
        <section class="d-flex justify-content-lg-between"></section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-2"></i>Disal Senevirathne Photography
                </h6>
                <p>
                  We are delight to have you as our clients. If you are interested you can contact me using contact details.
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#welcome" class="text-reset">
                    Welcome
                  </a>
                </p>
                <p>
                  <a href="#about" class="text-reset">
                    About Me
                  </a>
                </p>
                <p>
                  <a href="#works" class="text-reset">
                    My Works
                  </a>
                </p>
                <p>
                  <a href="#captures" class="text-reset">
                    Portfolio
                  </a>
                </p>
                <p>
                  <a href="#contact" class="text-reset">
                    Contact Me
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-2"></i> No. 240/9, Samagi Mawatha, Hirana, Panadura.
                </p>
                <p>
                  <i class="fas fa-envelope me-2"></i> disalgeelaka2@gmail
                </p>
                <p>
                  <i class="fas fa-phone me-2"></i> (+94) 71 403 6058
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="d-flex justify-content-center">
          <section>
            <a
              class="btn btn-floating btn-lg text-white m-1"
              href="https://www.facebook.com/disalgeelaka"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-facebook-f" style={{ fontSize: "18px" }}></i>
            </a>


            <a
              class="btn btn-floating btn-lg text-white m-1"
              href="disalgeelaka2@gmail.com"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-google" style={{ fontSize: "18px" }}></i>
            </a>

            <a
              class="btn btn-floating btn-lg text-white m-1"
              href="https://www.instagram.com/disalsenavi/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-instagram" style={{ fontSize: "18px" }}></i>
            </a>

          </section>
        </div>

        <div class="text-center p-4">
          © 2022 Copyright:
          <a class="text-reset fw-bold" href="https://ds-photography.netlify.app/">
            DSPhotography
          </a>
        </div>
      </footer>
    )
}

export default Footer;