import React, { useEffect, useRef } from "react";

interface ILabel {
  label: string;
}

const LabelShadowComponent: React.FC<ILabel> = ({ label }) => {
  return (
    <div className="ls-container">
      <div className="title-background">{label}</div>
      <div className="title-label">{label}</div>
    </div>
  );
};

export default LabelShadowComponent;
