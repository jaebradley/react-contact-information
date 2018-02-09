import React from 'react';
import mailtoLink from 'mailto-link';
import PropTypes from 'prop-types';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import emailPropType from 'email-prop-type';

import ContactIcon from '../ContactIcon';
import { FONT_AWESOME_SIZE, TARGET } from '../constants';

const Email = ({ to, cc, bcc, subject, body, target, size, id, delay }) => (
  <ContactIcon {
    ...{
      id,
      target,
      size,
      delay,
      destination: mailtoLink({ to, cc, bcc, subject, body }),
      icon: faEnvelope,
      userIdentifier: to,
    }
  }
  />
);

Email.defaultProps = {
  size: FONT_AWESOME_SIZE.ONE,
  target: TARGET.BLANK,
  delay: {
    show: 250,
    hide: 0,
  },
  cc: [],
  bcc: [],
  subject: '',
  body: '',
};

Email.propTypes = {
  id: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]).isRequired,
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
  target: PropTypes.oneOf(Object.keys(TARGET)),
  delay: PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number,
  }),
  cc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  bcc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  subject: PropTypes.string,
  body: PropTypes.string,
};

export default Email;
