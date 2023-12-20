import { createContext, useContext, useState, useEffect } from "react";

// Create a context to manage product-related data
const ProductContext = createContext();

// Custom hook to consume the ProductContext
export const useProductContext = () => {
  // Access the context and ensure it's used within a ProductProvider
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

// ProductProvider component to manage and provide product-related data
export const ProductProvider = ({ children }) => {
  // State to manage the list of all products
  const [products, setProducts] = useState([]);
  
  // State to manage the list of filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // State to manage the loading status
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch product data from the backend
  const fetchData = () => {
    setIsLoading(true);
    fetch("https://slash-backend.onrender.com/product", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setFilteredProducts(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Provide the context values to its children
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        isLoading,
        fetchData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
