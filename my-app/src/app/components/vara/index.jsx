import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

export const Vara = ({ name, image, description }) => {

  return (
    <div className="vara">
      <h3>{name}</h3>
      <div className="vara-image">
        <img src={image} alt={name} />
      </div>
      <div className="vara-info">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Vara;

Vara.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};