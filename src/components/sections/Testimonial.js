import React from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Where can I donate ?',
    paragraph: `Currently, we only support few verified covid relief organizations which are listed below. The list will keep getting updated as our team verifies more organizations as well. For now, all you need to do is donate an amount of ₹200 or more to any of the following organizations to receive a token of appreciation.`,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200">
              <div className="tiles-item-inner">
                Goonj
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Goonj's "Rahat Covid" is providing essentials like ration
                    and hygiene material, with dignity, to daily wagers, migrant
                    workers and people struggling for the basics in the villages
                    of India amid this covid crisis.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://goonj.org/donate/?gclid=CjwKCAjwkN6EBhBNEiwADVfya9fHEkOa4tfPq3FsFqvCngE7I5Ld7klgIXkSNuI-X_pAnPu7WrwLoBoC39cQAvD_BwE">
                      Donate
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                Hemkunt Foundation
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    With over 2 million active cases currently, Hemkunt
                    foundation wants to increase their efforts this year by
                    helping people get oxygen supplies. You can help them.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.donatekart.com/Hemkunt-Foundation/Give-Oxygen-Cylinders/?gclid=CjwKCAjwkN6EBhBNEiwADVfyawS3KBknjY70F2Urj4-d6558bY7kzO76VvxJyusDelKDEILaHK9o5RoC7SAQAvD_BwE">
                      Donate
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200">
              <div className="tiles-item-inner">
                Feeding India by Zomato
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Providing hospitals and patients with oxygen and related
                    supplies. Help us save thousands of lives.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.feedingindia.org/donate/help-save-my-india#donate-section">
                      Donate
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
