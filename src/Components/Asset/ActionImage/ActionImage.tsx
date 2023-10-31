import React, { useState } from "react";
import tridot from "../../assets/tridot.png";
import "./ActionImage.css";

const ActionImage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  return (
    <div className="dropdown-container">
    <span>
      <img src={tridot} alt="" className="tridot-img" onClick={toggleDropdown} />
    </span>
    {isOpen && (
      <ul className="dropdown-list">
        <li className="dropdown-item">Action</li>
        <li className="dropdown-item">Another action</li>
        <li className="dropdown-item">Something else</li>
      </ul>
    )}
  </div>
  );
}

export default ActionImage;
