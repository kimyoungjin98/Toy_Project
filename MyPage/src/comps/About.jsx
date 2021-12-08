import React from "react";
import "../css/about.css";
import me from "../img/벚꽃.jpg";

const About = () => {
  return (
    <section className="about_div" id="about">
      <img src={me} className="me" />
      <section>
        <div className="about_1">
          <div className="name">
            <div className="name_div">
              <i class="fas fa-user fa-2x"></i>
              <span>NAME</span>
            </div>
            <p>김영진</p>
          </div>
          <div className="age">
            <div className="age_div">
              <i class="fas fa-flag-checkered fa-2x"></i>
              <span>AGE</span>
            </div>
            <p>98.08.02</p>
          </div>
          <div className="addr">
            <div className="addr_div">
              <i class="fas fa-location-arrow fa-2x"></i>
              <span>ADDRESS</span>
            </div>
            <p>광주광역시 북구</p>
          </div>
        </div>
        <div className="about_2">
          <div className="tel">
            <div className="tel_div">
              <i class="fas fa-mobile-alt fa-2x"></i>
              <span>TEL</span>
            </div>
            <p>010-9456-0400</p>
          </div>
          <div className="email">
            <div className="email_div">
              <i class="far fa-envelope fa-2x"></i>
              <span>E-MAIL</span>
            </div>
            <p>gyu250@naver.com</p>
          </div>
        </div>
        <div className="about_text">
          <p>→ 응용SW 엔지니어링 웹/앱 개발자 양성과정 (21.03.15 ~ 12.31 )</p>
          <p>→ Front-End 지향 개발자 입니다</p>
          <p>→ 개발에 대한 끊임없는 학습을 추구합니다</p>
          <p>→ 다양한 프레임워크/라이브러리 사용을 지향합니다</p>
        </div>
      </section>
    </section>
  );
};

export default About;
