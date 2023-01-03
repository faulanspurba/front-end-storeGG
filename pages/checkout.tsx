import Image from 'next/image';
import CheckoutItem from '../components/organisms/CheckoutItem';
import CheckoutDetail from '../components/organisms/CheckoutDetail';
import CheckoutConfirm from '../components/organisms/CheckoutConfirm';
import jwtDecode from 'jwt-decode';
import { JWTPayloadTypes, PayloadTypes } from '../services/data-types';

interface CheckoutProps {
  user: PayloadTypes;
}

export default function Checkout(props: CheckoutProps) {
  const { user } = props;

  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="#">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirm />
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async ({ req, res }: any) => {
  const { token } = req.cookies;

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

  //get decode token with jwt
  let data: JWTPayloadTypes = jwtDecode(jwtToken);

  // get player's data
  const user = data.player;

  return {
    // props from here can used to become props
    props: {
      user,
    },
  };
};
