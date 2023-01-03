import Axios from 'axios';
import CallAPI from '../config/api';
import { CheckoutDataTypes } from './data-types';

const ROOT_URL = process.env.NEXT_PUBLIC_URL;
const API_VERSION = 'API/v1';

export const getFeaturedGame = async () => {
  const ENDPOINT = 'players/landingPage';

  const response = await Axios.get(`${ROOT_URL}/${API_VERSION}/${ENDPOINT}`);

  return response.data.data;
};

export const getDeatiledVoucher = async (_id: string) => {
  const ENDPOINT = `players/detail/${_id}`;

  const response = await Axios.get(`${ROOT_URL}/${API_VERSION}/${ENDPOINT}`);
  return response.data.data;
};

export const getCategoryPlayer = async () => {
  const ENDPOINT = 'players/category';

  const response = await Axios.get(`${ROOT_URL}/${API_VERSION}/${ENDPOINT}`);
  return response.data.data;
};

export const setCheckout = async (data: CheckoutDataTypes) => {
  const url = `${ROOT_URL}/${API_VERSION}/players/checkout`;

  return CallAPI({ url, method: 'POST', data, token: true });
};
