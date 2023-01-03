import Axios from 'axios';
import CallAPI from '../config/api';
import { SignInTypes, SignUpTypes } from './data-types';

interface IDProps {
  _id: string;
}

const ROOT_URL = process.env.NEXT_PUBLIC_URL;
const API_VERSION = 'API/v1';

export const setSignUp = async (data: SignUpTypes) => {
  const url = `${ROOT_URL}/${API_VERSION}/auth/signup`;

  return CallAPI({ url, method: 'POST', data });
};

export const setSignIn = (data: SignInTypes) => {
  const url = `${ROOT_URL}/${API_VERSION}/auth/signin`;

  return CallAPI({ url, method: 'POST', data });
};
