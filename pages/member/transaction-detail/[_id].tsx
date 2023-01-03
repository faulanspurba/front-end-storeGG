import jwtDecode from 'jwt-decode';
import Sidebar from '../../../components/organisms/Sidebar';
import { DetailTransactionDetail } from '../../../components/organisms/TransactionContent/DetailTransactionDetail';
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
} from '../../../services/data-types';
import { getTransactionDetail } from '../../../services/member';

interface DetailTrxTypes {
  detailTrx: HistoryTransactionTypes;
}

export default function TransactionDetail({ detailTrx }: DetailTrxTypes) {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <Sidebar />

        <DetailTransactionDetail detailTrx={detailTrx} />
      </section>
    </>
  );
}

export const getServerSideProps = async ({ req, params }: any) => {
  const { token } = req.cookies;
  const { _id } = params;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  // change cookies token from btoa to atob
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const response = await getTransactionDetail(_id, jwtToken);
  const detailTrx = response.data.data;

  //get decode token with jwt
  let data: JWTPayloadTypes = jwtDecode(jwtToken);

  // get player's data
  const user = data.player;

  return {
    // props from here can used to become props
    props: {
      detailTrx,
    },
  };
};
