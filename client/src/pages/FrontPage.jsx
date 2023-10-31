import { Link } from 'react-router-dom';
import React, { useState } from 'react';
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
        '/portrait-6.png',
        
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
       <h1 className="main-heading">Welcome to Contractor Showcase</h1>

        <h4>LEADING CONTRACTOR AGENCY</h4>
        <p>Contractor Showcase is the premier platform for showcasing top-tier contractors. For over a decade, we have been curating and presenting the best contractor profiles for various projects and assignments, both locally and internationally.</p>

        <h4>WHY CHOOSE US</h4>
        <p>Our distinction lies in our deep understanding of the contractors we represent. Every contractor on our platform is vetted and known to us personally. This intimate knowledge ensures that we align the right contractor with your specific needs, guaranteeing value and excellence for every project.</p>

        <h4>HELPING YOU</h4>
        <p>With a combined experience of over 30 years in the industry, our team possesses the expertise and insights to guide and assist you in selecting the perfect contractor for your project. Whether you're looking for expertise in construction, renovation, or specialized projects, we have a diverse range of contractors to meet your needs.</p>

        <h4>WHERE DO OUR CONTRACTORS WORK</h4>
        <p>Our contractors are versatile and equipped to handle projects anywhere in the world, across diverse industries and sectors.</p>

        <h4>WHO ARE OUR CONTRACTORS</h4>
        <p>Our roster boasts a wide range of professionals, from seasoned industry veterans to emerging talents. Whether you're looking for a general contractor, a specialized expert, or a consultant, we have the right match for you.</p>

        <h4>WHAT DO THEY COST</h4>
        <p>Contractor fees vary based on their experience, expertise, and demand. Our pricing reflects the quality and skillset of our contractors, starting at competitive rates. Reach out to us to discuss your requirements, and our team will provide you with a tailored recommendation.</p>

        <h4>CONTRACTOR SPOTLIGHT</h4>
        <p>We are proud sponsors of the Contractor Spotlight Awards. This biennial event recognizes and celebrates outstanding contractors who have made significant contributions to their respective fields.</p>

        <Link to="/pricing">
    <button className="find-out-more-btn">FIND OUT MORE</button>
</Link>
    </div>
);

const BannerDescription = () => (
    <div className="banner-description">
        <h4>MEET OUR TRUSTED CONTRACTORS</h4>
        <p>At Visual Architeture Assistant, we pride ourselves on showcasing the finest and most reliable contractors in the industry. Each professional in our showcase has undergone a rigorous selection process, ensuring that you receive top-quality service every time. Explore their profiles, discover their expertise, and build with confidence.</p>
    </div>
);


// ContractorsCategories Component
const Categories = [
    { title: 'NEW CONTRACTORS', count: 5, color: 'light-yellow', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'RENOVATION EXPERTS', count: 7, color: 'white', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'LANDSCAPE ARTISTS', count: 4, color: 'light-yellow', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'MASONRY SPECIALISTS', count: 6, color: 'white', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'ELECTRICIANS', count: 8, color: 'light-yellow', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'PLUMBERS', count: 3, color: 'white', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'CARPENTERS', count: 9, color: 'light-yellow', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'PAINTERS', count: 10, color: 'white', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'ELECTRICIANS', count: 5, color: 'light-yellow', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'BRICKLAYERS', count: 6, color: 'white', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'TILERS', count: 4, color: 'light-yellow', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'ROOFERS', count: 8, color: 'white', description: 'Newly registered contractors.', link: '/new-contractors' },
    { title: 'LANDSCAPERS', count: 7, color: 'light-yellow', description: 'Newly registered contractors.', link: '/new-contractors' },

];

const ContractorsCategories = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);

    return (
        <div className="contractors-categories">
            <div className="card">
                <h3 className="card-header">CONTRACTORS CATEGORIES</h3>
                <div className="card-body">
                    {Categories.map((category, index) => (
                        <div 
                            key={index} 
                            className={`category-item ${category.color}`} 
                            onClick={() => {
                                setExpandedCategory(
                                    expandedCategory === index ? null : index
                                );
                            }}
                        >
                            <span className="expand-icon">{expandedCategory === index ? '-' : '+'}</span>
                            {category.title}
                            {expandedCategory === index && (
                                <div>
                                    <p>{category.count} Contractors Available</p>
                                    <p>{category.description}</p>
                    
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const HomePage = () => {
    return (
        <Layout>
            <div className="home-page">
                <div className="banner">
                    <div className="left-section">
                        <img className="static-image" src="/portrait-3.png" alt="Static Image" />
                        <BannerDescription />
                    </div>
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
