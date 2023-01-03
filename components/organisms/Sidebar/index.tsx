import { useRouter } from 'next/router';
import Footer from './Footer';
import Profile from './Profile';
import SidebarMenu from './SidebarMenu';
import Cookies from 'js-cookie';
import { useState } from 'react';

export default function Sidebar() {
  const router = useRouter();
  const [isActiveSidebar, setIsActiveSidebar] = useState('');

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/');
  };

  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <SidebarMenu
              title={'Overview'}
              icon={'icon-menu-overview'}
              onclickSidebar={() => setIsActiveSidebar('overview')}
              isActiveSidebar={isActiveSidebar === 'overview'}
              targetLink=""
            />
            <SidebarMenu
              title={'Transactions'}
              icon={'icon-menu-transactions'}
              targetLink="transaction"
              onclickSidebar={() => setIsActiveSidebar('transaction')}
              isActiveSidebar={isActiveSidebar === 'transaction'}
            />
            <SidebarMenu
              title={'Message'}
              icon={'icon-menu-message'}
              targetLink="message"
              onclickSidebar={() => setIsActiveSidebar('message')}
              isActiveSidebar={isActiveSidebar === 'message'}
            />
            <SidebarMenu
              title={'Card'}
              icon={'icon-menu-card'}
              targetLink="card"
              onclickSidebar={() => setIsActiveSidebar('card')}
              isActiveSidebar={isActiveSidebar === 'card'}
            />
            <SidebarMenu
              title={'Rewards'}
              icon={'icon-menu-rewards'}
              targetLink="rewards"
              onclickSidebar={() => setIsActiveSidebar('rewards')}
              isActiveSidebar={isActiveSidebar === 'rewards'}
            />
            <SidebarMenu
              title={'Settings'}
              icon={'icon-menu-setting'}
              targetLink="edit-profile"
              onclickSidebar={() => setIsActiveSidebar('settings')}
              isActiveSidebar={isActiveSidebar === 'settings'}
            />
            <SidebarMenu
              title={'Log Out'}
              icon={'icon-menu-logout'}
              onlogout={onLogout}
            />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
