import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTRACTOR_DETAILS } from '../utils/queries';

function ContractorCard({ contractorId }) {
    const { loading, error, data } = useQuery(GET_CONTRACTOR_DETAILS, {
        variables: { contractorId: contractorId }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.contractor) return <p>No contractor data available</p>;

    const contractor = data.contractor;

    return (
        <div className="contractor-card">
            <img src={contractor.profilePic} alt="Profile" />
            <h2>{contractor.username}</h2>
            <p>{contractor.bio}</p>
            <div className="work-images">
                {contractor.workImages.map(image => (
                    <div key={image._id}>
                        <img src={image.imageUrl} alt="Work" />
                        <p>{image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContractorCard;
