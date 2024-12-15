import React from 'react';
import './Features.css';

// Import images from the assets folder
import varietyIcon from "../assets/variety-icon.png";
import affordableIcon from "../assets/affordable-icon.png";
import deliveryIcon from "../assets/delivery-icon.png";

const Features = () => {
  return (
    <div className="features">
      <h2>Why Choose QuickRent?</h2>
      <div className="feature-list">
        <div className="feature">
          <img src={varietyIcon} alt="Variety" />
          <h3>Wide Variety of Gadgets</h3>
          <p>Choose from laptops, cameras, gaming consoles, and more!</p>
        </div>
        <div className="feature">
          <img src={affordableIcon} alt="Affordable Pricing" />
          <h3>Affordable Pricing</h3>
          <p>Rent gadgets at affordable prices with no hidden charges.</p>
        </div>
        <div className="feature">
          <img src={deliveryIcon} alt="Quick Delivery" />
          <h3>Quick Delivery</h3>
          <p>Fast delivery to your doorsteps, so you can start using your gadgets right away.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
