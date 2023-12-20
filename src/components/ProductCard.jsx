import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Functional component representing a product card
const ProductCard = ({ pro, variation }) => {
  return (
    // Link to the product details page
    <Link
      to={`/product/${pro.name}/${pro.id}`}
      style={{ textDecoration: "none" }}
      key={variation.id}
    >
      {/* Product card layout */}
      <div className="product-card">
        {/* Display the hero image of the product */}
        <div className="heroImage">
          {variation.ProductVarientImages[0] && (
            <img
              key={variation.ProductVarientImages[0].id}
              src={variation.ProductVarientImages[0].image_path}
              alt={`Product Variation ${variation.id}`}
            />
          )}
        </div>

        {/* Details of the product */}
        <div className="card-details">
          {/* Category and star rating */}
          <div className="star-container">
            {pro.SubCategories && (
              <p className="category">{pro.SubCategories.name}</p>
            )}
            <p className="rating">
              {pro.product_rating}
              <FontAwesomeIcon className="star" icon={faStar} />
            </p>
          </div>

          {/* Brand, name, and price */}
          <h6 className="brand">{pro.Brands.brand_name}</h6>
          <p className="name">{pro.name}</p>
          <span className="price">EGP {variation.price}</span>

          {/* Display quantity or out of stock message */}
          {variation.quantity > 0 && (
            <p className="left">{variation.quantity} items left!</p>
          )}
          {variation.quantity <= 0 && <p className="left">Out of Stock</p>}

          {/* Add to cart button */}
          <div className="button-container">
            <button className="btn-cart">Add to cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
