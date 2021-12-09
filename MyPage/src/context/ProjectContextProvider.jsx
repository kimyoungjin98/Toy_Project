import React, { createContext, useContext, useState, useRef } from "react";
import malang from "../img/말랑.gif";
import DF from "../img/던파.gif";
import todo from "../img/투두리스트.gif";
import { useAppContext } from "./AppContextProvider";

const appContext = createContext();
export const useProContext = () => useContext(appContext);

const ProjectContextProvider = ({ children }) => {
  const { loading, setLoading } = useAppContext();

  // 리스트를 저장할 state 선언
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

  // 컴포넌트에서 사용할 값을 저장할 state 선언
  const [content, setContent] = useState({
    name: "",
    category: "",
    skill: "",
    info: "",
    about: "",
    image: "",
  });

  // 애니메이션 적용 위해 컴포넌트를 가져옴
  const project_div = document.querySelector(".project_container");

  const make_project = () => {
    setContent(project[0]);
  };

  const prev = () => {
    const length = project.length;

    // 배열의 마지막 값 가져오기
    const lastContent = project[length - 1];

    // 배열의 마지막 값 삭제한 리스트 저장
    const _project = project.filter((pro) => {
      return pro.name != lastContent.name;
    });

    // 저장한 리스트 앞에 추가하기
    _project.unshift(lastContent);
    setProject(_project);
  };

  const next = () => {
    project_div.classList.add("pro_active");
    const copyContent = { ...content };
    const _project = project.filter((pro) => {
      return pro.name != copyContent.name;
    });
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
    loading,
    setLoading,
  };

  return <appContext.Provider value={props}>{children}</appContext.Provider>;
};

export default ProjectContextProvider;
