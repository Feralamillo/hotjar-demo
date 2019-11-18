import React from 'react';
import { Header } from './shared/header';
import { Footer } from './shared/footer';

export const Contact: React.FunctionComponent = () => {
  return (
    <>
      <Header />

      <section className="page-info-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="site-beradcamb">
            <a href="/">Home</a>
            <span>
              <i className="fa fa-angle-right" /> Contact us
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
                        <i className="ti-check" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="check-form" type="text" placeholder="Last Name*:" />
                      <span>
                        <i className="ti-check" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="check-form" type="text" placeholder="Email Adress*:" />
                      <span>
                        <i className="ti-check" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="check-form" type="text" placeholder="Phone Number*:" />
                      <span>
                        <i className="ti-check" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea placeholder="Tell us about your question!" />
                    </div>
                    <h5 className="mb-3">
                      Way to Contacts<span>*</span>:
                    </h5>
                    <div className="contact-type">
                      <label className="ct-label">
                        Phone
                        <input type="radio" name="radio" />
                        <span className="checkmark" />
                      </label>
                      <label className="ct-label">
                        Email
                        <input type="radio" name="radio" />
                        <span className="checkmark" />
                      </label>
                      <label className="ct-label">
                        Other
                        <input type="radio" name="radio" />
                        <span className="checkmark" />
                      </label>
                    </div>

                    <button className="site-btn sb-gradients mt-4">Submit form</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="map" id="map-canvas" />
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

      <Footer />
    </>
  );
};
