import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { setCheckout } from '../../../services/player';

export default function CheckoutConfirm() {
  const router = useRouter();
  const [checkBox, setCheckBox] = useState(false);

  const onSubmit = async () => {
    if (!checkBox) {
      return toast.error('Please check the money transferred box first');
    }

    const detailItemLocal = localStorage.getItem('detail-item');
    const topupDataLocal = localStorage.getItem('topup-data');

    const detailItem = JSON.parse(detailItemLocal!);
    const topupData = JSON.parse(topupDataLocal!);

    const data = {
      voucher: detailItem._id,
      nominal: topupData.nominalItem._id,
      payment: topupData.paymentItem.payment._id,
      bank: topupData.paymentItem.bank._id,
      name: topupData.bankAccountName,
      accountUser: topupData.verifyId,
    };

    const result = await setCheckout(data);
    if (result.error) {
      return toast.error(result.message);
    }
    toast.success('Checkout Berhasil');

    router.push('/complete-checkout');
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkBox}
          onChange={() => setCheckBox(!checkBox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
