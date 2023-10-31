import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import "../index.css";

// Carousel Component
const ImageGrid = () => {
    const images = [
        '/portrait-10.png',
        '/portrait-6.png',
        '/portrait-9.png',
        '/portrait-5.png',
        '/portrait-7.png',
        '/portrait-4.png',
        '/portrait-8.png',
        '/portrait-1.png',
        '/portrait-2.png',
        
    ];

    return (
        <div className="image-grid">
            {images.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`Image ${index + 1}`} />
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
const HomePage = () => {
    return (
        <Layout>
            <div className="home-page">
                <div className="banner">
                <img className="static-image" src="/portrait-3.png" alt="Static Image" />
                    <ImageGrid />
                </div>
                <div className="main-section">
                    <Description />
                    <ContractorsCategories />
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
