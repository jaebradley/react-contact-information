import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
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

const sizeValues = Object.freeze({
  [FONT_AWESOME_SIZE.ONE]: '1x',
  [FONT_AWESOME_SIZE.TWO]: '2x',
  [FONT_AWESOME_SIZE.THREE]: '3x',
  [FONT_AWESOME_SIZE.FOUR]: '4x',
  [FONT_AWESOME_SIZE.FIVE]: '5x',
});

const iconValues = Object.freeze({
  [SERVICE_TYPE.ANGELLIST]: faAngellist,
  [SERVICE_TYPE.BITBUCKET]: faBitbucket,
  [SERVICE_TYPE.CODEPEN]: faCodepen,
  [SERVICE_TYPE.FACEBOOK]: faFacebook,
  [SERVICE_TYPE.GITHUB]: faGithub,
  [SERVICE_TYPE.TWITTER]: faTwitter,
});

const targetValues = Object.freeze({
  [TARGET.BLANK]: '__blank',
  [TARGET.SELF]: '__self',
  [TARGET.PARENT]: '__parent',
  [TARGET.TOP]: '__top',
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

const Service = ({ username, type, size, target }) => (
  <a
    href={ getDestination(username, type) }
    target={ targetValues[target] }
  >
    <FontAwesome
      icon={ iconValues[type] }
      size={ sizeValues[size] }
    />
  </a>
)

Service.defaultProps = {
  size: FONT_AWESOME_SIZE.ONE,
  target: TARGET.BLANK,
};

Service.propTypes = {
  username: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(SERVICE_TYPE)).isRequired,
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
  target: PropTypes.oneOf(Object.keys(TARGET)),
};

export default Service;