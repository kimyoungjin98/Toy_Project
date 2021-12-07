import React, { createContext, useContext } from "react";

const proContext = createContext();
export const useProContext = () => {
  return useContext(proContext);
};

const ProContextProvider = ({ children }) => {
  const section = document.querySelector(".pro_section");
  const project = document.querySelectorAll(".project");

  const makeClone = () => {
    let clone_first = project[0].cloneNode(true);
    let clone_last = section.lastElementChild.cloneNode(true);
    section.appendChild(clone_first);
    section.appendChild(clone_last, section.firstElementChild);
  };

  const init = () => {
    section.style.width = (width + margin) * (slideCount + 2) + "vh";
    section.style.left = -(width + margin) + "vh";
  };

  let index = 0;
  let slideCount = project.length;
  let width = 115;
  let margin = 15;

  const next = () => {
    if (index <= slideCount - 1) {
      section.style.left = -(index + 2) * (width + margin) + "vh";
      section.style.transition = `${0.5}s ease-out`;
    }
    if (index === slideCount - 1) {
      setTimeout(() => {
        section.style.left = -(width + margin) + "vh";
        section.style.transition = `${0}s ease-out`;
      }, 500);
      index = -1;
    }
    index += 1;
  };

  const prev = () => {
    if (index >= 0) {
      section.style.left = -index * (width + margin) + "vh";
      section.style.transition = `${0.5}s ease-out`;
    }
    if (index === 0) {
      setTimeout(function () {
        section.style.left = -slideCount * (width + margin) + "vh";
        section.style.transition = `${0}s ease-out`;
      }, 500);
      index = slideCount;
    }
    index -= 1;
  };

  const props = {
    next,
    prev,
    makeClone,
    init,
  };

  return <proContext.Provider value={props}>{children}</proContext.Provider>;
};

export default ProContextProvider;
