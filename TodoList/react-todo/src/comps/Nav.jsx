import React from "react";

const Nav = () => {
  const navClick = () => {
    console.log("내비 클릭");
  };

  return (
    <ul>
      <li>
        <p>
          <i class="fas fa-bars"></i>
        </p>
      </li>
    </ul>
  );
};

export default Nav;
