import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import Button from '../elements/Button';
// import Modal from "../elements/Modal";
import SignupForm from './SignupForm';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split',
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        {/* <Modal /> */}
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Donate & Sign Up</h3>
          </div>
          <div className="cta-action">
            <Button tag="a" color="dark" wideMobile href="#FormLink">
              Sign Up
            </Button>
          </div>
        </div>
        <SignupForm />
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
