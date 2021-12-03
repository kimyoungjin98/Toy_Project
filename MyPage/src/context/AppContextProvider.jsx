import React, { createContext, useContext, useState } from "react";

const appContext = createContext();
export const useAppContext = () => useContext(appContext);

const AppContextProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const window_scroll = () => {
    setScrollY(window.pageYOffset);
  };

  const navClick = (e) => {
    const tagName = e.target.tagName;

    if (tagName === "LI") {
      // css 적용하기
      e.target.setAttribute("id", "nav_active");

      // 여기서부터는 네비로 스크롤 움직이기
      const className = e.target.className;
      const comp = document.querySelector("#" + className);
      const compBound = comp.getBoundingClientRect();
      const compTop = compBound.top;
      window.scrollBy({
        top: compTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const props = {
    navClick,
    scrollY,
    setScrollY,
    window_scroll,
  };

  return <appContext.Provider value={props}>{children}</appContext.Provider>;
};

export default AppContextProvider;
