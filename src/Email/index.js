import React from 'react';
import mailtoLink from 'mailto-link';
import PropTypes from 'prop-types';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import emailPropType from 'email-prop-type';
import classNames from 'classnames';

import ContactIcon from '../ContactIcon';
import { FONT_AWESOME_SIZE, TARGET, TOOLTIP_PLACEMENT } from '../constants';

const Email = ({ to, cc, bcc, subject, body, target, size, id, delay, tooltipPlacement, showIdentifier, className, ...other }) => (
  <ContactIcon
    { ...other }
    {
      ...{
        id,
        target,
        size,
        delay,
        tooltipPlacement,
        className: classNames(className, 'contact-email'),
        destination: mailtoLink({ to, cc, bcc, subject, body }),
        icon: faEnvelope,
        identifier: to,
        showIdentifier,
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
  tooltipPlacement: TOOLTIP_PLACEMENT.TOP,
  showIdentifier: true,
  className: '',
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
  tooltipPlacement: PropTypes.oneOf(Object.keys(TOOLTIP_PLACEMENT)),
  showIdentifier: PropTypes.bool,
  className: PropTypes.string,
};

export default Email;
