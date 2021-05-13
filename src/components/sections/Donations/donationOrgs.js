import React from 'react';
import classNames from 'classnames';

import OrgView from '../partials/orgView';

function DonationOrgs({pushLeft}) {
  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  return (
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
  );
}

export default DonationOrgs;
