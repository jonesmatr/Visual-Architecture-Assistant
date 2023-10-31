import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import "../index.css";

// Carousel Component
const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'path_to_your_image1.jpg',
        'path_to_your_image2.jpg',
        // ... Add all 7 images' paths here ...
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="carousel">
            {images.map((imgSrc, index) => (
                <img 
                    key={index} 
                    src={imgSrc} 
                    alt={`Image ${index + 1}`} 
                    style={{display: index === currentImageIndex ? 'block' : 'none'}} 
                />
            ))}
        </div>
    );
};

// Description Component
const Description = () => (
    <div className="description">
        <h2>LEADING CONTRACTORS AGENCY</h2>
        <p>Our agency provides top-notch contractors ... (continue with the rest of the text)</p>
        {/* Adjust the text as necessary */}
    </div>
);

// ContractorsCategories Component
const ContractorsCategories = () => {
    const categories = [
        { title: 'NEW CONTRACTORS', count: 5 },
        // ... Add the rest of the categories here ...
    ];

    return (
        <div className="contractors-categories">
            <h3>CONTRACTORS CATEGORIES</h3>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <strong>{category.title}</strong> <span>{category.count} Contractors Available</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// HomePage Component
const HomePage = () => (
    <div className="home-page">
        <Carousel />
        <div className="main-section">
            <Description />
            <ContractorsCategories />
        </div>
    </div>
);

export default HomePage;
