import React from 'react';

function OrgView({title, desc, link}) {
  return (
    <div className="tiles-item reveal-from-right" data-reveal-delay="200">
      <div className="tiles-item-inner">
        {title}
        <div className="testimonial-item-content">
          <p className="text-sm mb-0">{desc}</p>
        </div>
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
          <span className="testimonial-item-link">
            <a target="_blank" rel="noopener noreferrer" href={link}>
              Donate
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrgView;
