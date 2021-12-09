import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useAppContext } from "../context/AppContextProvider";
import "../css/nav.css";

const MainNav = () => {
  const { navClick, window_scroll } = useAppContext();

  // 스크롤 이벤트 설정
  // 성능 향상을 위한 코드
  useEffect(() => {
    window.addEventListener("scroll", window_scroll);
    return () => {
      window.removeEventListener("scroll", window_scroll);
    };
  });

  return (
    <nav>
      <ul onClick={navClick}>
        <li className="home" id="li_hover">
          HOME
        </li>
        <li className="about">ABOUT</li>
        <li className="skill">SKILL</li>
        <li className="project">PROJECT</li>
        <li className="contact">CONTACT</li>
      </ul>
    </nav>
  );
};

export default MainNav;
