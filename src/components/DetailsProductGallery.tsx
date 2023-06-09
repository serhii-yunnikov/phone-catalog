import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Details } from '../types/Details';

type Props = {
  details: Details | null;
};

export const DetailsProductGallery: React.FC<Props>
= React.memo(({ details }) => {
  const [mainIndex, setMainIndex] = useState(0);

  useEffect(() => setMainIndex(0), [details]);

  return (
    <ul className="details-photo-container">
      {details?.images.map((image, index) => (
        <li
          key={image}
          role="presentation"
          className={classNames(
            `details-photo-container__small--${index + 1}`,
            { 'detail-active': index === mainIndex },
          )}
          onClick={() => setMainIndex(index)}
        >
          <img
            src={image}
            alt={`img${index}`}
            className="product-details-page__image-small"
          />
        </li>
      ))}
      <li className="details-photo-container__main">
        <img
          src={details?.images[mainIndex]}
          alt="img1"
          className="product-details-page__image-main"
        />
      </li>
    </ul>
  );
});
