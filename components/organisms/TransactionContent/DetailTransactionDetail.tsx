import { NumericFormat } from 'react-number-format';
import { HistoryTransactionTypes } from '../../../services/data-types';

interface DetailTrxTypes {
  detailTrx: HistoryTransactionTypes;
}

export const DetailTransactionDetail = ({ detailTrx }: DetailTrxTypes) => {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #{detailTrx._id}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <img
                        src="/img/Thumbnail-3.png"
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {detailTrx.historyVoucherTopup.category}
                    </p>
                    <p className="color-palette-2 m-0">
                      Category: {'<>FIX THIS<>'}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="fw-medium text-center label pending m-0 rounded-pill">
                    {detailTrx.status}
                  </p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <p className="text-lg color-palette-1 mb-20">
                  Your Game ID
                  <span className="purchase-details">
                    {detailTrx.accountUser}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Order ID{' '}
                  <span className="purchase-details">{detailTrx._id}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Item
                  <span className="purchase-details">
                    {detailTrx.historyVoucherTopup.coinQuantity}{' '}
                    {detailTrx.historyVoucherTopup.coinName}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Price
                  <span className="purchase-details">
                    <NumericFormat
                      value={detailTrx.historyVoucherTopup.price}
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
                      value={detailTrx.tax}
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
                      value={detailTrx.value}
                      prefix={'Rp '}
                      decimalScale={3}
                      displayType={'text'}
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                    />
                  </span>
                </p>
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <p className="text-lg color-palette-1 mb-20">
                  Your Account Name
                  <span className="purchase-details">{detailTrx.name}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Type
                  <span className="payment-details">
                    {detailTrx.historyPayment.type}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Bank Name{' '}
                  <span className="payment-details">
                    {detailTrx.historyPayment.bankName}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Bank Account Name
                  <span className="payment-details">PT Store GG Indonesia</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Bank Number
                  <span className="payment-details">
                    {detailTrx.historyPayment.noRekening}
                  </span>
                </p>
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="https://wa.me/62812?text=iya%20bang"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
