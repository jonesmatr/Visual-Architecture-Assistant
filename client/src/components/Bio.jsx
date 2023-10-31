import React, { useState, useEffect } from 'react';

function Bio({ initialBio }) {
    const [bio, setBio] = useState(initialBio);
    const [isEditing, setIsEditing] = useState(false);

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

    const handleSaveClick = () => {
        setIsEditing(false);
        // TODO: Send the updated bio to the server to save it
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
