import decode from 'jwt-decode';

export const TOKEN_KEY = '@MYAPP/token';
export const USER = '@MYAPP/user';
export const IS_ADMIN = '@MYAPP/user_isAdmin';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token, user, isAdmin) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER, user);
  localStorage.setItem(IS_ADMIN, isAdmin);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER);
  localStorage.removeItem(IS_ADMIN);
};

export const userLocal = () => JSON.parse(localStorage.getItem(IS_ADMIN));

export const isTokenExpired = () => {
  try {
    const decoded = decode(getToken());
    console.log(decoded);
    const date = new Date() / 1000;
    console.log(date);

    if (decoded.exp < date) {
      return true;
    }

    return false;
  } catch (err) {
    console.log('Expired check failed!');
    return false;
  }
};