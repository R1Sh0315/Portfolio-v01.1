import React, { useEffect, useRef, useState } from "react";
import LabelShadowComponent from "./Label-Shadow";
import ButtonGroupComponent from "./Buttongroup-Component";

interface IExp {
  label: string;
}

const bgList = ["Experience", "Qualification"];
// const [btnGrpValue, setBtnGrpValue] = useState<string | number | undefined>();

// const selectedValue = (value: string | number) => {
//   setBtnGrpValue(value);
// };

const ExperienceComponent: React.FC<IExp> = ({ label }) => {
  return (
    <div className="exp-contianer">
      <LabelShadowComponent label={label} />
      <div className="exp-content">
        <ButtonGroupComponent bgList={bgList} />
      </div>
      {/* ------- asedad {btnGrpValue} */}
    </div>
  );
};

export default ExperienceComponent;
