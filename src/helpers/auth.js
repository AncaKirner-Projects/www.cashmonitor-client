import Cookies from 'js-cookie';

export function isAuthenticated() {
  return false;
  // return !!Cookies.get('tokenKey');
}