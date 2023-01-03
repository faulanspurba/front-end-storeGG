import { useEffect, useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { JWTPayloadTypes } from '../../../services/data-types';

export default function Auth() {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    image: '',
  });

  const dropdownClass = cx({
    'dropdown-menu': true,
    'border-0': true,
    show: show,
  });

  const onLogout = () => {
    Cookies.remove('token');
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // change token from cookie to atob
      const tokenATOB = atob(token);

      // get token decoded from jwt token
      const token_decode: JWTPayloadTypes = jwt_decode(tokenATOB);

      // get the player from the data
      const { player } = token_decode;

      setIsLogin(true);
      setUser(player);
    }
  }, []);

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => setShow(!show)}
          >
            <img
              src="/img/avatar-1.png"
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul className={dropdownClass} aria-labelledby="dropdownMenuLink">
            <li>
              <p className="dropdown-item text-lg color-palette-2">
                {user.name}
              </p>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <a className="dropdown-item text-lg color-palette-2">
                  Account Settings
                </a>
              </Link>
            </li>
            <li onClick={onLogout}>
              <a href="/" className="dropdown-item text-lg color-palette-2">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link href={'/sign-in'}>
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}
