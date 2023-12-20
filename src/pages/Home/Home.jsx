import React from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

const Home = () => (
  <>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <NavBar />
        <Hero />
      </div>
      <Footer />
    </div>
  </>
);

export default Home;
