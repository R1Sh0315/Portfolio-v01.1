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
      <div className="time-line-cell-1">left</div>
      <div className={`time-line-cell-2 ${cell2Type}-stage`}>{cell2Type}</div>
      <div className="time-line-cell-3">Right</div>
    </div>
  );
};

export default TimeLineComponent;
