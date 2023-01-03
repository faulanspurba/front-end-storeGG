import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { setSignIn } from '../../../services/auth';
import Cookies from 'js-cookie';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    if (!email || !password) {
      return toast.error('Email and Password need to be fill');
    }

    const result = await setSignIn(data);

    if (result.error) {
      return toast.error(result.message);
    }

    // get the token
    const { token } = result.data;

    // change token to binary to ASCII
    const tokenBase64 = btoa(token);

    // save BTOA to cookies
    Cookies.set('token', tokenBase64, { expires: 1 });

    toast.success('Login success');

    return router.push('/');
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          name="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          onClick={onSubmit}
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
        >
          Continue to Sign In
        </button>
        <Link href={'/sign-up'}>
          <a
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign Up
          </a>
        </Link>
      </div>
    </>
  );
}
