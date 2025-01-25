import React from 'react';
import './../styles/HeroSection.css'; 

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Cook with Chef Iran in Paradise!</h1>
        <p>Explore the art of Sri Lankan cooking, surrounded by breathtaking landscapes. Join a unique cooking class that blends flavors and culture!</p>
        <div className="image-grid">
          <img src="image1.jpg" alt="Food Image 1" /> 
          <img src="image2.jpg" alt="Food Image 2" />
          <img src="image3.jpg" alt="Food Image 3" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
