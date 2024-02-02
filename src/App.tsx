import { useEffect, useRef, useState } from "react";
import "./styles.css";
import AboutComponent from "./About-Component";
import ButtonComponent from "./Button-Component";

export default function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="App">
      <AboutComponent />
      <ButtonComponent label={"About"} onClick={handleClick} />
    </div>
  );
}
