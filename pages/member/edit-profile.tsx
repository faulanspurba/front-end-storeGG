import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organisms/Sidebar';
import { updateProfileUser } from '../../services/member';

export default function EditProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    image: '',
    phoneNumber: '0812xxxxxxx',
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      const atobToken = atob(token);
      const jwtToken = jwtDecode(atobToken);
      const { player }: any = jwtToken;
      setUser({ ...user, ...player });
    }
  }, []);

  const onSubmit = async () => {
    const response = await updateProfileUser();
    ({ response });
  };

  return (
    <>
      <section className="edit-profile overflow-auto">
        <Sidebar />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form>
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <Image src="/icon/upload.svg" width={24} height={24} />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {imagePreview ? (
                        <Image
                          src={imagePreview}
                          width={90}
                          height={90}
                          style={{ borderRadius: '100%' }}
                        />
                      ) : (
                        <Image
                          src={user.image ? user.image : '/img/avatar-1.png'}
                          width={90}
                          height={90}
                        />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      style={{ borderRadius: '100%' }}
                      onChange={(e) => {
                        const img = e.target.files![0];
                        setImagePreview(URL.createObjectURL(img));
                        setUser({ ...user, image: img });
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    labelName={
                      'Masih Harus Ganti BackEnd request _id melalui jwt'
                    }
                    placeholder={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>
                <div className="pt-30">
                  <Input
                    labelName={'Email Address'}
                    placeholder={user.email}
                    disabled
                  />
                </div>
                <div className="pt-30">
                  <Input labelName={'Phone'} placeholder={user.phoneNumber} />
                </div>

                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
