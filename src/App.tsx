import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { Contact } from "./pages/contact";
import { Post } from "./pages/post";

import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/owl.carousel.css";
import "./css/style.css";
import "./css/themify-icons.css";

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/about" component={About} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/post" component={Post} />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
};

export default App;
