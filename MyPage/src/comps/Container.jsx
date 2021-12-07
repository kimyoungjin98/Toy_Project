import React from "react";
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Nav from "./MainNav";
import Skill from "./Skill";
import AppContextProvider from "../context/AppContextProvider";
import Contact from "./Contact";
import ProContextProvider from "../context/ProContextProvider";

const Container = () => {
  return (
    <div>
      <AppContextProvider>
        <Nav />
        <Home />
        <About />
        <Skill />
        <ProContextProvider>
          <Project />
        </ProContextProvider>
        <Contact />
      </AppContextProvider>
    </div>
  );
};

export default Container;
