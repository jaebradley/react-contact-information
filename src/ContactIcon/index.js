import React, { Component } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';

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

class ContactIcon extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = { show: false };
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { show } = this.state;
    const { destination, target, icon, size, id, delay, userIdentifier } = this.props;

    return (
      <div>
        <a
          href={ destination }
          target={ targetValues[target] }
        >
          <FontAwesome
            id={id}
            icon={ icon }
            size={ sizeValues[size] }
          />
        </a>
        <Tooltip
          placement='bottom'
          toggle={this.toggle}
          isOpen={show}
          target={id}
          delay={delay}
        >
          { userIdentifier }
        </Tooltip>
      </div>
    )
  }
}

ContactIcon.defaultProps = {
  size: FONT_AWESOME_SIZE.ONE,
  target: TARGET.BLANK,
  delay: {
    show: 250,
    hide: 0,
  },
};

ContactIcon.propTypes = {
  id: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  userIdentifier: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
  target: PropTypes.oneOf(Object.keys(TARGET)),
  delay: PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number,
  }),
};

export default ContactIcon;