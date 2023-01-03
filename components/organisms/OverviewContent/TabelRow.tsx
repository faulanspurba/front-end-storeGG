import classNames from 'classnames';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';

interface TableRowProps {
  image: String;
  title: String;
  category: String;
  coinQuantity: string;
  coinName: string;
  price: number;
  status: String;
}

export default function TableRow(props: TableRowProps) {
  const { title, category, coinQuantity, coinName, price, status, image } =
    props;

  const statusClassName = classNames({
    'float-start icon-status': true,
    success: status === 'success',
    pending: status === 'pending',
    failed: status === 'failed',
  });

  return (
    <>
      <tr className="align-middle text-center">
        <th scope="row">
          <img
            className="float-start me-3 mb-lg-0 mb-3"
            src={'/img/' + image + '.png'}
            width="80"
            height="60"
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
          <p className="fw-medium text-start color-palette-1 m-0">
            {coinQuantity} {coinName}
          </p>
        </td>
        <td>
          <p className="fw-medium text-start color-palette-1 m-0">
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
            <span className={statusClassName}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              {status}
            </p>
          </div>
        </td>
      </tr>
    </>
  );
}
