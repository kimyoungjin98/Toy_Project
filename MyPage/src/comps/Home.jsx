import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContextProvider";
import "../css/home.css";

const Home = () => {
  const home_load = () => {
    const pTag = document.querySelectorAll(".p1, .p2");
    const copy_p1 = document.querySelector(".copy_p1");
    const copy_p2 = document.querySelector(".copy_p2");

    let index1 = 0;
    let index2 = 0;
    const textArray = [];

    for (let i = 0; i < pTag.length; i++) {
      const text = pTag[i].textContent.split("");
      textArray.push(text);
    }

    const t1_length = textArray[0].length;
    const typing1 = () => {
      if (index1 < t1_length) {
        copy_p1.append(textArray[0][index1]);
        index1++;
      }
    };

    const t2_length = textArray[1].length;
    const typing2 = () => {
      if (index2 < t2_length) {
        copy_p2.append(textArray[1][index2]);
        index2++;
      }
    };

    setInterval(typing1, 100);
    setInterval(typing2, 100);
  };

  useEffect(home_load);

  return (
    <div className="home_div" id="home">
      <section className="home_section">
        <div>
          <p className="p1">Welcome !</p>
          <p className="p2">Web Developer Youngjin Kim's page</p>
          <p className="copy_p1"></p>
          <p className="copy_p2"></p>
        </div>
      </section>
    </div>
  );
};

export default Home;
