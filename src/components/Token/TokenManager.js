import axios from 'axios';

// Function to refresh access token using the refresh token
export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post('/api/refreshToken', {
      refreshToken,
    });
    const { accessToken, expiryToken } = response.data;

    // Update access token and expiry token in token storage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('expiryToken', expiryToken);

    return accessToken;
  } catch (error) {
    // Handle token refresh failure
    // Redirect to login page or show error message
    console.error('Failed to refresh access token:', error);
    throw error;
  }
};

// Function to check if access token has expired
export const isAccessTokenExpired = () => {
  const expiryToken = localStorage.getItem('expiryToken');
  const expiryTime = new Date(expiryToken).getTime();
  const currentTime = new Date().getTime();
  return currentTime >= expiryTime;
};
