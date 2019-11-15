import React from 'react';

export const Contact: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <header className="header-section clearfix">
        <div className="container-fluid">
          <a href="index.html" className="site-logo">
            <img src="img/logo.png" alt="" />
          </a>
          <div className="responsive-bar">
            <i className="fa fa-bars"></i>
          </div>
          <a href="/" className="user">
            <i className="fa fa-user"></i>
          </a>
          <a href="/" className="site-btn">
            Sign Up Free
          </a>
          <nav className="main-menu">
            <ul className="menu-list">
              <li>
                <a href="/">Solution</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="page-info-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="site-beradcamb">
            <a href="/">Home</a>
            <span>
              <i className="fa fa-angle-right"></i> Contact us
            </span>
          </div>
        </div>
      </section>

      <section className="contact-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="check-form" type="text" placeholder="First Name*:" />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="check-form" type="text" placeholder="Last Name*:" />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="check-form" type="text" placeholder="Email Adress*:" />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="check-form" type="text" placeholder="Phone Number*:" />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea placeholder="Tell us about your question!"></textarea>
                    </div>
                    <h5 className="mb-3">
                      Way to Contacts<span>*</span>:
                    </h5>
                    <div className="contact-type">
                      <label className="ct-label">
                        Phone
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="ct-label">
                        Email
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="ct-label">
                        Other
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                    </div>

                    <button className="site-btn sb-gradients mt-4">Submit form</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="map" id="map-canvas"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section gradient-bg">
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-7 newsletter-text">
              <h2>Subscribe to our Newsletter</h2>
              <p>Sign up for our weekly industry updates, insider perspectives and in-depth market analysis.</p>
            </div>
            <div className="col-lg-5 col-md-8 offset-lg-0 offset-md-2">
              <form className="newsletter-form">
                <input type="text" placeholder="Enter your email" />
                <button>Get Started</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container">
          <div className="row spad">
            <div className="col-md-6 col-lg-3 footer-widget">
              <img src="img/logo.png" className="mb-4" alt="" />
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</p>
            </div>
            <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
              <h5 className="widget-title">Resources</h5>
              <ul>
                <li>
                  <a href="#">How to Buy Coin</a>
                </li>
                <li>
                  <a href="#">Coin Overview</a>
                </li>
                <li>
                  <a href="#">Blog News</a>
                </li>
                <li>
                  <a href="#">How to Sell Coin</a>
                </li>
                <li>
                  <a href="#">Purchase Theme</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
              <h5 className="widget-title">Quick Links</h5>
              <ul>
                <li>
                  <a href="#">Network Stats</a>
                </li>
                <li>
                  <a href="#">Block Explorers</a>
                </li>
                <li>
                  <a href="#">Governance</a>
                </li>
                <li>
                  <a href="#">Exchange Markets</a>
                </li>
                <li>
                  <a href="#">Get Theme</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
              <h5 className="widget-title">Follow Us</h5>
              <div className="social">
                <a href="/" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/" className="google">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="/" className="instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
                <a href="/">
                  <img src="img/appstore.png" alt="" className="mr-2" />
                </a>
                <a href="/">
                  <img src="img/playstore.png" alt="" />
                </a>
              </div>
              <div className="col-lg-8 text-center text-lg-right">
                <ul className="footer-nav">
                  <li>
                    <a href="/">DPA</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy </a>
                  </li>
                  <li>
                    <a href="/">support@company.com</a>
                  </li>
                  <li>
                    <a href="/">(123) 456-7890</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
