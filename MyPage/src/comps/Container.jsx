import React from "react";
import {
  Home,
  Project,
  About,
  Nav,
  Skill,
  AppContextProvider,
  ProjectContextProvider,
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
        <ProjectContextProvider>
          <Project />
        </ProjectContextProvider>
        <Contact />
      </AppContextProvider>
    </div>
  );
};

export default Container;
