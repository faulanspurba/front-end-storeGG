import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { setSignUp } from '../services/auth';
import { CategoryTypes } from '../services/data-types';
import { getCategoryPlayer } from '../services/player';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('/icon/upload.svg');
  const [localForm, setLocalForm] = useState({ name: '', email: '' });

  const router = useRouter();

  const onSubmit = async () => {
    let dataStorage = localStorage.getItem('user-form');
    dataStorage = JSON.parse(dataStorage!);
    const { name, email, password }: any = dataStorage;

    const form: any = new FormData();

    form.append('name', name);
    form.append('email', email);
    form.append('password', password);
    form.append('image', image);

    const result = await setSignUp(form);
    if (result.error) {
      return toast.error(result.message);
    }

    localStorage.removeItem('user-form');
    toast.success('Register Berhasil');
    router.push('/sign-in');
  };

  const getCategoryPlayerAPI = useCallback(async () => {
    const dataCategory = await getCategoryPlayer();

    setCategories(dataCategory);
    setFavorite(dataCategory[0]._id);
  }, []);

  useEffect(() => {
    getCategoryPlayerAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form');
    setLocalForm(JSON.parse(getLocalForm!));
  }, []);

  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      <Image
                        src={imagePreview}
                        width={150}
                        height={150}
                        className="img-upload"
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const img: any = event.target.files![0];
                        setImagePreview(URL.createObjectURL(img));
                        return setImage(img);
                      }}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {localForm.name}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {localForm.email}
                </p>
                <div className="pt-50 pb-50">
                  <label
                    htmlFor="category"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Favorite Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    value={favorite}
                    onChange={(event) => setFavorite(event.target.value)}
                  >
                    {categories.map((category: CategoryTypes) => {
                      return (
                        <option
                          value={category._id}
                          key={category._id}
                          selected
                        >
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  type="button"
                  onClick={() => onSubmit()}
                >
                  Create My Account
                </button>

                <Link href="/term">
                  <a
                    className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                    role="button"
                  >
                    Terms & Conditions
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
