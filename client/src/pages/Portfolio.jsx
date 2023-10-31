import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProfilePicture from '../components/ProfilePicture';
import Bio from '../components/Bio';
import WorkImages from '../components/WorkImages'; // Assuming you've named the component WorkImages

const Portfolio = () => {
    // These states will ideally be populated using an API call to your backend
    // to fetch the contractor's current profile data.
    const [initialProfilePic, setInitialProfilePic] = useState(''); // Default URL or empty string
    const [initialBio, setInitialBio] = useState(''); // Default bio or empty string
    const [initialImages, setInitialImages] = useState([]); // Array of images with their descriptions

    // useEffect to fetch the contractor's data when the component mounts
    useEffect(() => {
        // TODO: Fetch the contractor's profile data from your backend and update the states.
        // This can be done using fetch, axios, or any other method you prefer.
    }, []);

    return (
        <Layout>
            <h1>My Profile</h1>

            {/* Profile Picture Component */}
            <ProfilePicture initialProfilePic={initialProfilePic} />

            {/* Bio Component */}
            <Bio initialBio={initialBio} />

            {/* Work Images Component */}
            <WorkImages initialImages={initialImages} />
        </Layout>
    );
}

export default Portfolio;
