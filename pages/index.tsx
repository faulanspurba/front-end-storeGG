import AOS from 'aos';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Footer from '../components/organisms/Footer';
import MainBanner from '../components/organisms/MainBanner';
import Navbar from '../components/organisms/Navbar';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import TransactionStep from '../components/organisms/TransactionStep';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Store GG</title>
        <meta
          name="description"
          content="Ini adalah deskripsi dari meta description"
        />
        <meta property="og:title" content="Title untuk SEO facebook share" />
        <meta
          property="og:description"
          content="Description untuk SEO facebook share"
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <meta property="og:url" content="https://google.com" />
      </Head>

      {/* END SEO */}

      <Navbar />

      <MainBanner />

      <TransactionStep />

      <FeaturedGame />

      <Reached />

      <Story />

      <Footer />
    </>
  );
};

export default Home;
