import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import "../css/skill.css";
import {
  springBoot,
  java,
  kotlin,
  javascript,
  fireBase,
  oracle,
  mysql,
  mongoDB,
  html,
  css,
  reactIcon,
  nodejs,
} from "../config/Svg";

const Skill = () => {
  return (
    <div id="skill" className="skill_div">
      <div className="skill_content1">
        <div className="content1">
          <div className="java">
            <img src={java} />
          </div>
          <div className="kotlin">
            <img src={kotlin} />
          </div>
          <div className="javascript">
            <img src={javascript} />
          </div>
        </div>
        <div className="content2">
          <div className="html">
            <img src={html} />
          </div>
          <div className="css">
            <img src={css} />
          </div>
        </div>
      </div>
      <div className="skill_content2">
        <div className="content1">
          <div className="boot">
            <img src={springBoot} />
          </div>
        </div>
        <div className="content2">
          <div className="react">
            <img src={reactIcon} />
          </div>
          <div className="nodejs">
            <img src={nodejs} />
          </div>
        </div>
      </div>
      <div className="skill_content3">
        <div className="content1">
          <div className="oracle">
            <img src={oracle} />
          </div>
          <div className="mysql">
            <img src={mysql} />
          </div>
        </div>
        <div className="content2">
          <div className="mongo">
            <img src={mongoDB} />
          </div>
          <div className="fireBase">
            <img src={fireBase} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
