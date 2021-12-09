import React from "react";
import { github, facebook } from "../../config/Svg";

const ContactContent = () => {
  return (
    <div className="contact_content">
      <div className="contact_logo">
        <p className="contact_logo_text">CONTACT</p>
      </div>
      <div className="contact_title">
        <div className="git">
          <a href="https://github.com/kimyoungjin98">
            <img src={github} />
          </a>
        </div>
        <div className="facebook">
          <a href="https://www.facebook.com/gyu250/">
            <img src="https://img.icons8.com/ios-filled/500/000000/facebook--v1.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
