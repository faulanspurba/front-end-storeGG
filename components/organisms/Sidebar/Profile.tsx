import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { JWTPayloadTypes } from '../../../services/data-types';

export default function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  useEffect(() => {
    const tokenFromCookies = Cookies.get('token');
    const tokenATOB = atob(tokenFromCookies!);
    const jwtDecode: JWTPayloadTypes = jwt_decode(tokenATOB);
    const { player } = jwtDecode;
    setUser(player);
  }, []);

  return (
    <>
      <div className="user text-center pb-50 pe-30">
        <img
          src="/img/avatar-1.png"
          width="90"
          height="90"
          className="img-fluid mb-20"
        />
        <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
        <p className="color-palette-2 m-0">{user.email}</p>
      </div>
    </>
  );
}
