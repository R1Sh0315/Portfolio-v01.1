import React, { useEffect, useRef, useState } from "react";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import LabelShadowComponent from "./Label-Shadow";

interface IACard {
  isDark: boolean;
}

const AboutCardComponent: React.FC<IACard> = ({ isDark }) => {
  const [toDisplay, setDisplay] = useState("");
  const wordsRef = useRef(["Developer", "Creator"]); // Ref to maintain array reference

  useEffect(() => {
    function wordList(wordArr: string[]): void {
      let idx = 0;

      function displayWord(): void {
        setDisplay(wordArr[idx]);
        idx = (idx + 1) % wordArr.length;
        setTimeout(displayWord, 5000);
      }

      displayWord();
    }

    wordList(wordsRef.current); // Access words array from ref
  }, []);

  return (
    <div className="about-card-container">
      <div className="about-card-title">
        <LabelShadowComponent isDark={isDark} label={"About"} />
      </div>
      <div className={`about-me ${isDark ? "am-dark" : "am-light"}`}>
        I'm <span className="ac-name"> Rishikesh Bhalekar </span> a web &
        applications {toDisplay}.
      </div>
      <div className="about-card-detail-container">
        " I'm a professional web designer, My motive is to build the best web
        design with all my years of experience and efforts. "
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

      <div className="download-resume">Download CV</div>
    </div>
  );
};

export default AboutCardComponent;
