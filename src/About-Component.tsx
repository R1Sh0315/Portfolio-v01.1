import React, { useEffect, useRef } from "react";

const AboutComponent: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="name">Rishikesh Bhalekar</div>
      <div className="designation">
        Senior Software Engineer | Frontend Developer at Prodapt
      </div>
      <div className="whoami">
        {/* I am a developer based in Pune, INDIA focused on creating interactive
        digital experiences on the web, working with industry leaders such as
        Prodapt. */}
        I build pixel-perfect, engaging, and accessible digital experiences.
      </div>
    </div>
  );
};

export default AboutComponent;
