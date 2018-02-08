import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

import {
  faAngellist,
  faBitbucket,
  faCodepen,
  faFacebook,
  faGithub,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands';

import { FONT_AWESOME_SIZE, CONTACT_TYPE, TARGET } from '../constants';

const sizeValues = Object.freeze({
  [FONT_AWESOME_SIZE.ONE]: '1x',
  [FONT_AWESOME_SIZE.TWO]: '2x',
  [FONT_AWESOME_SIZE.THREE]: '3x',
  [FONT_AWESOME_SIZE.FOUR]: '4x',
  [FONT_AWESOME_SIZE.FIVE]: '5x',
});

const iconValues = Object.freeze({
  [CONTACT_TYPE.ANGELLIST]: faAngellist,
  [CONTACT_TYPE.BITBUCKET]: faBitbucket,
  [CONTACT_TYPE.CODEPEN]: faCodepen,
  [CONTACT_TYPE.FACEBOOK]: faFacebook,
  [CONTACT_TYPE.GITHUB]: faGithub,
  [CONTACT_TYPE.TWITTER]: faTwitter,
});

const targetValues = Object.freeze({
  [TARGET.BLANK]: '__blank',
  [TARGET.SELF]: '__self',
  [TARGET.PARENT]: '__parent',
  [TARGET.TOP]: '__top',
})

const ContactIcon = ({ location, type, size, target }) => (
  <a
    href={ location }
    target={ targetValues[target] }
  >
    <FontAwesome
      icon={ iconValues[type] }
      size={ sizeValues[size] }
    />
  </a>
)

ContactIcon.defaultProps = {
  size: FONT_AWESOME_SIZE.ONE,
  target: TARGET.BLANK,
};

ContactIcon.propTypes = {
  location: urlPropType.isRequired,
  type: PropTypes.oneOf(Object.keys(CONTACT_TYPE)).isRequired,
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
  target: PropTypes.oneOf(Object.keys(TARGET)),
};

export default ContactIcon;