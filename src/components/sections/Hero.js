import React from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';
import heroImage from '../../assets/images/heroImage.svg';
const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    'split-wrap',
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content split-item mt-16">
            <div
              className="split-item-content center-content-mobile reveal-from-left"
              data-reveal-container=".split-item">
              <h2
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200">
                Sweeten The <span className="text-color-primary">Pot</span>
              </h2>
              <div className="container-xs">
                <p
                  className="m-0 mb-32 reveal-from-prime"
                  data-reveal-delay="400">
                  We make, You donate.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <div
                    className=" split-item-image hidden-desktop reveal-from-bottom illustration-element-01"
                    data-reveal-value="20px"
                    data-reveal-delay="800">
                    <Image
                      className="has-shadow"
                      src={heroImage}
                      alt="Hero"
                      width={500}
                      height={500}
                    />
                  </div>

                  <Button
                    className="mt-12"
                    tag="a"
                    color="dark"
                    wideMobile
                    href="#signup">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>

            <div
              className=" split-item-image hidden-mobile reveal-from-bottom illustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay="800">
              <Image
                className="has-shadow"
                src={heroImage}
                alt="Hero"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
