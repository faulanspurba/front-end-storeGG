import { NumericFormat } from 'react-number-format';
import cx from 'classnames';
import Link from 'next/link';

export default function TableRow(props: any) {
  const { title, category, coinQuantity, coinName, price, status, _id } = props;

  const statusClass = cx({
    'float-start icon-status': true,
    success: status === 'success',
    pending: status === 'pending',
    failed: status === 'failed',
  });

  return (
    <>
      <tr data-category="pending" className="align-middle">
        <th scope="row">
          <img
            className="float-start me-3 mb-lg-0 mb-3"
            src="/img/overview-1.png"
            width="80"
            height="60"
            alt=""
          />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">
              {title}
            </p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">
              {category}
            </p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">
            {coinQuantity} {coinName}
          </p>
        </td>
        <td>
          <p className="fw-medium color-palette-1 m-0">
            <NumericFormat
              value={price}
              prefix={'Rp '}
              decimalScale={3}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
            />
          </p>
        </td>
        <td>
          <div>
            <span className={statusClass}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              {status}
            </p>
          </div>
        </td>
        <td>
          <Link href={`/member/transaction-detail/${_id}`}>
            <a className="btn btn-status rounded-pill text-sm">Details</a>
          </Link>
        </td>
      </tr>
    </>
  );
}
