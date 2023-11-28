import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="backBtn-main">
      <Link to={destination} className="destination-link">
        <BsArrowLeft className="destination-icon" />
      </Link>
    </div>
  );
};

export default BackButton;
