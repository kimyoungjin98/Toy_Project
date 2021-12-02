import React from "react";

const Hidden_nav = () => {
  const style = {
    display: "flex",
    alignItems: "center",
  };

  const style2 = {
    display: "flex",
    marginLeft: "auto",
  };

  const style3 = {
    margin: "5px",
  };

  const navClick = (e) => {
    if (e.target.tagName === "UL") {
      const h_nav = document.querySelector(".hidden_div");
      h_nav.classList.add("active");
      h_nav.style.visibility = "hidden";
      h_nav.style.opacity = "0";
    }
  };

  return (
    <div className="hidden_div">
      <ul className="hidden_nav" onClick={navClick}>
        <li className="nav_icon">
          <div style={style}>
            <i class="fas fa-user-circle fa-3x"></i>
            <p style={style3}>Guest 님 환영합니다 !!</p>
          </div>
        </li>
        <div style={style2}>
          <li className="nav_login" style={style3}>
            로그인
          </li>
          <li className="nav_join" style={style3}>
            회원가입
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Hidden_nav;
