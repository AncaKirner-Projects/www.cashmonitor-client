import Cookies from 'js-cookie';

const removeCookies= (redirect) => {
  Cookies.remove('idToken', { path: '/' });
}

export default removeCookies;