import React, { useState } from "react";
import LabelShadowComponent from "./Label-Shadow";
import ButtonGroupComponent from "./Buttongroup-Component";

interface IExp {
  label: string;
}

const bgList = ["Experience", "Qualification"];

const ExperienceComponent: React.FC<IExp> = ({ label }) => {
  const [btnGrpValue, setBtnGrpValue] = useState<number>(0);

  const selectedValue = (value: number) => {
    setBtnGrpValue(value);
  };

  return (
    <div className="exp-contianer">
      <LabelShadowComponent label={label} />
      <div className="exp-content">
        <ButtonGroupComponent bgList={bgList} outputValue={selectedValue} />
      </div>
      <div>{bgList[btnGrpValue]}</div>
    </div>
  );
};

export default ExperienceComponent;
