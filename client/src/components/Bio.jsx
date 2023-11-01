import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_BIO } from '../utils/mutations';

function Bio({ initialBio }) {
    const [bio, setBio] = useState(initialBio);
    const [isEditing, setIsEditing] = useState(false);
    const [updateBioMutation] = useMutation(UPDATE_BIO);

    useEffect(() => {
        // Retrieve from local storage on component mount
        const savedBio = localStorage.getItem('userBio');
        if (savedBio) {
            setBio(savedBio);
        }
    }, []);

    useEffect(() => {
        // Save bio to local storage whenever it changes
        localStorage.setItem('userBio', bio);
    }, [bio]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        setIsEditing(false);
        try {
            // Send the updated bio to the server to save it
            await updateBioMutation({ variables: { bio } });
            // Optionally, show a success message or handle other UI updates.
        } catch (error) {
            console.error("Error updating bio:", error);
            // Optionally, show an error message to the user.
        }
    };

    return (
        <div className="bio-container">
            <h2>About Me</h2>
            {isEditing ? (
                <div>
                    <textarea value={bio} onChange={e => setBio(e.target.value)} rows="5" cols="50"></textarea>
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
