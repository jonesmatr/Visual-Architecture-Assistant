import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER_PROFILE } from '../utils/queries';
import { UPDATE_BIO } from '../utils/mutations';


function Bio() {
    const { loading, error, data } = useQuery(GET_USER_PROFILE);
    const [bio, setBio] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [updateBioMutation] = useMutation(UPDATE_BIO);

    // Update local state when the query completes
    useEffect(() => {
        if (data && data.userProfile) {
            setBio(data.userProfile.bio);
        }
    }, [data]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        setIsEditing(false);
        try {
            // Send the updated bio to the server to save it
            await updateBioMutation({
                variables: { bio },
                refetchQueries: [{ query: GET_USER_PROFILE }], // Refetch the user's profile to get the updated bio
            });
            // Optionally, show a success message or handle other UI updates.
        } catch (error) {
            console.error("Error updating bio:", error);
            // Optionally, show an error message to the user.
        }
    };

    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    return (
        <div className="bio-container">
            <h2>About Me</h2>
            {isEditing ? (
                <div>
                    <textarea 
                        value={bio} 
                        onChange={e => setBio(e.target.value)} 
                        rows="5" 
                        cols="50"
                    />
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            ) : (
                <div>
                    <p>{bio}</p>
                    <button onClick={handleEditClick}>Edit Bio</button>
                </div>
            )}
        </div>
    );
}

export default Bio;
