import React, { useEffect, useRef } from "react";
import LabelShadowComponent from "./Label-Shadow";
interface ILabel {
  label: string;
}

const CardComponent: React.FC<ILabel> = ({ label }) => {
  return (
    <div className="card-container">
      <LabelShadowComponent label={label} />
    </div>
  );
};

export default CardComponent;
