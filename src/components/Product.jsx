import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/Product.css";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useProductContext } from '../contexts/ProductContext';

const Product = () => {
  // State to manage the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Destructuring values from the context
  const { products, isLoading, fetchData } = useProductContext();

  // Extracting product id from the URL parameters
  const { id } = useParams();

  // Finding the selected product based on the id
  const selectedProduct = products.find((p) => String(p.id) === id) || null;

  // Extracting variations from the selected product
  const variations = selectedProduct?.ProductVariations || [];

  // Handler to change the selected image
  const handleChangePhoto = (imagePath) => {
    setSelectedImage(imagePath);
  };

  // Function to render images for each product variation
  const renderImages = (variation) =>
    variation.ProductVarientImages.map((ProductVarientImage) => (
      <img
        className={selectedImage === ProductVarientImage.image_path ? "selected" : ""}
        onClick={() => handleChangePhoto(ProductVarientImage.image_path)}
        key={ProductVarientImage.id}
        alt={ProductVarientImage.id}
        src={ProductVarientImage.image_path}
      ></img>
    ));

  // Function to render details for each product variation
  const renderVariationDetails = (variation) => (
    <div key={variation.id}>
      <span key={variation.id} className="price">
        EGP {variation.price}
      </span>
      {variation.quantity > 0 && (
        <p className="left">{variation.quantity} items left!</p>
      )}
      {variation.quantity <= 0 && <p className="left">Out of Stock</p>}
      <div className="button-container">
        <button className="btn-cart">Add to cart</button>
      </div>
    </div>
  );

  // useEffect to set the initial selected image and fetch data
  useEffect(() => {
    setSelectedImage(selectedProduct.ProductVariations[0].ProductVarientImages[0].image_path);
    fetchData();
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Loading indicator */}
      {isLoading ? <Loading /> : null}
      
      {/* Render the content if a product is selected */}
      {selectedProduct && (
        <>
          {/* Product details container */}
          <div className="product-wrapper">
            {/* Product images section */}
            <div className="product-images">{variations.map(renderImages)}</div>
            
            {/* Main image section */}
            <div className="main-image">
              <img key={selectedImage} alt="Main Product" src={selectedImage}></img>
            </div>
            
            {/* Product details section */}
            <div className="product-details">
              <div className="card-details">
                {/* Display product category, brand, name, and description */}
                <p className="category">{selectedProduct.SubCategories.name}</p>
                <h6 className="brand">{selectedProduct.brandName}</h6>
                <p className="name">{selectedProduct.name}</p>
                <p>{selectedProduct.description}</p>
                
                {/* Render details for each product variation */}
                {variations.map(renderVariationDetails)}
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Product;
