import { useEffect, useRef, useState } from "react";
import "./styles.css";
import AboutComponent from "./Components/About-Component";
import ButtonComponent from "./Components/Button-Component";
import AboutCardComponent from "./Components/About-card-component";
import CardComponent from "./Components/Card-Components";
import SkillComponent from "./Components/Skill-Component";
// import backPic from "./utility/background.svg";
import ExperienceComponent from "./Components/Experience-Component";
import AnimatedHeader from "./Components/Node-Animation-Component";
import ToggleBtnComponent from "./Components/Toggle-btn";

export default function App() {
  const handleClick = (action: string): string => {
    console.log(action);
    return `${action}`;
  };
  const navList = ["About", "Skills", "Experience", "Project", "Resume"];
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${isDarkMode?'dark-mode':'light-mode'}`}>
      <ToggleBtnComponent
        label="Dark Mode"
        toToggle={isDarkMode}
        isDark={setDarkMode}
      />
      <AboutComponent />

      <AboutCardComponent isDark={isDarkMode} />
      <div>
        <SkillComponent isDark={isDarkMode} label="Skills" />{" "}
      </div>
      <div>
        <ExperienceComponent isDark={isDarkMode} label="Experience & Qualification" />
      </div>
    </div>
  );
}
