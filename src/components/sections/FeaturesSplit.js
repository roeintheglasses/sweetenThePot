import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionSplitProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

import Image from '../elements/Image';
import vedArt from '../../assets/images/vedArt.jpg';
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
    paragraph:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua — Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link">
                      <a target="_blank" href="#dev">
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
                    src={require('./../../assets/images/features-split-image-01.png')}
                    alt="Features split 01"
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
                    Portfolio Template 2
                  </div>
                  <h3 className="mt-0 mb-12"> Designer Folio</h3>
                  <p className="m-0">
                    A Clean, Minimal and Unique portfolio for everyone.
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
                  <p className="m-0">A Clean, Minimal and Unique portfolio.</p>
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
              <div className="split-item">
                <div
                  className="split-item-content center-content-mobile "
                  data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Art
                  </div>
                  <h3 className="mt-0 mb-12">Digital Art by Ved</h3>
                  <p className="m-0">
                    Ved makes absolutest stunning digital portraits in his
                    unique Fast mask style.
                  </p>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link">
                      <a target="_blank" rel="noopener noreferrer" href="#dev">
                        Check him out
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
                    src={vedArt}
                    alt="Art-By-Ved"
                    width={528}
                    height={396}
                  />
                </div>
              </div>
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
