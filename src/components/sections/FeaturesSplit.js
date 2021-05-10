import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionSplitProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import ArtistView from './partials/artistView';

import DevFolio from '../../assets/images/devFolio.png';
import vedArt from '../../assets/images/vedArt.jpg';
import chillyArt from '../../assets/images/chilly.png';
import UniFolio from '../../assets/images/UniFolio.png';
import DesignerFolio from '../../assets/images/designerFolio.png';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const [showPort, setShowPort] = useState(false);
  const [showArt, setShowArt] = useState(false);

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top',
    'mt-16',
  );

  const sectionHeader = {
    title: 'What is this ? ',
    paragraph: `Sweeten The Pot is a not-for-profit initiative taken by a few CS grads that aims to help raise money for Covid Relief. We give you an incentive for your charity.
      All you need to do is Donate an amount of ₹200 or more to one of the Covid Relief charities listed below and send a proof of your donation. In return, we will get you a stunning Portfolio website or a personalized art piece*.
      Here's a small gift to the selfless givers of our community. Keep giving, keep serving, keep donating, keep distancing and keep up the good work.
      We're in this together.`,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content">
            <br />
            <p style={{fontSize: 14}}>
              *more exciting incentives to come, keep an eye out for them on our
              social media platforms.
            </p>
            <h6>Check out stuff below ⬇</h6>
          </SectionHeader>

          <ButtonGroup className="splitButtonGroup mb-24">
            <Button
              className="commonButtons"
              color="dark"
              wideMobile
              onClick={() => {
                setShowPort(true);
                setShowArt(false);
              }}>
              Portfolios
            </Button>
            <Button
              className="commonButtons"
              color="dark"
              wideMobile
              onClick={() => {
                setShowPort(false);
                setShowArt(true);
              }}>
              Art
            </Button>
          </ButtonGroup>

          {showPort && (
            <div className={splitClasses}>
              <div className="split-item">
                <div
                  className="split-item-content center-content-mobile "
                  data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Portfolio Template 1
                  </div>
                  <h3 className="mt-0 mb-12"> Dev Folio</h3>
                  <p className="m-0">
                    A clean, beautiful and responsive portfolio for Developers,
                    by Developers.
                  </p>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link">
                      <a
                        target="_blank"
                        href="https://devfolio1.netlify.app/"
                        rel="noopener noreferrer">
                        Check it out
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
                  <Image
                    src={DevFolio}
                    alt="Features split 01"
                    width={528}
                    height={396}
                    imageFill={imageFill}
                  />
                </div>
              </div>

              <div className="split-item">
                <div
                  className="split-item-content center-content-mobile "
                  data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Portfolio Template 2
                  </div>
                  <h3 className="mt-0 mb-12"> Designer Folio</h3>
                  <p className="m-0">
                    A Minimal and Colorful single page portfolio for Designers.
                  </p>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://designerfolio1.netlify.app/">
                        Check it out
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
                  <Image
                    src={DesignerFolio}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  />
                </div>
              </div>

              <div className="split-item">
                <div
                  className="split-item-content center-content-mobile "
                  data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Portfolio Template 3
                  </div>
                  <h3 className="mt-0 mb-12"> Universal Folio</h3>
                  <p className="m-0">
                    A Clean, Minimal and Unique portfolio for Everyone.
                  </p>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://universalfolio1.netlify.app/">
                        Check it out
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className={classNames(
                    'split-item-image center-content-mobile',
                    imageFill && 'split-item-image-fill',
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={UniFolio}
                    alt="Features split 03"
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            </div>
          )}

          {showArt && (
            <div className={splitClasses}>
              <ArtistView
                type={'Custom Art'}
                title={'Digital Art by Ved'}
                desc={
                  'Ved makes stunning digital portraits in his unique Fast mask style.'
                }
                image={vedArt}
                link={'https://www.instagram.com/im_vedanshu/'}
              />
              <ArtistView
                type={'Custom Art'}
                title={'Digital Art by Chilly'}
                desc={`Chilly's beautiful canvas style gives life to digital art.`}
                image={chillyArt}
                limited={true}
                price={500}
                link={'https://sparshbajaj.me/'}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
