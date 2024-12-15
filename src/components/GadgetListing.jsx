import React from 'react';
import './GadgetListing.css';

const GadgetListing = () => {
  const gadgets = [
    { name: 'Laptop', price: '$30/day', features: ['Intel i5', '8GB RAM', '1TB SSD'] },
    { name: 'Camera', price: '$25/day', features: ['24MP', '4K Video', 'HD Screen'] },
    { name: 'Gaming Console', price: '$15/day', features: ['PlayStation 5', '4K Gaming', 'Gamepad'] },
  ];

  return (
    <div className="gadget-listing" id="gadget-listing">
      <h2>Gadgets for Rent</h2>
      <div className="gadget-cards">
        {gadgets.map((gadget, index) => (
          <div className="gadget-card" key={index}>
            <h3>{gadget.name}</h3>
            <p>Price: {gadget.price}</p>
            <ul>
              {gadget.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a href="#contact-form" className="cta-btn">List Your Gadget</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GadgetListing;
