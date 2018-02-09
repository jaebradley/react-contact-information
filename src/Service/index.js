import React from 'react';
import PropTypes from 'prop-types';

import {
  faAngellist,
  faBitbucket,
  faCodepen,
  faFacebook,
  faGithub,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands';

import { FONT_AWESOME_SIZE, SERVICE_TYPE, TARGET } from '../constants';
import ContactIcon from '../ContactIcon';

const iconValues = Object.freeze({
  [SERVICE_TYPE.ANGELLIST]: faAngellist,
  [SERVICE_TYPE.BITBUCKET]: faBitbucket,
  [SERVICE_TYPE.CODEPEN]: faCodepen,
  [SERVICE_TYPE.FACEBOOK]: faFacebook,
  [SERVICE_TYPE.GITHUB]: faGithub,
  [SERVICE_TYPE.TWITTER]: faTwitter,
});

const serviceDestinationPrefixes = Object.freeze({
  [SERVICE_TYPE.ANGELLIST]: 'https://angellist.com',
  [SERVICE_TYPE.BITBUCKET]: 'https://bitbucket.com',
  [SERVICE_TYPE.CODEPEN]: 'https://codepen.com',
  [SERVICE_TYPE.GITHUB]: 'https://github.com',
  [SERVICE_TYPE.FACEBOOK]: 'https://facebook.com',
  [SERVICE_TYPE.TWITTER]: 'https://twitter.com',
});

const getDestination = (username, serviceType) => (
  `${serviceDestinationPrefixes[serviceType]}/${username}`
);

const Service = ({ id, username, type, size, target, delay }) => (
  <ContactIcon {
    ...{
      id,
      size,
      target,
      delay,
      destination: getDestination(username, type),
      icon: iconValues[type],
      userIdentifier: `@${username}`,
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
};

Service.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(SERVICE_TYPE)).isRequired,
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
  target: PropTypes.oneOf(Object.keys(TARGET)),
  delay: PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number,
  }),
};

export default Service;