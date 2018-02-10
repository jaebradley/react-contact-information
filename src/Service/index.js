import React from 'react';
import PropTypes from 'prop-types';

import {
  faAngellist,
  faBitbucket,
  faCodepen,
  faFoursquare,
  faGithub,
  faGitlab,
  faGooglePlus,
  faFacebook,
  faInstagram,
  faLinkedin,
  faMedium,
  faGetPocket,
  faPinterest,
  faReddit,
  faSnapchat,
  faSpotify,
  faStackOverflow,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/fontawesome-free-brands';

import { FONT_AWESOME_SIZE, SERVICE_TYPE, TARGET, TOOLTIP_PLACEMENT } from '../constants';
import ContactIcon from '../ContactIcon';

// https://fontawesome.com/icons?d=gallery&s=brands
const iconValues = Object.freeze({
  [SERVICE_TYPE.ANGELLIST]: faAngellist,
  [SERVICE_TYPE.BITBUCKET]: faBitbucket,
  [SERVICE_TYPE.CODEPEN]: faCodepen,
  [SERVICE_TYPE.FACEBOOK]: faFacebook,
  [SERVICE_TYPE.FOURSQUARE]: faFoursquare,
  [SERVICE_TYPE.GITHUB]: faGithub,
  [SERVICE_TYPE.GITLAB]: faGitlab,
  [SERVICE_TYPE.GOOGLE_PLUS]: faGooglePlus,
  [SERVICE_TYPE.INSTAGRAM]: faInstagram,
  [SERVICE_TYPE.LINKEDIN]: faLinkedin,
  [SERVICE_TYPE.MEDIUM]: faMedium,
  [SERVICE_TYPE.POCKET]: faGetPocket,
  [SERVICE_TYPE.PINTEREST]: faPinterest,
  [SERVICE_TYPE.REDDIT]: faReddit,
  [SERVICE_TYPE.SNAPCHAT]: faSnapchat,
  [SERVICE_TYPE.SPOTIFY]: faSpotify,
  [SERVICE_TYPE.STACKOVERFLOW]: faStackOverflow,
  [SERVICE_TYPE.TWITTER]: faTwitter,
  [SERVICE_TYPE.WHATSAPP]: faWhatsapp,
  [SERVICE_TYPE.YOUTUBE]: faYoutube,
});

const serviceDestinationPrefixes = Object.freeze({
  [SERVICE_TYPE.ANGELLIST]: 'https://angellist.com',
  [SERVICE_TYPE.BITBUCKET]: 'https://bitbucket.com',
  [SERVICE_TYPE.CODEPEN]: 'https://codepen.com',
  [SERVICE_TYPE.FOURSQUARE]: 'https://foursquare.com/user',
  [SERVICE_TYPE.GITHUB]: 'https://github.com',
  [SERVICE_TYPE.GITLAB]: 'https://gitlab.com/',
  [SERVICE_TYPE.GOOGLE_PLUS]: 'https://plus.google.com',
  [SERVICE_TYPE.FACEBOOK]: 'https://facebook.com',
  [SERVICE_TYPE.INSTAGRAM]: 'https://www.instagram.com',
  [SERVICE_TYPE.LINKEDIN]: 'https://linkedin.com/in',
  [SERVICE_TYPE.MEDIUM]: 'https://medium.com',
  [SERVICE_TYPE.POCKET]: 'https://getpocket.com',
  [SERVICE_TYPE.PINTEREST]: 'https://pinterest.com',
  [SERVICE_TYPE.REDDIT]: 'https://reddit.com/u',
  [SERVICE_TYPE.SNAPCHAT]: 'https://snapchat.com/add',
  [SERVICE_TYPE.SPOTIFY]: 'https://open.spotify.com/user',
  [SERVICE_TYPE.STACKOVERFLOW]: 'https://stackoverflow.com/users',
  [SERVICE_TYPE.TWITTER]: 'https://twitter.com',
  [SERVICE_TYPE.WHATSAPP]: 'https://api.whatsapp.com/send?phone=',
  [SERVICE_TYPE.YOUTUBE]: 'https://youtube.com/channel',
});

const getDestination = (accountIdentifier, serviceType) => {
  const prefix = serviceDestinationPrefixes[serviceType];

  switch (serviceType) {
    case SERVICE_TYPE.WHATSAPP: {
      return `${prefix}${accountIdentifier}`;
    }

    default:
      return `${prefix}/${accountIdentifier}`;
  }
}

const Service = ({ id, accountIdentifier, type, size, target, delay, tooltipPlacement, showIdentifier }) => (
  <ContactIcon {
    ...{
      id,
      size,
      target,
      delay,
      tooltipPlacement,
      showIdentifier,
      identifier: accountIdentifier,
      destination: getDestination(accountIdentifier, type),
      icon: iconValues[type],
    }
  }/>
)

Service.defaultProps = {
  size: FONT_AWESOME_SIZE.ONE,
  target: TARGET.BLANK,
  delay: {
    show: 250,
    hide: 0,
  },
  tooltipPlacement: TOOLTIP_PLACEMENT.TOP,
  showIdentifier: false,
};

Service.propTypes = {
  id: PropTypes.string.isRequired,
  accountIdentifier: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(SERVICE_TYPE)).isRequired,
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
  target: PropTypes.oneOf(Object.keys(TARGET)),
  delay: PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number,
  }),
  tooltipPlacement: PropTypes.oneOf(Object.keys(TOOLTIP_PLACEMENT)),
  showIdentifier: PropTypes.bool,
};

export default Service;