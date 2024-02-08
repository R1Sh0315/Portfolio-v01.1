import React, { useState } from "react";
import ButtonComponent from "./Button-Component";

interface IBtnGroup {
  bgList: string[];
  outputValue?: (value: number) => void;
}

const ButtonGroupComponent: React.FC<IBtnGroup> = ({ bgList, outputValue }) => {
  const [selectedIdx, setIdx] = useState(0);

  const onClickHandler = (val: number) => {
    setIdx(val);
    if (outputValue) {
      outputValue(val);
    }
  };

  return (
    <div className="bg-container">
      {bgList.map((el, key) => (
        <>
          <ButtonComponent
            key={key}
            label={el}
            bgColor={selectedIdx === key ? "primary" : "ghostColor"}
            onClick={() => onClickHandler(key)}
          />
        </>
      ))}
    </div>
  );
};

export default ButtonGroupComponent;
