import Link from 'next/link';
import { useState } from 'react';

export default function SignUpForm() {
  const classNames = {
    label: 'form-label text-lg fw-medium color-palette-1 mb-10',
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const data = { name, email, password };
    localStorage.setItem('user-form', JSON.stringify(data));
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label className={classNames.label}>Full Name</label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label className={classNames.label}>Email Addres</label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          aria-describedby="name"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-50">
        <label className={classNames.label}>Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          aria-describedby="name"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <Link href="/sign-up-photo">
          <button
            onClick={() => onSubmit()}
            type="button"
            className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          >
            Continue
          </button>
        </Link>

        <Link href="/sign-in">
          <a
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </div>
    </>
  );
}
