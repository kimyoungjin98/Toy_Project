import React from "react";
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Nav from "./MainNav";
import MainFooter from "./MainFooter";
import AppContextProvider from "../context/AppContextProvider";

const Container = () => {
  return (
    <div>
      <AppContextProvider>
        <Nav />
        <Home />
        <About />
        <Project />
        <MainFooter />
      </AppContextProvider>
    </div>
  );
};

export default Container;
