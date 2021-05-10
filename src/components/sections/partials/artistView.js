import React from 'react';
import classNames from 'classnames';

import Image from '../../elements/Image';

function ArtistView({
  title,
  desc,
  link,
  image,
  imageFill,
  type,
  limited,
  price,
}) {
  return (
    <div className="split-item">
      <div
        className="split-item-content center-content-mobile "
        data-reveal-container=".split-item">
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          {type}
        </div>
        <h3 className="mt-0 mb-12">{title}</h3>
        <p className="m-0">{desc}</p>
        {limited && `* Requires a donation of ₹${price} or more.`}
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
          <span className="testimonial-item-link">
            <a target="_blank" rel="noopener noreferrer" href={link}>
              Check them out
            </a>
          </span>
        </div>
      </div>
      <div
        className={classNames(
          'split-item-image center-content-mobile ',
          imageFill && 'split-item-image-fill',
        )}
        data-reveal-container=".split-item">
        <Image src={image} alt={title} width={528} height={396} />
      </div>
    </div>
  );
}

export default ArtistView;
