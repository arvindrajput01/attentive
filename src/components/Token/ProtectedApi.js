import axios from 'axios';
import { refreshAccessToken, isAccessTokenExpired } from './TokenManager';

// Function to make a protected API request
export const makeProtectedApiRequest = async (url, method = 'GET', data = null) => {
  const accessToken = localStorage.getItem('accessToken');

  // If access token doesn't exist or has expired, refresh the token
  if (!accessToken || isAccessTokenExpired()) {
    try {
      const refreshedAccessToken = await refreshAccessToken(localStorage.getItem('refreshToken'));
      accessToken = refreshedAccessToken;
    } catch (error) {
      // Handle token refresh failure
      // Redirect to login page or show error message
      return Promise.reject(error);
    }
  }

  // Make the API request with the access token
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle API request failure
    // Redirect to login page or show error message
    return Promise.reject(error);
  }
};
