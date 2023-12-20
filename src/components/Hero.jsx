import "../styles/Hero.css";

// Hero component for the home page
export default function Hero() {
  return (
    <>
      {/* Hero container with image and text */}
      <div className="hero-container">
        
        {/* Hero image */}
        <div className="hero-image">
          <img src="/hero1.png" alt="hero"></img>
        </div>
        
        {/* Hero text content */}
        <div className="hero-text">
          
          {/* Title */}
          <div>
            <h1>Discover the Joy of Shopping</h1>
          </div>
          
          {/* Description */}
          <div>
            <p>
              Explore a wide range of high-quality products and find the perfect
              items for you.
            </p>
          </div>
          
          {/* Shop Now link */}
          <div>
            <a href="/products" className="shop-now-link">
              Shop now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
