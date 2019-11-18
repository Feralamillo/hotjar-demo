/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface State {
  showMenu: boolean;
}

export class Header extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  toggleMenu = (event: React.MouseEvent) => {
    event.preventDefault();

    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  };

  render() {
    const { showMenu } = this.state;
    return (
      <header className="header-section clearfix">
        <div className="container-fluid">
          <a href="/" className="site-logo">
            <img src="img/logo.png" alt="" />
          </a>
          <div role="button" className="responsive-bar" onClick={this.toggleMenu}>
            <i className="fa fa-bars" />
          </div>
          <a href="/" className="user">
            <i className="fa fa-user" />
          </a>
          <a href="/" className="site-btn">
            Sign Up Free
          </a>
          <nav className={classNames('main-menu', { 'menu-inactive': !showMenu })}>
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
  }
}
