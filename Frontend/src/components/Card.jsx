import React from "react";
import "../assets/styles/Card.css";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-buttons">
        <button className="btn syllabus-btn">Syllabus</button>
        <button className="btn details-btn">View Details</button>
      </div>
    </div>
  );
};

export default Card;
