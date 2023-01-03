import Axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function CallAPI({
  url,
  method,
  data,
  token,
  serverToken,
}: CallAPIProps) {
  let headers = {};
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  }
  if (token) {
    const tokenFromCookies = Cookies.get('token');
    if (tokenFromCookies) {
      const jwtToken = atob(tokenFromCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await Axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response?.status > 300) {
    const result = {
      error: true,
      message: response.data.Message,
      data: null,
    };

    return result;
  }
  const result = {
    error: false,
    message: 'success',
    data: response.data,
  };

  return result;
}
