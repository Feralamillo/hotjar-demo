import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './shared/header';
import { Footer } from './shared/footer';

export const Blog: React.FunctionComponent = () => {
  return (
    <>
      <Header />

      <section className="page-info-section">
        <div className="container">
          <h2>News</h2>
          <div className="site-beradcamb">
            <Link to="/">Home</Link>
            <span>
              <i className="fa fa-angle-right" /> News
            </span>
          </div>
        </div>
      </section>

      <section className="blog-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog-item bi-feature">
                    <figure className="blog-thumb">
                      <img src="img/blog/2.jpg" alt="" />
                    </figure>
                    <div className="blog-text">
                      <div className="post-date">22 jan 2018</div>
                      <h4 className="blog-title">
                        <Link to="single-blog.html">This Week in Bitcoin: Up, Down and Sideways</Link>
                      </h4>
                      <div className="post-meta">
                        <Link to="/">
                          <span>by</span> Admin
                        </Link>
                        <Link to="/">
                          <i className="fa fa-heart-o" /> 234 Likes
                        </Link>
                        <Link to="/">
                          <i className="fa fa-comments-o" /> 08 comments
                        </Link>
                      </div>
                      <p>
                        Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive
                        any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better,
                        more free world.
                      </p>
                      <Link to="/" className="readmore">
                        Readmore <i className="fa fa-angle-double-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-item">
                    <figure className="blog-thumb">
                      <img src="img/blog/1.jpg" alt="" />
                    </figure>
                    <div className="blog-text">
                      <div className="post-date">22 dec 2018</div>
                      <h4 className="blog-title">
                        <Link to="single-blog.html">Blockchain Rolls Out Trading Feature for 22 States in the U.S</Link>
                      </h4>
                      <div className="post-meta">
                        <Link to="/">
                          <span>by</span> Admin
                        </Link>
                        <Link to="/">
                          <i className="fa fa-heart-o" /> 234 Likes
                        </Link>
                        <Link to="/">
                          <i className="fa fa-comments-o" /> 08 comments
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-item">
                    <figure className="blog-thumb">
                      <img src="img/blog/3.jpg" alt="" />
                    </figure>
                    <div className="blog-text">
                      <div className="post-date">28 aug 2018</div>
                      <h4 className="blog-title">
                        <Link to="single-blog.html">This Week in Bitcoin: Up, Down and Sideways</Link>
                      </h4>
                      <div className="post-meta">
                        <Link to="/">
                          <span>by</span> Admin
                        </Link>
                        <Link to="/">
                          <i className="fa fa-heart-o" /> 234 Likes
                        </Link>
                        <Link to="/">
                          <i className="fa fa-comments-o" /> 08 comments
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-item">
                    <figure className="blog-thumb">
                      <img src="img/blog/4.jpg" alt="" />
                    </figure>
                    <div className="blog-text">
                      <div className="post-date">22 jan 2018</div>
                      <h4 className="blog-title">
                        <Link to="single-blog.html">Indians Expect Clarity on Bitcoin Taxes within Days</Link>
                      </h4>
                      <div className="post-meta">
                        <Link to="/">
                          <span>by</span> Admin
                        </Link>
                        <Link to="/">
                          <i className="fa fa-heart-o" /> 234 Likes
                        </Link>
                        <Link to="/">
                          <i className="fa fa-comments-o" /> 08 comments
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-item">
                    <figure className="blog-thumb">
                      <img src="img/blog/5.jpg" alt="" />
                    </figure>
                    <div className="blog-text">
                      <div className="post-date">22 dec 2018</div>
                      <h4 className="blog-title">
                        <Link to="single-blog.html">Thailand Taking Steps to Regulate ICOs</Link>
                      </h4>
                      <div className="post-meta">
                        <Link to="/">
                          <span>by</span> Admin
                        </Link>
                        <Link to="/">
                          <i className="fa fa-heart-o" /> 234 Likes
                        </Link>
                        <Link to="/">
                          <i className="fa fa-comments-o" /> 08 comments
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-item">
                    <figure className="blog-thumb">
                      <img src="img/blog/6.jpg" alt="" />
                    </figure>
                    <div className="blog-text">
                      <div className="post-date">22 jan 2018</div>
                      <h4 className="blog-title">
                        <Link to="single-blog.html">Discover Card’s 44 Million Customers Denied Crypto</Link>
                      </h4>
                      <div className="post-meta">
                        <Link to="/">
                          <span>by</span> Admin
                        </Link>
                        <Link to="/">
                          <i className="fa fa-heart-o" /> 234 Likes
                        </Link>
                        <Link to="/">
                          <i className="fa fa-comments-o" /> 08 comments
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-item">
                    <figure className="blog-thumb">
                      <img src="img/blog/7.jpg" alt="" />
                    </figure>
                    <div className="blog-text">
                      <div className="post-date">22 dec 2018</div>
                      <h4 className="blog-title">
                        <Link to="single-blog.html">Wall Street Price Manipulation? Go Long</Link>
                      </h4>
                      <div className="post-meta">
                        <Link to="/">
                          <span>by</span> Admin
                        </Link>
                        <Link to="/">
                          <i className="fa fa-heart-o" /> 234 Likes
                        </Link>
                        <Link to="/">
                          <i className="fa fa-comments-o" /> 08 comments
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="post-loadmore site-btn sb-gradients sbg-line mt-5">LOAD MORE</button>
            </div>
            <div className="col-lg-4 col-md-6 sideber pt-5 pt-lg-0">
              <div className="widget-area">
                <h4 className="widget-title">News Letter</h4>
                <p>Receive our newsletter to stay on top of the latest posts.</p>
                <form className="widget-subscribe-from">
                  <input type="text" placeholder="Enter your email" />
                  <button className="site-btn sb-full-- sb-gradients">Subscribe</button>
                </form>
              </div>
              <div className="widget-area">
                <div className="widget">
                  <h4 className="widget-title">Categories</h4>
                  <ul>
                    <li>
                      <Link to="#">Prediction markets</Link>
                    </li>
                    <li>
                      <Link to="#">Storage</Link>
                    </li>
                    <li>
                      <Link to="#">Token exchange</Link>
                    </li>
                    <li>
                      <Link to="#">Computation</Link>
                    </li>
                    <li>
                      <Link to="#">Identity</Link>
                    </li>
                    <li>
                      <Link to="#">ICOs</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h4 className="widget-title">Popular Posts</h4>
                  <ul className="popular-posts">
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <Link to="/">Lightning and Mainnet: A Look at the Protocol’s Hype, Trials, and Error</Link>
                      </h5>
                    </li>
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <Link to="/">This Week in Bitcoin: Japan Gets Goxxed and Iota Gets Into a Tangle</Link>
                      </h5>
                    </li>
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <Link to="/">Bitcoin Futures Report Shows Bullish Sentiment Is In the Air</Link>
                      </h5>
                    </li>
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <Link to="/">Why Venezuela’s New National Cryptocurrency El Petro Will Fail</Link>
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h4 className="widget-title">Recent Tweets</h4>
                  <ul className="twitter-widget">
                    <li>
                      <h5>Why Does The Bitcoin Price Move So Much?</h5>
                      <Link to="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</Link>
                      <span>4 days ago</span>
                    </li>
                    <li>
                      <h5>How Can I Trade Bitcoin without an Exchange?</h5>
                      <Link to="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</Link>
                      <span>4 days ago</span>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h4 className="widget-title">Follow Us</h4>
                  <div className="social">
                    <Link to="/" className="facebook">
                      <i className="fa fa-facebook" />
                    </Link>
                    <Link to="/" className="google">
                      <i className="fa fa-google-plus" />
                    </Link>
                    <Link to="/" className="instagram">
                      <i className="fa fa-instagram" />
                    </Link>
                    <Link to="/" className="twitter">
                      <i className="fa fa-twitter" />
                    </Link>
                  </div>
                </div>
              </div>
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
