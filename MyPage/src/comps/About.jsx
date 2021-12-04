import React from "react";
import "../css/about.css";
import me from "../img/벚꽃.jpg";

const About = () => {
  return (
    <div className="about_div" id="about">
      <img src={me} className="me" />
      <section>
        <div className="about_1">
          <div className="name">
            <span>NAME</span>
            <p>김영진</p>
          </div>
          <div className="age">
            <span>AGE</span>
            <p>98.08.02</p>
          </div>
          <div className="addr">
            <span>ADDRESS</span>
            <p>광주광역시 북구</p>
          </div>
        </div>
        <div className="about_2">
          <div className="tel">
            <span>TEL</span>
            <p>010-9456-0400</p>
          </div>
          <div className="email">
            <span>E-MAIL</span>
            <p>gyu250@naver.com</p>
          </div>
        </div>
        <div className="about_text">
          <p>→ 응용SW 엔지니어링 웹/앱 개발자 양성과정 (21.03.15 ~ 12.31 )</p>
          <p>→ Full Stack 지향 개발자 입니다</p>
          <p>→ 개발에 대한 끊임없는 학습을 추구합니다</p>
          <p>→ 다양한 프레임워크 사용을 지향합니다</p>
        </div>
      </section>
    </div>
  );
};

export default About;
