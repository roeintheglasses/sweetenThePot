import React from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';
import {SectionTilesProps} from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import OrgView from '../partials/orgView';
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  pauseOnFocus: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
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
    paragraph: `Currently, We only support 6 verified covid relief organizations which are listed below. The list will keep getting updated as our team verifies more organizations as well. For now, all you need to do is donate an amount of ₹200 or more to any of the following organizations to receive a token of appreciation.`,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Slider {...settings}>
            <>
              <div className={tilesClasses}>
                <OrgView
                  title={'Goonj'}
                  desc={` Goonj's "Rahat Covid" is providing essentials like ration
                    and hygiene material, with dignity, to daily wagers, migrant
                    workers and people struggling for the basics in the villages
                    of India amid this covid crisis.`}
                  link={
                    'http://goonj.org/donate/?gclid=CjwKCAjwkN6EBhBNEiwADVfya9fHEkOa4tfPq3FsFqvCngE7I5Ld7klgIXkSNuI-X_pAnPu7WrwLoBoC39cQAvD_BwE'
                  }
                />
                <OrgView
                  title={'Hemkunt Foundation'}
                  desc={`  With over 2 million active cases currently, Hemkunt
              foundation wants to increase their efforts this year by
              helping people get oxygen supplies. You can help them.`}
                  link={
                    'https://www.donatekart.com/Hemkunt-Foundation/Give-Oxygen-Cylinders/?gclid=CjwKCAjwkN6EBhBNEiwADVfyawS3KBknjY70F2Urj4-d6558bY7kzO76VvxJyusDelKDEILaHK9o5RoC7SAQAvD_BwE'
                  }
                />
                <OrgView
                  title={'Feeding India by Zomato'}
                  desc={`Feeding India is providing hospitals and patients with oxygen and related
              supplies. Help them save thousands of lives.`}
                  link={
                    'http://goonj.org/donate/?gclid=CjwKCAjwkN6EBhBNEiwADVfya9fHEkOa4tfPq3FsFqvCngE7I5Ld7klgIXkSNuI-X_pAnPu7WrwLoBoC39cQAvD_BwE'
                  }
                />
              </div>
            </>
            <>
              <div className={tilesClasses}>
                <OrgView
                  title={'Act Grant'}
                  desc={` Act is centrally distributing oxygen on behalf of the entire Indian startup ecosystem while also partnering with the government to support their efforts in this crisis.`}
                  link={'https://actgrants.in/donate/'}
                />
                <OrgView
                  title={'Give India'}
                  desc={` Give India are providing sanitary napkins for women affected by the Pandemic.`}
                  link={'https://covid.giveindia.org/safeperiod/'}
                />
                <OrgView
                  title={'Paytm Foundation '}
                  desc={`Paytm Foundation is raising ₹14 crore to donate Oxygen Concentrators across India to patients who are in need of Oxygen supply right now. Paytm will match the contributions received through this initiative.`}
                  link={'https://paytm.com/offer/donate-oxygen'}
                />
              </div>
            </>
          </Slider>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
