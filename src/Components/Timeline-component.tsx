import React, { useState } from "react";

interface IData {
  [key: string]: any;
}

interface ITimeline {
  timelineType: string;
  cell2Type?: string;
  istoggle?: boolean;
  data: IData;
}

// enum Stage {
//     initial = 'INITIAL'
//     initial = 'INITIAL'
//     end = 'end'
// }

const TimeLineComponent: React.FC<ITimeline> = ({
  timelineType,
  cell2Type,
  istoggle,
  data,
}) => {
  let cell2TypeAlt = "initial";

  const cellFormating = (val:number)=>{
    console.log(val, val === data.length - 1 ? "end" : val === 0 ? "initial" : "mid")
    return (val === data.length - 1 && val !== 0)  ? "end" : val === 0 ? "initial" : "mid";
  }

  const tlElement = data.map((li: any, key: number) => (
    <div
      key={key}
      className={`time-line-contianer ${timelineType}-timeline${
        istoggle ? "-reverse" : ""
      }`}
    >
      <div className={`time-line-cell-1${istoggle ? "-reverse" : ""}`}>
        <div className="time-line-cell-1-container">
          <div className="tl-icon-contianer">
            <img className="tl-icon" src={li?.icon} alt="test" />
          </div>
          <div className="tl-com-ins-name">{li?.companyName}</div>
          <div className="tl-year-container">{li?.yearOfWork}</div>
        </div>
      </div>
      <div className={`time-line-cell-2`}>
        <div className={`${cellFormating(key)}-stage ${cellFormating(key)}`}>
          <div
            className={`${cellFormating(key)}-stage-${
              cellFormating(key) == "initial"
                ? "no-dash"
                : cellFormating(key) == "mid"
                ? "dash"
                : "dash"
            }`}
          ></div>
          <div className={`${cellFormating(key)}-stage-core`}>
            <div className="core"></div>
          </div>
          <div
            className={`${cellFormating(key)}-stage-${
              cellFormating(key) == "initial"
                ? "dash"
                : cellFormating(key) == "mid"
                ? "dash"
                : "no-dash"
            }`}
          ></div>
        </div>
      </div>
      <div className={`time-line-cell-3${istoggle ? "-reverse" : ""}`}>
        <div className="time-line-cell-3-container">
          <div className="tl-qul-des">
            {li?.designation || li?.qualificationIn}
          </div>
          <div className="tl-work-dis">{li?.workDiscription}</div>
        </div>
      </div>
    </div>
  ));

  return <>{tlElement}</>;
};

export default TimeLineComponent;
