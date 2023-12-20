import Home from "./pages/Home/Home";
import Product from "./components/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import Products from "./pages/products/Products";

function App() {
  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:name/:id" element={<Product />} />
        </Routes>
      </ProductProvider>
    </Router>
  );
}

export default App;
