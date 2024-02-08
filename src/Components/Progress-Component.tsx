import React from "react";

interface IProgressBar {
  percentage: string;
  pbLabel: string;
}

const ProgressBarComponent: React.FC<IProgressBar> = ({
  percentage,
  pbLabel,
}) => {
  const containerStyles = {
    height: "6px",
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    margin: "20px 0",
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    boxShadow: "0 8px 32px 0 rgba(57, 167, 255, 0.4)",
    borderRadius: "inherit",
    textAlign: "right" as const,
    transition: "width 1s ease-in-out",
    // border: "1px solid white",
  };
  const labelStyles = {
    padding: "5px",
    color: "#ff004d",
    fontWeight: "bold",
    position: "absolute" as const,
    margin: "-29px 0px 0px -55px",
  };

  return (
    <div className="pb-contianer">
      <div className="pb-label">{pbLabel}</div>
      <div style={containerStyles}>
        <div className="pb-fill-bg" style={fillerStyles}>
          <span style={labelStyles}>{`${percentage}%`}</span>
          <span className="pb-dot"> </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
