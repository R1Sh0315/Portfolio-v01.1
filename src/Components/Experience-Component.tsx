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

  const experience = (
    <div className="exp-body">
      <TimeLineComponent timelineType={"vertical"} cell2Type={"initial"} />
      <TimeLineComponent
        timelineType={"vertical"}
        cell2Type={"mid"}
        istoggle={true}
      />
      <TimeLineComponent timelineType={"vertical"} cell2Type={"end"} />
    </div>
  );

  const qualification = (
    <div className="exp-body">
      <TimeLineComponent timelineType={"vertical"} cell2Type={"initial"} />
      <TimeLineComponent timelineType={"vertical"} cell2Type={"end"} />
    </div>
  );

  return (
    <div className="exp-contianer">
      <LabelShadowComponent label={label} />
      <div className="exp-content">
        <ButtonGroupComponent bgList={bgList} outputValue={selectedValue} />
      </div>
      <div className="exp-body-container">
        {bgList[btnGrpValue] === "Qualification" ? qualification : experience}
      </div>
    </div>
  );
};

export default ExperienceComponent;
