import React from 'react';
// import sections
import Image from '../components/elements/Image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../components/elements/Button';
import classNames from 'classnames';
import thankYouImage from '../assets/images/thankYou.svg';

const Thanks = () => {
  const innerClasses = classNames('hero-inner section-inner', 'split-wrap');
  const outerClasses = classNames('hero section center-content');
  return (
    <section className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content split-item mt-16">
            <div
              className="split-item-content center-content-mobile reveal-from-left"
              data-reveal-container=".split-item">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200">
                Thank <span className="text-color-primary">You</span>
              </h1>
              <Button
                className="mt-12 mb-24"
                tag="a"
                color="dark"
                wideMobile
                href="/">
                Go Back
              </Button>
              <div
                className=" split-item-image hidden-desktop reveal-from-bottom illustration-element-01"
                data-reveal-value="20px"
                data-reveal-delay="800">
                <Image
                  src={thankYouImage}
                  alt="Hero"
                  width={500}
                  height={500}
                />
              </div>
              <h6
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200">
                Share us on social medial ⬇
              </h6>
              <div className="container-xs">
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <div className="footer-social">
                    <ul className="list-reset text-color-primary">
                      <li>
                        <a href="https://www.instagram.com/sweeten.the.pot/">
                          <FontAwesomeIcon
                            color={'#5658DD'}
                            icon={faInstagram}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://sweetenthepot.ml/">
                          <FontAwesomeIcon
                            color={'#5658DD'}
                            icon={faFacebook}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/intent/tweet?url=https://sweetenthepot.ml/&text=Sweeten%20The%20Pot">
                          <FontAwesomeIcon color={'#5658DD'} icon={faTwitter} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://sweetenthepot.ml/">
                          <FontAwesomeIcon
                            color={'#5658DD'}
                            icon={faLinkedin}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://pinterest.com/pin/create/button/?url=https://sweetenthepot.ml/&media=&description=Sweeten%20The%20Pot">
                          <FontAwesomeIcon
                            color={'#5658DD'}
                            icon={faPinterest}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className=" split-item-image hidden-mobile reveal-from-bottom illustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay="800">
              <Image
                className="has-shadow"
                src={thankYouImage}
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

export default Thanks;
