import { Link } from 'react-router-dom';
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
       <h2>Welcome to Contractor Showcase</h2>
        <p>LEADING CONTRACTOR AGENCY</p>
        <p>Contractor Showcase is the premier platform for showcasing top-tier contractors. For over a decade, we have been curating and presenting the best contractor profiles for various projects and assignments, both locally and internationally.</p>

        <h2>WHY CHOOSE US</h2>
        <p>Our distinction lies in our deep understanding of the contractors we represent. Every contractor on our platform is vetted and known to us personally. This intimate knowledge ensures that we align the right contractor with your specific needs, guaranteeing value and excellence for every project.</p>

        <h2>HELPING YOU</h2>
        <p>With a combined experience of over 30 years in the industry, our team possesses the expertise and insights to guide and assist you in selecting the perfect contractor for your project. Whether you're looking for expertise in construction, renovation, or specialized projects, we have a diverse range of contractors to meet your needs.</p>

        <h2>WHERE DO OUR CONTRACTORS WORK</h2>
        <p>Our contractors are versatile and equipped to handle projects anywhere in the world, across diverse industries and sectors.</p>

        <h2>WHO ARE OUR CONTRACTORS</h2>
        <p>Our roster boasts a wide range of professionals, from seasoned industry veterans to emerging talents. Whether you're looking for a general contractor, a specialized expert, or a consultant, we have the right match for you.</p>

        <h2>WHAT DO THEY COST</h2>
        <p>Contractor fees vary based on their experience, expertise, and demand. Our pricing reflects the quality and skillset of our contractors, starting at competitive rates. Reach out to us to discuss your requirements, and our team will provide you with a tailored recommendation.</p>

        <h2>CONTRACTOR SPOTLIGHT</h2>
        <p>We are proud sponsors of the Contractor Spotlight Awards. This biennial event recognizes and celebrates outstanding contractors who have made significant contributions to their respective fields.</p>

        <Link to="/pricing">
    <button className="find-out-more-btn">FIND OUT MORE</button>
</Link>
    </div>
);

const BannerDescription = () => (
    <div className="banner-description">
        <h2>YOUR BANNER TEXT HERE</h2>
        <p>Additional description or details can go here.</p>
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

// HomePage Component// HomePage Component
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
