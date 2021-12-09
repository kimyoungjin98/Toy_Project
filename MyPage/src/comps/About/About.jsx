import React from "react";
import "../../css/about.css";
import me from "../../img/벚꽃.jpg";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section className="about_div" id="about">
      <img src={me} className="me" />
      <AboutContent />
    </section>
  );
};

export default About;
