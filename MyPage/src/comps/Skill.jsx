import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import "../css/skill.css";
import spring from "../svg/spring-icon.svg";
import springBoot from "../svg/spring.svg";
import java from "../svg/java.svg";
import kotlin from "../svg/kotlin.svg";
import javascript from "../svg/javascript.svg";
import reactIcon from "../svg/react.svg";
import nodejs from "../svg/nodejs.svg";
import mysql from "../svg/mysql.svg";
import oracle from "../svg/oracle.svg";
import html from "../svg/html-5.svg";
import css from "../svg/css-3.svg";
import mongoDB from "../svg/mongodb.svg";

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
        </div>
      </div>
    </div>
  );
};

export default Skill;
