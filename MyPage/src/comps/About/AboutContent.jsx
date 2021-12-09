import React from "react";
import AboutFirst from "./AboutFirst";
import AboutSecond from "./AboutSecond";

const AboutContent = () => {
  return (
    <section>
      <AboutFirst />
      <AboutSecond />
      <div className="about_text">
        <p>→ 응용SW 엔지니어링 웹/앱 개발자 양성과정 (21.03.15 ~ 12.31 )</p>
        <p>→ Front-End 지향 개발자 입니다</p>
        <p>→ 개발에 대한 끊임없는 학습을 추구합니다</p>
        <p>→ 다양한 프레임워크/라이브러리 사용을 지향합니다</p>
      </div>
    </section>
  );
};

export default AboutContent;
