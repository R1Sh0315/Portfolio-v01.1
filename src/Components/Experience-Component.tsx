import React, { useState } from "react";
import LabelShadowComponent from "./Label-Shadow";
import ButtonGroupComponent from "./Buttongroup-Component";
import TimeLineComponent from "./Timeline-component";

interface IExp {
  label: string;
}

const bgList = ["Experience", "Qualification"];

const ExperienceComponent: React.FC<IExp> = ({ label }) => {
  const [btnGrpValue, setBtnGrpValue] = useState<number>(0);

  const selectedValue = (value: number) => {
    setBtnGrpValue(value);
  };

  const experience = <div className="exp-body">Hello</div>;

  return (
    <div className="exp-contianer">
      <LabelShadowComponent label={label} />
      <div className="exp-content">
        <ButtonGroupComponent bgList={bgList} outputValue={selectedValue} />
      </div>
      <div className="exp-body-container">
        {experience}
        <TimeLineComponent timelineType={"horizontral"} cell2Type={"initial"} />
      </div>
    </div>
  );
};

export default ExperienceComponent;
