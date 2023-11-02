import React from 'react';
import { useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import ProfilePicture from '../components/ProfilePicture';
import Bio from '../components/Bio';
import WorkImages from '../components/WorkImages';
import { GET_USER_PROFILE } from '../utils/queries'; // Import the query for fetching the user profile

const Portfolio = () => {
  // Use the useQuery hook to fetch the user profile data
  const { data, loading, error } = useQuery(GET_USER_PROFILE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Assuming 'data.userProfile' contains the user profile data after the query
  const userProfile = data.userProfile;

  return (
    <Layout>
      <h1>My Profile</h1>

      {/* Profile Picture Component */}
      <ProfilePicture initialProfilePic={userProfile.profilePic} />

      {/* Bio Component */}
      <Bio initialBio={userProfile.bio} />

      {/* Work Images Component - pass the work images as a prop */}
      <WorkImages initialImages={userProfile.workImages || []} />
    </Layout>
  );
};

export default Portfolio;
