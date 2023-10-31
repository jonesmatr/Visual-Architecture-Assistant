import React, { useState, useEffect } from 'react';
import { openUploadWidget } from '../CloudinaryService';

function ProfilePicture({ initialProfilePic }) {
    const [profilePic, setProfilePic] = useState(initialProfilePic);

    useEffect(() => {
        // Retrieve from local storage on component mount
        const savedPic = localStorage.getItem('profilePic');
        if (savedPic) {
            setProfilePic(savedPic);
        }
    }, []);

    const handleImageUpload = () => {
        const options = {
            cloudName: 'dbindi09a',
            uploadPreset: 'new4new', // Replace with your preset
            tags: ['profile'],
        };
        
        openUploadWidget(options, (error, result) => {
            if (result.event === 'success') {
                setProfilePic(result.info.url);
                // Save to local storage
                localStorage.setItem('profilePic', result.info.url);
                // TODO: Send the profile picture details (URL, public_id) to the server to save
            }
        });
    };;

    const handleDeleteProfilePic = () => {
        setProfilePic(null);
        // Remove from local storage
        localStorage.removeItem('profilePic');
        // TODO: Send a request to the server to delete the profile picture
        // On the server-side, use Cloudinary SDK to delete the image based on its public_id
    };

    return (
        <div className="profile-pic-container">
            <div className="profile-pic" style={{ backgroundImage: `url(${profilePic})` }}></div>
            <button onClick={handleImageUpload}>Change Picture</button>
            <button onClick={handleDeleteProfilePic}>Delete Profile Picture</button>
        </div>
    );
}

export default ProfilePicture;
