import React from 'react';
import './HeroBanner.css'; // separate CSS for each component

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Rent the Latest Gadgets, Anytime, Anywhere</h1>
        <p>Explore a wide variety of gadgets for rent with quick delivery and affordable pricing.</p>
        <a href="#gadget-listing" className="cta-btn">Explore Rentals</a>
      </div>
    </div>
  );
};

export default HeroBanner;
