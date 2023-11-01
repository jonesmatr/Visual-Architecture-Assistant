import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { openUploadWidget } from '../CloudinaryService';
import { GET_USER_PROFILE } from '../utils/queries'; // Assuming this is correct
import { UPDATE_PROFILE_PIC } from '../utils/mutations';


function ProfilePicture() {
    const { data: userData, refetch } = useQuery(GET_USER_PROFILE);
    const [updateProfilePic] = useMutation(UPDATE_PROFILE_PIC);
    const [profilePic, setProfilePic] = useState('');

    // Initialize profilePic state with data from the server
    useEffect(() => {
        if (userData) {
            setProfilePic(userData.userProfile.profilePic);
        }
    }, [userData]);

    const handleImageUpload = () => {
        const options = {
            cloudName: 'dbindi09a',
            uploadPreset: 'new4new', // Replace with your preset
            tags: ['profile'],
        };
        
        openUploadWidget(options, async (error, result) => {
            if (result.event === 'success') {
                setProfilePic(result.info.url);
                // Update the profile picture in the database
                await updateProfilePic({ variables: { imageUrl: result.info.url } });

                // Refetch the user profile data from the server to update the cache
                refetch();
            }
        });
    };    

    const handleDeleteProfilePic = async () => {
        // Update the database to remove the profile picture
        await updateProfilePic({ variables: { imageUrl: '' } });

        // Refetch the user profile data from the server to update the cache
        refetch();
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
