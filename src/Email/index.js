import React, { Component } from 'react';
import mailtoLink from 'mailto-link';
import FontAwesome from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';
import emailPropType from 'email-prop-type';

import {
  faEnvelope,
} from '@fortawesome/fontawesome-free-solid';

import { FONT_AWESOME_SIZE, TARGET } from '../constants';

const targetValues = Object.freeze({
  [TARGET.BLANK]: '__blank',
  [TARGET.SELF]: '__self',
  [TARGET.PARENT]: '__parent',
  [TARGET.TOP]: '__top',
});

const sizeValues = Object.freeze({
  [FONT_AWESOME_SIZE.ONE]: '1x',
  [FONT_AWESOME_SIZE.TWO]: '2x',
  [FONT_AWESOME_SIZE.THREE]: '3x',
  [FONT_AWESOME_SIZE.FOUR]: '4x',
  [FONT_AWESOME_SIZE.FIVE]: '5x',
});

class Email extends Component {
  constructor(props) {
    super(props);

    this.toggleEmailAddress = this.toggleEmailAddress.bind(this);

    this.state = { showEmailAddress: false };
  }

  toggleEmailAddress() {
    this.setState({ showEmailAddress: !this.state.showEmailAddress });
  }

  render() {
    const { showEmailAddress } = this.state;
    const { to, cc, bcc, subject, body, target, size, id, delay } = this.props;

    return (
      <div>
        <a
          href={ mailtoLink({ to, cc, bcc, subject, body }) }
          target={ targetValues[target] }
        >
          <FontAwesome
            id={id}
            icon={ faEnvelope }
            size={ sizeValues[size] }
          />
        </a>
        <Tooltip
          className='email'
          placement='bottom'
          toggle={this.toggleEmailAddress}
          isOpen={showEmailAddress}
          target={id}
          delay={delay}
        >
          { to }
        </Tooltip>
      </div>
    );
  }
}

Email.defaultProps = {
  size: FONT_AWESOME_SIZE.ONE,
  target: TARGET.BLANK,
  delay: {
    show: 250,
    hide: 0,
  },
};

Email.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
  target: PropTypes.oneOf(Object.keys(TARGET)),
  delay: PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number,
  }),
  to: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  cc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  bcc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  subject: PropTypes.string,
  body: PropTypes.string,
};

export default Email;
