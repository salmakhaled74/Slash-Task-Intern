import React, { useEffect, useState } from "react";
import "../styles/ProductsList.css";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import Loading from "./Loading";
import { useProductContext } from "../contexts/ProductContext";

const ProductList = () => {
  // Destructure values from the context
  const {
    products,
    filteredProducts,
    setFilteredProducts,
    isLoading,
    fetchData,
  } = useProductContext();

  // State for filtering by price
  const [price, setPrice] = useState(0);
  // State for filtering by rating
  const [rating, setRating] = useState(0);

  // Apply filters and update filteredProducts
  const handleSubmit = () => {
    const filtered = products.filter((pro) => {
      const variation = pro.ProductVariations[0];
      return variation.price <= price && pro.product_rating >= rating;
    });
    setFilteredProducts(filtered);
  };

  // Reset filters to show all products
  const handleReset = () => {
    setFilteredProducts(products);
  };

  // Handle changes in price input
  const handleChangePrice = (e) => {
    setPrice(parseInt(e.target.value, 10));
  };

  // Handle changes in rating input
  const handleChangeRating = (e) => {
    setRating(parseInt(e.target.value, 10));
  };

  // Fetch product data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Show loading spinner while data is being fetched */}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* Products wrapper */}
          <div className="products-wrapper">
            {/* Filter component */}
            <ProductFilter
              price={price}
              rating={rating}
              handleChangePrice={handleChangePrice}
              handleChangeRating={handleChangeRating}
              handleReset={handleReset}
              handleSubmit={handleSubmit}
            />
            {/* Products container */}
            <div className="products-container">
              {/* Map through filteredProducts to render ProductCard components */}
              {filteredProducts.map((pro) =>
                pro.ProductVariations.map((variation) => (
                  <ProductCard key={variation.id} pro={pro} variation={variation} />
                ))
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;
