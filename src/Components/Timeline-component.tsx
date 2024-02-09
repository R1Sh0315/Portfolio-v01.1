import React, { useState } from "react";

interface IData {
  [key: string]: any;
}

interface ITimeline {
  timelineType: string;
  cell2Type: string;
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
  // console.log("data -->", data[0].icon);

  return (
    <div
      className={`time-line-contianer ${timelineType}-timeline${istoggle ? "-reverse" : ""}`}
    >
      <div className={`time-line-cell-1${istoggle ? "-reverse" : ""}`}>
        <div className="time-line-cell-1-container">
          {/* <img src={data[0].icon} alt="test" /> */}
        </div>
      </div>
      <div className={`time-line-cell-2`}>
        <div className={`${cell2Type}-stage`}>
          <div
            className={`${cell2Type}-stage-${cell2Type == "initial" ? "no-dash" : cell2Type == "mid" ? "dash" : "dash"}`}
          ></div>
          <div className={`${cell2Type}-stage-core`}>
            <div className="core"></div>
          </div>
          <div
            className={`${cell2Type}-stage-${cell2Type == "initial" ? "dash" : cell2Type == "mid" ? "dash" : "no-dash"}`}
          ></div>
        </div>
      </div>
      <div className={`time-line-cell-3${istoggle ? "-reverse" : ""}`}>
        <div className="time-line-cell-3-container">Abcdef</div>
      </div>
    </div>
  );
};

export default TimeLineComponent;
