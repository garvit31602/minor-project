import React, { useState } from "react";
import img from "./images/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";

export default function Card(prop) {
  // State to manage the visibility of the description
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  // Function to toggle the visibility of the description
  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  if(isDescriptionVisible)
    var button_text="Show less"
  else
    var button_text="Show more"

  return (
    <div className="card">
      <img src={img} className="card-img" />
      <p className="card-name">{prop.name}</p>
      <p className="card-dept">{prop.dept}</p>
      <button onClick={toggleDescription}>{button_text}</button>
      <div
        className="card-description"
        style={{ display: isDescriptionVisible ? 'block' : 'none' }}
      >
      <h1>Education</h1>
        <div>{prop.EDUCATION}</div>
      <h1>Work Experience</h1>
      <div>{prop.WORK_EXPERIENCE}</div>
      <h1>Academic achievements</h1>
      <div>{prop.ACADEMIC_ACHIEVEMENTS}</div>
      <h1>Awards/Honors</h1>
      <div>{prop.AWARDS}</div>
      </div>
    </div>
  );
}
