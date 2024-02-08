import React, { useState } from "react";

interface ITimeline {
  timelineType: string;
  cell2Type: string;
}

// enum Stage {
//     initial = 'INITIAL'
//     initial = 'INITIAL'
//     end = 'end'
// }

const TimeLineComponent: React.FC<ITimeline> = ({
  timelineType,
  cell2Type,
}) => {
  return (
    <div className={`time-line-contianer ${timelineType}-timeline`}>
      <div className="time-line-cell-1">
        <div className="time-line-cell-1-container">Abcdef</div>
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
      <div className="time-line-cell-3">Right</div>
    </div>
  );
};

export default TimeLineComponent;
