import React from "react";
import {
  Home,
  Project,
  About,
  Nav,
  Skill,
  AppContextProvider,
  Contact,
} from "../config/index";

const Container = () => {
  return (
    <div>
      <AppContextProvider>
        <Nav />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </AppContextProvider>
    </div>
  );
};

export default Container;
