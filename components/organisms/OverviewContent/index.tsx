import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  CountPriceTransactionTypes,
  HistoryTransactionTypes,
} from '../../../services/data-types';
import { getOverview } from '../../../services/member';
import CategoryCard from './CategoryCard';
import TableRow from './TabelRow';

export default function OverviewContent() {
  const [countPrice, setCountPrice] = useState([]);
  const [history, setHistory] = useState([]);

  const getDashboard = useCallback(async () => {
    const response = await getOverview();
    if (response.error) {
      return toast.error(response.message);
    }
    const { countPrice } = response.data.data;
    const { history } = response.data.data;

    setCountPrice(countPrice);
    setHistory(history);
  }, [getOverview]);

  useEffect(() => {
    getDashboard();
  }, []);
  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                {countPrice.map((count: CountPriceTransactionTypes) => {
                  return (
                    <CategoryCard
                      key={count._id}
                      nominal={count.value}
                      name={count.category.name}
                      icon={'icon-desktop'}
                    />
                  );
                })}
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
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((history: HistoryTransactionTypes) => {
                    return (
                      <TableRow
                        key={history._id}
                        image={'overview-3'}
                        title={history.historyVoucherTopup.category}
                        category={history.category.name}
                        coinQuantity={history.historyVoucherTopup.coinQuantity}
                        coinName={history.historyVoucherTopup.coinName}
                        price={history.value}
                        status={history.status}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
