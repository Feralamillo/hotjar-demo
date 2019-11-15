import React from "react";
import { Link } from 'react-router-dom';

export const Home: React.FunctionComponent = () => {
  return (
    <React.Fragment>
	<header className="header-section clearfix">
		<div className="container-fluid">
			<a href="/" className="site-logo">
				<img src="img/logo.png" alt="" />
			</a>
			<div className="responsive-bar"><i className="fa fa-bars"></i></div>
			<a href="/" className="user"><i className="fa fa-user"></i></a>
			<a href="/" className="site-btn">Sign Up Free</a>
			<nav className="main-menu">
				<ul className="menu-list">
					<li><Link to="/post">Solution</Link></li>
					<li><Link to="/blog">News</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>
		</div>
	</header>


	<section className="hero-section">
		<div className="container">
			<div className="row">
				<div className="col-md-6 hero-text">
					<h2>Invest in <span>Bitcoin</span>Bitcoin Trading</h2>
					<h4>Use modern progressive technologies of Bitcoin to earn money</h4>
					<form className="hero-subscribe-from">
						<input type="text" placeholder="Enter your email" />
						<button className="site-btn sb-gradients">Get Started</button>
					</form>
				</div>
				<div className="col-md-6">
					<img src="img/laptop.png" className="laptop-image" alt=""/>
				</div>
			</div>
		</div>
	</section>


	<section className="about-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 offset-lg-6 about-text">
					<h2>What is Bitcoin</h2>
					<h5>Bitcoin is an innovative payment network and a new kind of money.</h5>
					<p>Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
					<a href="/" className="site-btn sb-gradients sbg-line mt-5">Get Started</a>
				</div>
			</div>
			<div className="about-img">
				<img src="img/about-img.png" alt=""/>>
			</div>
		</div>
	</section>


	<section className="features-section spad gradient-bg">
		<div className="container text-white">
			<div className="section-title text-center">
				<h2>Our Features</h2>
				<p>Bitcoin is the simplest way to exchange money at very low cost.</p>
			</div>
			<div className="row">
				<div className="col-md-6 col-lg-4 feature">
					<i className="ti-mobile"></i>
					<div className="feature-content">
						<h4>Mobile Apps</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
						<a href="/" className="readmore">Readmore</a>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 feature">
					<i className="ti-shield"></i>
					<div className="feature-content">
						<h4>Safe & Secure</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
						<a href="/" className="readmore">Readmore</a>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 feature">
					<i className="ti-wallet"></i>
					<div className="feature-content">
						<h4>Wallet</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
						<a href="/" className="readmore">Readmore</a>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 feature">
					<i className="ti-headphone-alt"></i>
					<div className="feature-content">
						<h4>Experts Support</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
						<a href="/" className="readmore">Readmore</a>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 feature">
					<i className="ti-reload"></i>
					<div className="feature-content">
						<h4>Instant Exchange</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
						<a href="/" className="readmore">Readmore</a>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 feature">
					<i className="ti-panel"></i>
					<div className="feature-content">
						<h4>Recuring Buys</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
						<a href="/" className="readmore">Readmore</a>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section className="process-section spad">
		<div className="container">
			<div className="section-title text-center">
				<h2>Get Started With Bitcoin</h2>
				<p>Start learning about Bitcoin with interactive tutorials. It’s fun, easy, and takes only a few minutes! </p>
			</div>
			<div className="row">
				<div className="col-md-4 process">
					<div className="process-step">
						<figure className="process-icon">
							<img src="img/process-icons/1.png" alt="#"/>
						</figure>
						<h4>Create Your Wallet</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					</div>
				</div>
				<div className="col-md-4 process">
					<div className="process-step">
						<figure className="process-icon">
							<img src="img/process-icons/2.png" alt="#"/>
						</figure>
						<h4>Create Your Wallet</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					</div>
				</div>
				<div className="col-md-4 process">
					<div className="process-step">
						<figure className="process-icon">
							<img src="img/process-icons/3.png" alt="#"/>
						</figure>
						<h4>Create Your Wallet</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section className="fact-section gradient-bg">
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-md-6 col-lg-3">
					<div className="fact">
						<h2>60</h2>
						<p>Support  Countries</p>
						<i className="ti-basketball"></i>
					</div>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-3">
					<div className="fact">
						<h2>12K</h2>
						<p>Transactions   per hour</p>
						<i className="ti-panel"></i>
					</div>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-3">
					<div className="fact">
						<h2>5B</h2>
						<p>Largest  Transactions</p>
						<i className="ti-stats-up"></i>
					</div>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-3">
					<div className="fact">
						<h2>240</h2>
						<p>Years  of Experience</p>
						<i className="ti-user"></i>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section className="team-section spad">
		<div className="container">
			<div className="section-title text-center">
				<h2>Meet Our Team</h2>
				<p>Our experts in the field of crypto currency can always help you with any of your questions!</p>
			</div>
		</div>
		<div className="team-members clearfix">
			<div className="member">
				<div className="member-text">
					<div className="member-img set-bg" data-setbg="img/member/1.jpg"></div>
					<h2>Tom Binegar</h2>
					<span>Business Development</span>
				</div>
				<div className="member-social">
					<a href="/"><i className="fa fa-facebook"></i></a>
					<a href="/"><i className="fa fa-linkedin"></i></a>
					<a href="/"><i className="fa fa-twitter"></i></a>
				</div>
				<div className="member-info">
					<div className="member-img mf set-bg" data-setbg="img/member/1.jpg"></div>
					<div className="member-meta">
						<h2>Tom Binegar</h2>
						<span>Marketing Director</span>
					</div>
					<p>Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.</p>
				</div>
			</div>
			<div className="member">
				<div className="member-text">
					<div className="member-img set-bg" data-setbg="img/member/2.jpg"></div>
					<h2>Jackson Nash</h2>
					<span>Business Development</span>
				</div>
				<div className="member-social">
					<a href="/"><i className="fa fa-facebook"></i></a>
					<a href="/"><i className="fa fa-linkedin"></i></a>
					<a href="/"><i className="fa fa-twitter"></i></a>
				</div>
				<div className="member-info">
					<div className="member-img mf set-bg" data-setbg="img/member/2.jpg"></div>
					<div className="member-meta">
						<h2>Jackson Nash</h2>
						<span>Marketing Director</span>
					</div>
					<p>Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.</p>
				</div>
			</div>
			<div className="member">
				<div className="member-text">
					<div className="member-img set-bg" data-setbg="img/member/3.jpg"></div>
					<h2>Tom Binegar</h2>
					<span>Business Development</span>
				</div>
				<div className="member-social">
					<a href="/"><i className="fa fa-facebook"></i></a>
					<a href="/"><i className="fa fa-linkedin"></i></a>
					<a href="/"><i className="fa fa-twitter"></i></a>
				</div>
				<div className="member-info">
					<div className="member-img mf set-bg" data-setbg="img/member/3.jpg"></div>
					<div className="member-meta">
						<h2>Aaron Ballance</h2>
						<span>Ceo Bitcoin</span>
					</div>
					<p>Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.</p>
				</div>
			</div>
			<div className="member">
				<div className="member-text">
					<div className="member-img set-bg" data-setbg="img/member/4.jpg"></div>
					<h2>Melissa Barth</h2>
					<span>Product Manager</span>
				</div>
				<div className="member-social">
					<a href="/"><i className="fa fa-facebook"></i></a>
					<a href="/"><i className="fa fa-linkedin"></i></a>
					<a href="/"><i className="fa fa-twitter"></i></a>
				</div>
				<div className="member-info">
					<div className="member-img mf set-bg" data-setbg="img/member/4.jpg"></div>
					<div className="member-meta">
						<h2>Melissa Barth</h2>
						<span>Product Manager</span>
					</div>
					<p>Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.</p>
				</div>
			</div>
			<div className="member">
				<div className="member-text">
					<div className="member-img set-bg" data-setbg="img/member/5.jpg"></div>
					<h2>Katy Abrams</h2>
					<span>Head of Design</span>
				</div>
				<div className="member-social">
					<a href="/"><i className="fa fa-facebook"></i></a>
					<a href="/"><i className="fa fa-linkedin"></i></a>
					<a href="/"><i className="fa fa-twitter"></i></a>
				</div>
				<div className="member-info">
					<div className="member-img mf set-bg" data-setbg="img/member/5.jpg"></div>
					<div className="member-meta">
						<h2>Katy Abrams</h2>
						<span>Head of Design</span>
					</div>
					<p>Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.</p>
				</div>
			</div>
		</div>
	</section>


	<section className="review-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 push-8">
					<img src="img/quote.png" alt="" className="quote mb-5" />
					<div className="review-text-slider owl-carousel">
						<div className="review-text">
							<p>"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”</p>
						</div>
						<div className="review-text">
							<p>"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”</p>
						</div>
						<div className="review-text">
							<p>"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 pr-0 pull-3">
					<div className="review-meta-slider owl-carousel pt-5">
						<div className="author-meta">
							<div className="author-avatar set-bg" data-setbg="img/review/1.jpg"></div>
							<div className="author-name">
								<h4>Aaron Ballance</h4>
								<p>Ceo Bitcoin</p>
							</div>
						</div>
						<div className="author-meta">
							<div className="author-avatar set-bg" data-setbg="img/review/2.jpg"></div>
							<div className="author-name">
								<h4>Jackson Nash</h4>
								<p>Head of Design</p>
							</div>
						</div>
						<div className="author-meta">
							<div className="author-avatar set-bg" data-setbg="img/review/3.jpg"></div>
							<div className="author-name">
								<h4>Katy Abrams</h4>
								<p>Product Manager</p>
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



	<section className="blog-section spad">
		<div className="container">
			<div className="section-title text-center">
				<h2>Latest News</h2>
				<p>Bitcoin is the simplest way to exchange money at very low cost.</p>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="blog-item">
						<figure className="blog-thumb">
							<img src="img/blog/1.jpg" alt="" />
						</figure>
						<div className="blog-text">
							<div className="post-date">03 jan 2018</div>
							<h4 className="blog-title"><a href="/">Coinbase to Reopen the GDAX Bitcoin Cash-Euro Order Book</a></h4>
							<div className="post-meta">
								<a href="/"><span>by</span> Admin</a>
								<a href="/"><i className="fa fa-heart-o"></i> 234 Likes</a>
								<a href="/"><i className="fa fa-comments-o"></i> 08 comments</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="blog-item">
						<figure className="blog-thumb">
							<img src="img/blog/2.jpg" alt="" />
						</figure>
						<div className="blog-text">
							<div className="post-date">28 dec 2018</div>
							<h4 className="blog-title"><a href="/">Blockchain Rolls Out Trading Feature for 22 States in the U.S</a></h4>
							<div className="post-meta">
								<a href="/"><span>by</span> Admin</a>
								<a href="/"><i className="fa fa-heart-o"></i> 234 Likes</a>
								<a href="/"><i className="fa fa-comments-o"></i> 08 comments</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="blog-item">
						<figure className="blog-thumb">
							<img src="img/blog/3.jpg" alt="" />
						</figure>
						<div className="blog-text">
							<div className="post-date">28 aug 2018</div>
							<h4 className="blog-title"><a href="/">This Week in Bitcoin: Up, Down and Sideways</a></h4>
							<div className="post-meta">
								<a href="/"><span>by</span> Admin</a>
								<a href="/"><i className="fa fa-heart-o"></i> 234 Likes</a>
								<a href="/"><i className="fa fa-comments-o"></i> 08 comments</a>
							</div>
						</div>
					</div>
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
					<span>
</span>
				</div>
				<div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
					<h5 className="widget-title">Resources</h5>
					<ul>
						<li><a href="/">How to Buy Coin</a></li>
						<li><a href="/">Coin Overview</a></li>
						<li><a href="/">Blog News</a></li>
						<li><a href="/">How to Sell Coin</a></li>
						<li><a href="/">Purchase Theme</a></li>
					</ul>
				</div>
				<div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
					<h5 className="widget-title">Quick Links</h5>
					<ul>
						<li><a href="/">Network Stats</a></li>
						<li><a href="/">Block Explorers</a></li>
						<li><a href="/">Governance</a></li>
						<li><a href="/">Exchange Markets</a></li>
						<li><a href="/">Get Theme</a></li>
					</ul>
				</div>
				<div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
					<h5 className="widget-title">Follow Us</h5>
					<div className="social">
						<a href="/" className="facebook"><i className="fa fa-facebook"></i></a>
						<a href="/" className="google"><i className="fa fa-google-plus"></i></a>
						<a href="/" className="instagram"><i className="fa fa-instagram"></i></a>
						<a href="/" className="twitter"><i className="fa fa-twitter"></i></a>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="row">
					<div className="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
						<a href="/"><img src="img/appstore.png" alt="" className="mr-2"/></a>
						<a href="/"><img src="img/playstore.png" alt=""/></a>
					</div>
					<div className="col-lg-8 text-center text-lg-right">
						<ul className="footer-nav">
							<li><a href="/">DPA</a></li>
							<li><a href="/">Terms of Use</a></li>
							<li><a href="/">Privacy Policy </a></li>
							<li><a href="/">support@company.com</a></li>
							<li><a href="/">(123) 456-7890</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
    </React.Fragment>
  );
};
