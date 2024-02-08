import React, { useEffect, useRef } from "react";
import CardComponent from "./Card-Components";
import LabelShadowComponent from "./Label-Shadow";
import ProgressBarComponent from "./Progress-Component";

interface ILabel {
  label: string;
}

const SkillComponent: React.FC<ILabel> = ({ label }) => {
  const calculateYearsAndMonths = () => {
    const currentDate: Date = new Date();

    // Set the start date to April 2021
    const startDate: Date = new Date("2021-04-01");

    // Calculate the difference in milliseconds
    const differenceMs: number = currentDate.getTime() - startDate.getTime();

    // Convert the difference to years and months
    const years: number = Math.floor(
      differenceMs / (1000 * 60 * 60 * 24 * 365.25),
    );
    const months: number = Math.floor(
      (differenceMs % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.44),
    );

    return { years, months };
  };
  const { years, months } = calculateYearsAndMonths();

  return (
    <div className="skill-container">
      <LabelShadowComponent label={label} />
      <div className="skill-discribtion">
        <div className="skill-disc-panel">
          <div className="skill-summary">
            I'm experienced frontend developer proficient with {years}.
            {months + " "}
            years of experience. Skilled in building responsive and dynamic web
            applications, implementing complex UI features, and optimizing
            performance. Strong understanding of modern web development
            practices, including component-based architecture, state management,
            and RESTful APIs. Passionate about delivering high-quality user
            experiences and staying updated with the latest technologies.
          </div>
          <div className="skill-score">
            <ProgressBarComponent percentage="80" pbLabel="HTML" />
            <ProgressBarComponent percentage="75" pbLabel="Javascript" />
            <ProgressBarComponent percentage="75" pbLabel="Css" />
          </div>
        </div>
        <div className="experience-container">
          <div>
            <span className="yexp">{years}</span>
            <span className="dot">.</span>
            <span className="mexp">{months + " "}</span>
          </div>
          <div>
            <span className="skill-ye">Years experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
