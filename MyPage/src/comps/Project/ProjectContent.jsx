import React, { useEffect } from "react";
import ProImage from "./ProImage";
import { useProContext } from "../../context/ProjectContextProvider";

const ProjectContent = () => {
  const { make_project, content } = useProContext();

  useEffect(make_project);

  return (
    // key 값을 추가하면 리액트는 텍스트가 새로 렌더링 될 때마다
    // 다른 컴포넌트가 렌더링 되었다 생각하고 리렌더링을 한다
    // => 텍스트가 바뀔 때마다 애니메이션이 적용됨
    <div className="project_container" key={content.name}>
      <ProImage image={content.image} />
      <div className="pro_content">
        <p>이름 : {content.name}</p>
        <p>분류 : {content.category}</p>
        <p>기술 : {content.skill}</p>
        <p>소개 : {content.info}</p>
        <p>구현기능 : {content.about}</p>
      </div>
    </div>
  );
};

export default ProjectContent;
