import React from "react";

const Skillbar = ({ skill, level }) => {
  return (
    <div className="skill">
      <p>
        {skill} <span>{level}%</span>
      </p>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default Skillbar;
