import { useEffect, useState } from 'react';

export default function CheckoutItem() {
  const [detailItem, setDetailItem] = useState({
    thumbnail: '/img/Thumbnail-1.png',
    name: '',
    category: {
      name: '',
    },
  });

  useEffect(() => {
    const detailItemLocal = localStorage.getItem('detail-item');

    const detailItem = JSON.parse(detailItemLocal!);

    setDetailItem(detailItem);
  }, []);

  return (
    <>
      <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
        <div className="pe-4">
          <div className="cropped">
            <img
              src={`/img/Thumbnail-${detailItem.thumbnail}`}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-1 mb-10">
            {detailItem.name}
          </p>
          <p className="color-palette-2 m-0">
            Category: {detailItem.category.name}
          </p>
        </div>
      </div>
    </>
  );
}
