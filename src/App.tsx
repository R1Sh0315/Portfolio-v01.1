import { useEffect, useRef, useState } from "react";
import "./styles.css";
import AboutComponent from "./Components/About-Component";
import ButtonComponent from "./Components/Button-Component";
import AboutCardComponent from "./Components/About-card-component";
import CardComponent from "./Components/Card-Components";
import SkillComponent from "./Components/Skill-Component";
// import backPic from "./utility/background.svg";
import ExperienceComponent from "./Components/Experience-Component";

export default function App() {
  const handleClick = (action: string): string => {
    console.log(action);
    return `${action}`;
  };
  const navList = ["About", "Skills", "Experience", "Project", "Resume"];

  return (
    <div className="App">
      {/* <img className="backgroung-img" src={backPic} alt="1" /> */}
      <AboutComponent />
      <div className="nav-bar">
        {navList.map((listName, key) => (
          <ButtonComponent
            key={key}
            label={listName}
            onClick={() => handleClick(listName)}
          />
        ))}
      </div>
      <div>
        <ExperienceComponent label="Experience & Qualification" />
      </div>
      <div>
        <SkillComponent label="Skills" />{" "}
      </div>
      <AboutCardComponent />
    </div>
  );
}
