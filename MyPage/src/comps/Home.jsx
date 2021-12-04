import React, { useEffect } from "react";
import "../css/home.css";

const Home = () => {
  const home_load = () => {
    const section = document.querySelector(".home_section");
    section.style.display = "flex";
  };

  useEffect(home_load);

  return (
    <div className="home_div" id="home">
      <section className="home_section">
        <div>
          <p>반갑습니다 !</p>
          <p>웹 개발자 김영진 입니다</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
