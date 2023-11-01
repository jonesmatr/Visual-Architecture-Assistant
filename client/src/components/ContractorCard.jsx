import React from 'react';

function ContractorCard({ contractor }) {
    // Check if the contractor prop exists. If not, return a message.
    if (!contractor) return <p>No contractor data available</p>;

    // Use the contractor prop directly to render the card content.
    return (
        <div className="contractor-card">
            <img src={contractor.profilePic} alt={`${contractor.username}'s Profile`} />
            <h2>{contractor.username}</h2>
            <p>{contractor.bio}</p>
            <div className="work-images">
                {contractor.workImages.map(image => (
                    <div key={image._id}>
                        <img src={image.imageUrl} alt={`Work by ${contractor.username}`} />
                        <p>{image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContractorCard;

