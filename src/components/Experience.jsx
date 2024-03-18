import React from "react";
import Project from "./Project";
import experience from "../db/experience";
import bearwriting from "../assets/bearwriting.gif";

const Experience = () => {
  const sectionStyle = {
    display: 'flex',          // Use flexbox for layout
    alignItems: 'flex-start', // Align items at the start of the cross axis
    justifyContent: 'space-between', // Space between the items
    flexWrap: 'wrap'          // Allow items to wrap if not enough space
  };

  const gifStyle = {
    flexShrink: 0,       // Prevent the gif from shrinking
    marginRight: '15px' // Push the gif to the right
  };

  return (
    <div style={sectionStyle}>
      <div className="projects">
        <h3>Experience</h3>
        <div className="project-container">
          {experience.map((experienceItem) => (
            <Project key={experienceItem.id} properties={experienceItem} />
          ))}
        </div>
      </div>
      <div style={gifStyle}>
        <img src={bearwriting} alt="Bear Writing" style={{ width: '100px', height: '100px', backgroundColor: '#f3f3f3ff', borderRadius: '5px'}} />
      </div>
    </div>
  );
};

export default Experience;

