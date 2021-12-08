import React, { createContext, useContext, useState, useRef } from "react";
import malang from "../img/말랑.jpg";
import DF from "../img/던파.gif";
import todo from "../img/투두리스트.gif";
import { FormControlUnstyledContext } from "@mui/base";

const appContext = createContext();
export const useProContext = () => useContext(appContext);

const ProjectContextProvider = ({ children }) => {
  const [project, setProject] = useState([
    {
      name: "말랑",
      category: "팀 프로젝트",
      skill: "Java, Spring Framework, MySQL, MyBatis, javaScript, HTML, CSS",
      info: "수제공예, 간식 등의 용품을들 판매/구입 하는 쇼핑몰 웹 어플리케이션 입니다 Spring MVC 패턴으로 구현하였으며 MySQL과 MyBatis를 이용하여 DB CRUD를 구현하였습니다",
      about:
        "내비게이션, 공지사항(게시판 CRUD), 로그인, 회원가입, 회원관리, 상품정보 Insert(카테고리, 가격옵션 등)",
      image: malang,
    },
    {
      name: "네오플 API",
      category: "개인 프로젝트",
      skill: "Java, Spring Framework, javaScript, HTML, CSS, Neople OpenAPI",
      info:
        "네오플 던전앤파이터 API를 이용한 캐릭터 정보 검색 서비스 입니다, 검색창에 서버와 캐릭터 이름을 입력하고 전송하면 캐릭터 리스트가 나오고 " +
        "리스트중 하나를 클릭하면 Modal로 착용장비 정보가 나오는 서비스 입니다",
      about: "전체 프로젝트 기획, 구현, 디자인",
      image: DF,
    },
    {
      name: "Todo List",
      category: "개인 프로젝트",
      skill: "javascript, React.js",
      info: "포트폴리오로 가장 많이 나온다고 악명이 높은 투두리스트! 저도 구현해 봤습니다",
      about: "전체 프로젝트 기획, 구현, 디자인",
      image: todo,
    },
  ]);

  const [content, setContent] = useState({
    name: "",
    category: "",
    skill: "",
    info: "",
    about: "",
    image: "",
  });

  const make_project = () => {
    setContent(project[0]);
  };

  const prev = () => {
    const copyContent = { ...content };
    const length = project.length;
    setContent(project[length - 1]);

    const _project = project.filter((pro) => {
      return pro.name != copyContent.name;
    });
    console.log(_project);
    const _length = _project.length;
    _project[_length] = copyContent;
    setProject(_project);
  };

  const next = () => {
    const copyContent = { ...content };
    const _project = project.filter((pro) => {
      return pro.name != copyContent.name;
    });
    setContent(_project[0]);
    setProject([..._project, copyContent]);
  };

  const props = {
    content,
    setContent,
    project,
    setProject,
    make_project,
    next,
    prev,
  };

  return <appContext.Provider value={props}>{children}</appContext.Provider>;
};

export default ProjectContextProvider;
