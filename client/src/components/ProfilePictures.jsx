import React, { useState } from 'react';

function ProfilePicture({ initialProfilePic }) {
    const [profilePic, setProfilePic] = useState(initialProfilePic);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Note: In a real-world scenario, you'd send this file to your server or a cloud service like Cloudinary.
            const imageUrl = URL.createObjectURL(file);
            setProfilePic(imageUrl);
            // TODO: Send the image to the server to save it
        }
    };

    const handleDeleteProfilePic = () => {
        setProfilePic(null);
        // TODO: Send a request to the server to delete the profile picture
    };

    return (
        <div className="profile-pic-container">
            <div className="profile-pic" style={{ backgroundImage: `url(${profilePic})` }}></div>
            <input type="file" onChange={handleImageUpload} />
            <button onClick={handleDeleteProfilePic}>Delete Profile Picture</button>
        </div>
    );
}

export default ProfilePicture;
