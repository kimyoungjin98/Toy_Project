import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContextProvider";
import "../css/nav.css";

const MainNav = () => {
  const { navClick, scrollY, window_scroll } = useAppContext();

  // 콘솔 로그용 코드
  // useEffect(() => {
  //   console.log(scrollY);
  // }, [scrollY]);

  // 스크롤 이벤트 설정
  window.addEventListener("scroll", window_scroll);

  return (
    <nav>
      <p className="logo">영진's 포트폴리오</p>
      <ul onClick={navClick}>
        <li className="home" id="li_hover">
          HOME
        </li>
        <li className="about">ABOUT</li>
        <li className="skill">SKILLS</li>
        <li className="project">PROJECT</li>
        <li className="contact">CONTACT</li>
      </ul>
    </nav>
  );
};

export default MainNav;
