import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FunctionComponent = () => {
  return (
    <header className="header-section clearfix">
      <div className="container-fluid">
        <a href="/" className="site-logo">
          <img src="img/logo.png" alt="" />
        </a>
        <div className="responsive-bar">
          <i className="fa fa-bars" />
        </div>
        <a href="/" className="user">
          <i className="fa fa-user" />
        </a>
        <a href="/" className="site-btn">
          Sign Up Free
        </a>
        <nav className="main-menu">
          <ul className="menu-list">
            <li>
              <Link to="/post">Solution</Link>
            </li>
            <li>
              <Link to="/blog">News</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
