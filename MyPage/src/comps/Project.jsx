import React, { useEffect } from "react";
import "../css/project.css";
import malang from "../img/말랑.jpg";

const Project = () => {
  return (
    <div className="pro_div" id="project">
      <div className="icon_left">
        <i class="fas fa-chevron-left fa-4x"></i>
      </div>
      <section className="pro_section">
        <div className="project">
          <div className="pro_img">
            <img src={malang} />
          </div>
          <div className="pro_content">
            <p>이름 : 말랑</p>
            <p>분류 : 팀 프로젝트</p>
            <p>
              기술 : Java, Spring Framework, MySQL, MyBatis, javaScript, HTML,
              CSS
            </p>
            <p>
              소개 : 수제공예, 간식 등의 용품을들 판매/구입 하는 쇼핑몰 웹
              어플리케이션 입니다
            </p>
            <p>
              &emsp;&emsp;&nbsp; Spring MVC패턴으로 구현하였으며 MySQL과
              MyBatis를 이용하여 DB CRUD를 구현하였습니다
            </p>
            <p>
              구현기능 : 내비게이션, 공지사항(게시판 CRUD), 로그인, 회원가입,
              회원관리, 상품정보 Insert(카테고리, 가격옵션 등)
            </p>
          </div>
        </div>

        <div className="project">
          <div className="pro_img">
            <img src={malang} />
          </div>
          <div className="pro_content">
            <p>이름 : 말랑2</p>
            <p>분류 : 팀 프로젝트</p>
            <p>
              기술 : Java, Spring Framework, MySQL, MyBatis, javaScript, HTML,
              CSS
            </p>
            <p>
              소개 : 수제공예, 간식 등의 용품을들 판매/구입 하는 쇼핑몰 웹
              어플리케이션 입니다
            </p>
            <p>
              &emsp;&emsp;&nbsp; Spring MVC패턴으로 구현하였으며 MySQL과
              MyBatis를 이용하여 DB CRUD를 구현하였습니다
            </p>
            <p>
              구현기능 : 내비게이션, 공지사항(게시판 CRUD), 로그인, 회원가입,
              회원관리, 상품정보 Insert(카테고리, 가격옵션 등)
            </p>
          </div>
        </div>

        <div className="project">
          <div className="pro_img">
            <img src={malang} />
          </div>
          <div className="pro_content">
            <p>이름 : 말랑3</p>
            <p>분류 : 팀 프로젝트</p>
            <p>
              기술 : Java, Spring Framework, MySQL, MyBatis, javaScript, HTML,
              CSS
            </p>
            <p>
              소개 : 수제공예, 간식 등의 용품을들 판매/구입 하는 쇼핑몰 웹
              어플리케이션 입니다
            </p>
            <p>
              &emsp;&emsp;&nbsp; Spring MVC패턴으로 구현하였으며 MySQL과
              MyBatis를 이용하여 DB CRUD를 구현하였습니다
            </p>
            <p>
              구현기능 : 내비게이션, 공지사항(게시판 CRUD), 로그인, 회원가입,
              회원관리, 상품정보 Insert(카테고리, 가격옵션 등)
            </p>
          </div>
        </div>
      </section>
      <div className="icon_right">
        <i class="fas fa-chevron-right fa-4x"></i>
      </div>
    </div>
  );
};

export default Project;
