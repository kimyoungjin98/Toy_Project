import React from "react";

const Nav = () => {
  const navClick = () => {
    const h_nav = document.querySelector(".hidden_div");
    h_nav.style.opacity = "1";
    h_nav.style.visibility = "visible";
  };

  return (
    <ul className="main_nav">
      <li onClick={navClick}>
        <p>
          <i class="fas fa-bars"></i>
        </p>
      </li>
    </ul>
  );
};

export default Nav;
