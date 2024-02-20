import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import moon from "../utility/Darkmode.svg";
import sun from "../utility/Lightmode.svg";

interface ITBtn {
  label: string;
  isDark?: (value: boolean) => void;
  toToggle?: boolean;
}

const ToggleBtnComponent: React.FC<ITBtn> = ({ label, isDark, toToggle }) => {
  const [isBoolean, setIsBoolean] = useState(toToggle || false);

  const onClickHandler = () => {
    const newValue = !isBoolean;
    setIsBoolean(newValue);
    if (isDark) {
      isDark(newValue);
    }
  };

  return (
    <div className="TBtn-container" onClick={onClickHandler}>
      {isBoolean ? (
        <img className="theme-container" src={moon} alt="Dark mode" />
      ) : (
        <img className="theme-container" src={sun} alt="Light mode" />
      )}
    </div>
  );
};

export default ToggleBtnComponent;
