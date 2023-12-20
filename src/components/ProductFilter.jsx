import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Functional component for filtering products
const ProductFilter = ({
  price,
  rating,
  handleChangePrice,
  handleChangeRating,
  handleReset,
  handleSubmit,
}) => {
  return (
    <div className="filters-container">
      {/* Price and rating filter controls */}
      <div className="filter">
        <label className="label-price">Filter by price till: {price} EGP</label>
        <input
          className="range"
          type="range"
          min={0}
          max={2000}
          onChange={handleChangePrice}
        />
        <label className="label-rating">
          Filter by rating: {rating}{" "}
          <FontAwesomeIcon className="star-filter" icon={faStar} />
        </label>
        <input
          className="range"
          type="range"
          value={rating}
          min={0}
          max={5}
          onChange={handleChangeRating}
        />
      </div>

      {/* Reset and apply buttons */}
      <div className="btn-container">
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
        <button className="btn" onClick={handleSubmit}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
