import Cookies from 'js-cookie';

const removeCookies= (redirect) => {
  Cookies.remove('userAuthenticated', { path: '/' });
}

export default removeCookies;