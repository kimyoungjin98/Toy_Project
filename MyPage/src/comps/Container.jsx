import React from "react";
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Nav from "./MainNav";

const Container = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Project />
    </div>
  );
};

export default Container;
