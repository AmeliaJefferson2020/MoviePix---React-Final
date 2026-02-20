import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  // Ensure rating is a valid number before rendering
  const numericRating = Number(rating);
  if (isNaN(numericRating)) {
    return null; // Or return a default state, e.g., 'N/A'
  }

  return (
    <div className="movie__ratings">
      {new Array(Math.floor(numericRating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}
      {!Number.isInteger(numericRating) && <FontAwesomeIcon icon="star-half-alt" />}
    </div>
  );
};

export default Rating;
