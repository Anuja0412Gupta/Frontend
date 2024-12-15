import React from "react";
import "./Gallery.css";

// Importing images (optional: can use URLs instead)
import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.webp";
import image3 from "../assets/gallery/image3.png";
import image4 from "../assets/gallery/image4.webp"

const Gallery = () => {
  const images = [
    { src: image1, alt: "Gadget 1" },
    { src: image2, alt: "Gadget 2" },
    { src: image3, alt: "Gadget 3" },
    { src: image4, alt: "Gadget 3"}
    // Add more images here
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Explore Our Gadgets</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
