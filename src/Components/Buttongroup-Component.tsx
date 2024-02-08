import React, { useEffect, useRef, useState } from "react";
import ButtonComponent from "./Button-Component";

interface IBtnGroup {
  bgList: string[];
  outputValue?: (value: string | number) => void;
}

const ButtonGroupComponent: React.FC<IBtnGroup> = ({ bgList, outputValue }) => {
  const [selectedIdx, setIdx] = useState(0);

  const onClickHandler = (val: number) => {
    console.log(val);
    setIdx(val);
    if (outputValue) {
      outputValue(selectedIdx);
    }
    return val;
  };

  return (
    <div className="bg-container">
      {bgList.map((el, key) => (
        <>
          {selectedIdx == key ? (
            <ButtonComponent
              key={key}
              label={el}
              bgColor="primary"
              onClick={() => onClickHandler(key)}
            />
          ) : (
            <ButtonComponent
              key={key}
              label={el}
              bgColor="ghostColor"
              onClick={() => onClickHandler(key)}
            />
          )}
        </>
      ))}
      <div></div>
    </div>
  );
};

export default ButtonGroupComponent;
