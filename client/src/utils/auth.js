// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthService {

  getUser() {}
  
  // check if user's logged in
  loggedIn(isToken) {}

  // check if token is expired
  isTokenExpired(isToken) {}

  getToken() {}

  login(isUser) {}

  logout() {}
}

export default new AuthService();
