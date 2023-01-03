import jwtDecode from 'jwt-decode';
import { useCallback, useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import Sidebar from '../../components/organisms/Sidebar';
import ButtonTab from '../../components/organisms/TransactionContent/ButtonTab';
import TableRow from '../../components/organisms/TransactionContent/TableRow';
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
} from '../../services/data-types';
import { getHistoryTransaction } from '../../services/member';

export default function Transaction() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [tab, setTab] = useState('');

  const historyTransaction = useCallback(async () => {
    const response = await getHistoryTransaction();

    if (response.error) {
      return toast.error(response.message);
    }

    setTotalPrice(response.data.totalPrice);
    setTransactions(response.data.data);
  }, []);

  useEffect(() => {
    historyTransaction();
  }, []);

  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar />

        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              My Transactions
            </h2>
            <div className="mb-30">
              <p className="text-lg color-palette-2 mb-12">You've spent</p>
              <h3 className="text-5xl fw-medium color-palette-1">
                <NumericFormat
                  value={totalPrice}
                  prefix={'Rp '}
                  decimalScale={3}
                  displayType={'text'}
                  thousandSeparator={'.'}
                  decimalSeparator={','}
                />
              </h3>
            </div>
            <div className="row mt-30 mb-20">
              <div className="col-lg-12 col-12 main-content">
                <div id="list_status_title">
                  <ButtonTab
                    onclick={() => setTab('all')}
                    title={'All Trx'}
                    active={tab === 'all'}
                  />
                  <ButtonTab
                    onclick={() => setTab('success')}
                    title={'Success'}
                    active={tab === 'success'}
                  />
                  <ButtonTab
                    onclick={() => setTab('pending')}
                    title={'Pending'}
                    active={tab === 'pending'}
                  />
                  <ButtonTab
                    onclick={() => setTab('failed')}
                    title={'Failed'}
                    active={tab === 'failed'}
                  />
                </div>
              </div>
            </div>
            <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
              </p>
              <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                  <thead>
                    <tr className="color-palette-1">
                      <th className="" scope="col">
                        Game
                      </th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody id="list_status_item">
                    {transactions.map(
                      (transaction: HistoryTransactionTypes) => {
                        return (
                          <TableRow
                            key={transaction._id}
                            _id={transaction._id}
                            title={transaction.historyVoucherTopup.category}
                            category={'desktop'}
                            coinQuantity={
                              transaction.historyVoucherTopup.coinQuantity
                            }
                            coinName={transaction.historyVoucherTopup.coinName}
                            price={transaction.value}
                            status={transaction.status}
                          />
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export const getServerSideProps = async ({ req, res }: any) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  // change cookies token from btoa to atob
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');

  //get decode token with jwt
  let data: JWTPayloadTypes = jwtDecode(jwtToken);

  // get player's data
  const user = data.player;

  return {
    // props from here can used to become props
    props: {
      user,
    },
  };
};
