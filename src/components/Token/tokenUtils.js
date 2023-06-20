import jwt from 'jsonwebtoken';

function isTokenExpired(token) {
  const decodedToken = jwt.decode(token);
  if (!decodedToken) {
    return true;
  }

  const expirationDate = new Date(decodedToken.exp * 1000);
  const currentTime = new Date();

  return expirationDate < currentTime;
}
export { isTokenExpired };
