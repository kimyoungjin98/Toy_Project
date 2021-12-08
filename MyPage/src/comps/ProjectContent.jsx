import React, { useCallback, useEffect, useState } from "react";
import { useProContext } from "../context/ProjectContextProvider";

const ProjectContent = () => {
  const { make_project, content } = useProContext();

  useEffect(make_project, []);

  return (
    <div className="project">
      <div className="pro_img">
        <img src={content.image} />
      </div>
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
