import React, { useEffect, useRef } from "react";

import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import LabelShadowComponent from "./Label-Shadow";

const AboutCardComponent: React.FC = () => {
  return (
    <div className="about-card-container">
      <div className="about-card-title">
        <LabelShadowComponent label={"About"} />
      </div>
      <div className="about-me">
        I'm <span className="ac-name"> Rishikesh Bhalekar </span> an web &
        applications
      </div>
      <div className="about-card-detail-contianer">
        " I'm a professional web designer, My motive is to build a best web
        design with my all years of experience and efforts. "
      </div>

      <div className="about-in-detail">
        <div className="row-1">
          <div className="person-degree">
            <SchoolIcon className="acc-icon" />
            <strong> Degree :</strong> B.E Mechanical
          </div>
          <div className="person-mail">
            <MailOutlineIcon className="acc-icon" />
            <strong>Email :</strong>rishikeshbhalekar6@gmail.com
          </div>
        </div>
        <div className="row-2">
          <div className="person-age">
            <PersonOutlineIcon className="acc-icon" />
            <strong> Age : </strong> 26
          </div>
          <div className="person-location">
            <LocationSearchingIcon className="acc-icon" />
            <strong> Location :</strong> Pune, India. 410506
          </div>
        </div>
      </div>

      {/* downlaid resume btn  */}
      <div className="download-resume">Download CV</div>
    </div>
  );
};

export default AboutCardComponent;
