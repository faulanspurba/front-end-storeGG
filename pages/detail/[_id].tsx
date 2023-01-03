import { useEffect } from 'react';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import TopUpForm from '../../components/organisms/TopUpForm';
import TopUpItem from '../../components/organisms/TopUpItem';
import { getDeatiledVoucher, getFeaturedGame } from '../../services/player';

export default function Detail({ nominals, payments, detailGame }: any) {
  useEffect(() => {
    localStorage.setItem('data-item', detailGame);
  }, []);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={detailGame} type={'mobile'} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={detailGame} type={'desktop'} />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await getFeaturedGame();

  const paths = data.map((item: any) => ({
    params: {
      _id: item._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface GetStaticProps {
  params: {
    _id: string;
  };
}

export const getStaticProps = async ({ params }: GetStaticProps) => {
  const { _id } = params;
  const data = await getDeatiledVoucher(_id);

  return {
    props: {
      detailGame: data.detail,
      nominals: data.detail.nominals,
      payments: data.payment,
    },
  };
};
