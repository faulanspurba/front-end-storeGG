import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';

export default function CheckoutDetail() {
  const [topupData, setTopupData] = useState({
    verifyId: '',
    bankAccountName: '',
    nominalItem: {
      id: '',
      coinQuantity: 0,
      coinName: '',
      price: 0,
    },
    paymentItem: {
      payment: {
        id: '',
        type: '',
      },
      bank: {
        id: '',
        name: '',
        noRekening: 0,
        bankName: '',
      },
    },
  });

  useEffect(() => {
    const topupDataLocals = localStorage.getItem('topup-data');
    const topupDataLocal = JSON.parse(topupDataLocals!);
    setTopupData(topupDataLocal);
  }, []);

  const taxPrice = topupData.nominalItem.price * 0.1;
  const totalPrice = topupData.nominalItem.price + taxPrice;

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID
          <span className="purchase-details">{topupData.verifyId}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item
          <span className="purchase-details">
            {topupData.nominalItem.coinQuantity}
            {topupData.nominalItem.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price
          <span className="purchase-details">
            <NumericFormat
              value={topupData.nominalItem.price}
              prefix={'Rp '}
              decimalScale={3}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%)
          <span className="purchase-details">
            <NumericFormat
              value={taxPrice}
              prefix={'Rp '}
              decimalScale={3}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total
          <span className="purchase-details color-palette-4">
            <NumericFormat
              value={totalPrice}
              prefix={'Rp '}
              decimalScale={3}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name
          <span className="purchase-details">{topupData.bankAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type
          <span className="payment-details">
            {topupData.paymentItem.payment.type}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name
          <span className="payment-details">
            {topupData.paymentItem.bank.bankName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name
          <span className="payment-details">
            {topupData.paymentItem.bank.name}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number
          <span className="payment-details">
            {topupData.paymentItem.bank.noRekening}
          </span>
        </p>
      </div>
    </>
  );
}
