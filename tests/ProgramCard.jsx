import React from 'react';
import './ProgramsPage.css';
// import './ProgramCard.css';

const ProgramCard = ({ program }) => {
  return (
    <div className="program-card">
      <div className="program-image">
        <img src={program.image} alt={program.title} />
        <div className="program-category">
          <span>{program.category}</span>
        </div>
      </div>
      <div className="program-content">
        <div className="program-icon">
          <i className={`fas ${program.icon}`}></i>
        </div>
        <h3 className="program-title">{program.title}</h3>
        <p className="program-description">{program.description}</p>
        <div className="program-actions">
          <button className="learn-more">Learn More</button>
          <button className="support">Support</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;