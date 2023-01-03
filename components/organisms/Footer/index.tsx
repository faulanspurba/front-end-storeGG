import Image from 'next/image';
import FooterItem from './FooterItem';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem
                  title={'Company'}
                  subtitle={[
                    'About Us',
                    'Press Release',
                    'Term of Use',
                    'Privacy and Policy',
                  ]}
                />
                <FooterItem
                  title={'Support'}
                  subtitle={[
                    'Refund Policy',
                    'Unlock Rewards',
                    'Live Chatting',
                  ]}
                />
                <FooterItem
                  title={'Connect'}
                  subtitle={[
                    'hi@store.gg',
                    'team@store.gg',
                    'Pasific 12, Jakarta Selatan',
                    '021 - 1122 - 9090',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
