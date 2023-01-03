import jwtDecode from 'jwt-decode';
import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';
import { JWTPayloadTypes } from '../../services/data-types';

export default function Member() {
  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar />
        <OverviewContent />
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
