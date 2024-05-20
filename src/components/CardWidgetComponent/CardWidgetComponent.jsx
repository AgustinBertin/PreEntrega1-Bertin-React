import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CardWidgetComponent = () => {
  const customStyles = {
    color: "#213547",
    fontSize: "1.5rem",
    marginRight: "0.5rem",
  };
  return (
    <div>
      <span style={customStyles}>3</span>
      <FontAwesomeIcon icon={faCartShopping} style={customStyles} />
    </div>
  );
};

export default CardWidgetComponent;
