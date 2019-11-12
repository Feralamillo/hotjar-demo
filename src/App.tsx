import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { Contact } from "./pages/contact";
import { Post } from "./pages/post";

import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/post" component={Post} />
      </BrowserRouter>
    </div>
  );
};

export default App;
