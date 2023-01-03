import CallAPI from '../config/api';

export const getOverview = async () => {
  const url = `${ROOT_URL}/${API_VERSION}/players/dashboard`;

  return CallAPI({ url, method: 'GET', token: true });
};

const ROOT_URL = process.env.NEXT_PUBLIC_URL;
const API_VERSION = 'API/v1';

export const getHistoryTransaction = async () => {
  const url = `${ROOT_URL}/${API_VERSION}/players/history`;

  return CallAPI({ url, method: 'GET', token: true });
};

export const getTransactionDetail = async (
  _id: string,
  serverToken: string
) => {
  const url = `${ROOT_URL}/${API_VERSION}/players/transactionDetail/${_id}`;

  return CallAPI({ url, method: 'GET', serverToken });
};

export const updateProfileUser = async () => {
  const url = `${ROOT_URL}/${API_VERSION}/players/profile`;

  return CallAPI({ url, method: 'PUT', token: true });
};
