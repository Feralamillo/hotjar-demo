import React from 'react';
import { Header } from './shared/header';
import { Footer } from './shared/footer';

export const Post: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header />

      <section className="page-info-section">
        <div className="container">
          <h2>News</h2>
          <div className="site-beradcamb">
            <a href="">Home</a>
            <span>
              <i className="fa fa-angle-right" /> News
            </span>
          </div>
        </div>
      </section>

      <section className="single-blog-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-item bi-feature">
                <figure className="blog-thumb">
                  <img src="img/blog/2.jpg" alt="" />
                </figure>
                <div className="blog-text">
                  <div className="post-date">22 dec 2018</div>
                  <h2 className="blog-title">
                    <a href="">This Week in Bitcoin: Up, Down and Sideways</a>
                  </h2>
                  <div className="post-meta">
                    <a href="">
                      <span>by</span> Admin
                    </a>
                    <a href="">
                      <i className="fa fa-heart-o" /> 234 Likes
                    </a>
                    <a href="">
                      <i className="fa fa-comments-o" /> 08 comments
                    </a>
                  </div>
                  <p>
                    Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any
                    amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more
                    free world.
                  </p>
                  <p>
                    Formerly known as Rootstock, the startup has long been lauded for its potential to pave the way for the implementation of
                    ethereum-style smart contracts on bitcoin, something enthusiasts believe will keep the world's largest cryptocurrency competitive
                    with the platform that arguably pioneered the idea that more complex self-executing code could be run on a blockchain.
                  </p>
                  <p>
                    But while it would be easy enough for bitcoin users that want more complex smart contracts to merely make the switch, some users
                    believe that, as bitcoin is the largest and most secure cryptocurrency, more experimental features that debut on other networks
                    will eventually make their way to its network. The idea is that in doing so, they can capitalize on bitcoin's impressive startup
                    infrastructure and serve different users.
                  </p>
                  <p>
                    Yet, RSK's version of the functionality doesn't quite upgrade the bitcoin blockchain itself. The capability will rather be brought
                    to bitcoin via a sidechain, which moves tokens from the main bitcoin blockchain to a compatible network operated with the help of
                    25 companies.
                  </p>
                  <p>
                    Still, RSK CEO Diego Gutierrez Zaldivar believes the advance will effectively provide the same level of utility to potential
                    users.
                  </p>
                  <blockquote>
                    "This is the first time that there's going to be a smart contract platform powered by the bitcoin network."
                    <span>Oliver Dale </span>
                  </blockquote>
                  <h4 className="mb-4">Starbucks Chairman Is Hot on Blockchain, Cold on Bitcoin</h4>
                  <p>
                    You are not able to purchase POWR with “Fiat” currency so you will need to first purchase another currency – the easiest to buy
                    are Bitcoin or Ethereum which you can do at Coinbase using a bank transfer or debit / credit card purchase and then swap that for
                    POWR at an exchange such as Binance.
                  </p>
                  <p>
                    You will have to carry out some identity verification when signing up as they have to adhere to strict financial guidelines. Make
                    sure you use our link to signup you will be credited with $10 in free bitcoin when you make your first purchase of $100
                  </p>
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="post-tags">
                        <a href="#">Multipopuse</a>
                        <a href="#">Fashion</a>
                        <a href="#">Blogs</a>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="social-share">
                        <p>Share</p>
                        <a href="">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus" />
                        </a>
                        <a href="">
                          <i className="fa fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="releted-posts">
                    <h4>You May Also Like</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="blog-item">
                          <figure className="blog-thumb">
                            <img src="img/blog/1.jpg" alt="" />
                          </figure>
                          <div className="blog-text">
                            <div className="post-date">22 dec 2018</div>
                            <h4 className="blog-title">
                              <a href="">Blockchain Rolls Out Trading Feature for 22 States in the U.S</a>
                            </h4>
                            <div className="post-meta">
                              <a href="">
                                <span>by</span> Admin
                              </a>
                              <a href="">
                                <i className="fa fa-heart-o" /> 234 Likes
                              </a>
                              <a href="">
                                <i className="fa fa-comments-o" /> 08 comments
                              </a>
                            </div>
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
                              <a href="">Blockchain Rolls Out Trading Feature for 22 States in the U.S</a>
                            </h4>
                            <div className="post-meta">
                              <a href="">
                                <span>by</span> Admin
                              </a>
                              <a href="">
                                <i className="fa fa-heart-o" /> 234 Likes
                              </a>
                              <a href="">
                                <i className="fa fa-comments-o" /> 08 comments
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-area">
                    <h4>03 Comments</h4>
                    <ul className="comment-list">
                      <li>
                        <div className="comment">
                          <div className="comment-avator set-bg" data-setbg="img/blog/comment/1.jpg"></div>
                          <div className="comment-content">
                            <h5>
                              Kelly Richardson<span>, 24 Mar 2018</span>
                            </h5>
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                              modi tempora incidunt ut labore et dolore magnam.
                            </p>
                            <a href="" className="c-btn">
                              Like
                            </a>
                            <a href="" className="c-btn">
                              Reply
                            </a>
                          </div>
                        </div>
                        <ul className="replay-comment-list">
                          <li>
                            <div className="comment">
                              <div className="comment-avator set-bg" data-setbg="img/blog/comment/2.jpg"></div>
                              <div className="comment-content">
                                <h5>
                                  Gordon Browns<span>, 24 Mar 2018</span>
                                </h5>
                                <p>
                                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                                  eius modi tempora incidunt ut labore.
                                </p>
                                <a href="" className="c-btn">
                                  Like
                                </a>
                                <a href="" className="c-btn">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment">
                          <div className="comment-avator set-bg" data-setbg="img/blog/comment/3.jpg"></div>
                          <div className="comment-content">
                            <h5>
                              Scott Langton<span>, 24 Mar 2018</span>
                            </h5>
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                              modi tempora incidunt ut labore et dolore magnam.
                            </p>
                            <a href="" className="c-btn">
                              Like
                            </a>
                            <a href="" className="c-btn">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-form-area">
                    <form className="comment-form">
                      <div className="form-group">
                        <input type="text" placeholder="Your name *:" />
                        <label></label>
                      </div>
                      <div className="form-group">
                        <input type="email" placeholder="Your email *:" />
                        <label></label>
                      </div>
                      <div className="form-group">
                        <input type="text" placeholder="Your Phone *:" />
                        <label></label>
                      </div>
                      <div className="form-group clearfix">
                        <textarea placeholder="Your comment"></textarea>
                        <label></label>
                      </div>
                      <button className="site-btn sb-gradients no-radius mt-3">Submit Now</button>
                    </form>
                  </div>
                </div>
              </div>
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
                      <a href="#">Prediction markets</a>
                    </li>
                    <li>
                      <a href="#">Storage</a>
                    </li>
                    <li>
                      <a href="#">Token exchange</a>
                    </li>
                    <li>
                      <a href="#">Computation</a>
                    </li>
                    <li>
                      <a href="#">Identity</a>
                    </li>
                    <li>
                      <a href="#">ICOs</a>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h4 className="widget-title">Popular Posts</h4>
                  <ul className="popular-posts">
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <a href="">Lightning and Mainnet: A Look at the Protocol’s Hype, Trials, and Error</a>
                      </h5>
                    </li>
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <a href="">This Week in Bitcoin: Japan Gets Goxxed and Iota Gets Into a Tangle</a>
                      </h5>
                    </li>
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <a href="">Bitcoin Futures Report Shows Bullish Sentiment Is In the Air</a>
                      </h5>
                    </li>
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <a href="">Why Venezuela’s New National Cryptocurrency El Petro Will Fail</a>
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h4 className="widget-title">Recent Tweets</h4>
                  <ul className="twitter-widget">
                    <li>
                      <h5>Why Does The Bitcoin Price Move So Much?</h5>
                      <a href="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</a>
                      <span>4 days ago</span>
                    </li>
                    <li>
                      <h5>How Can I Trade Bitcoin without an Exchange?</h5>
                      <a href="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</a>
                      <span>4 days ago</span>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h4 className="widget-title">Follow Us</h4>
                  <div className="social">
                    <a href="" className="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="" className="google">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="" className="instagram">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
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
    </React.Fragment>
  );
};
