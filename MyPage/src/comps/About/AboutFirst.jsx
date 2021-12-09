import React from "react";

const AboutProfile = () => {
  return (
    <div className="about_1">
      <div className="name">
        <div className="name_div">
          <i class="fas fa-user fa-2x"></i>
          <span>NAME</span>
        </div>
        <p>김영진</p>
      </div>
      <div className="age">
        <div className="age_div">
          <i class="fas fa-flag-checkered fa-2x"></i>
          <span>AGE</span>
        </div>
        <p>98.08.02</p>
      </div>
      <div className="addr">
        <div className="addr_div">
          <i class="fas fa-location-arrow fa-2x"></i>
          <span>ADDRESS</span>
        </div>
        <p>광주광역시 북구</p>
      </div>
    </div>
  );
};

export default AboutProfile;
