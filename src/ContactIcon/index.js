import React, { Component } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';
import classNames from 'classnames';

import { FONT_AWESOME_SIZE, TARGET, TOOLTIP_PLACEMENT } from '../constants';

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
  [FONT_AWESOME_SIZE.SIX]: '6x',
  [FONT_AWESOME_SIZE.SEVEN]: '7x',
  [FONT_AWESOME_SIZE.EIGHT]: '8x',
  [FONT_AWESOME_SIZE.NINE]: '9x',
  [FONT_AWESOME_SIZE.TEN]: '10x',
  [FONT_AWESOME_SIZE.EXTRA_SMALL]: 'xs',
  [FONT_AWESOME_SIZE.SMALL]: 'sm',
  [FONT_AWESOME_SIZE.LARGE]: 'lg',
});

const tooltipPlacementValues = Object.freeze({
  [TOOLTIP_PLACEMENT.AUTO]: 'auto',
  [TOOLTIP_PLACEMENT.AUTO_START]: 'auto-start',
  [TOOLTIP_PLACEMENT.AUTO_END]: 'auto-end',
  [TOOLTIP_PLACEMENT.BOTTOM]: 'bottom',
  [TOOLTIP_PLACEMENT.BOTTOM_START]: 'bottom-start',
  [TOOLTIP_PLACEMENT.BOTTOM_END]: 'bottom-end',
  [TOOLTIP_PLACEMENT.LEFT]: 'left',
  [TOOLTIP_PLACEMENT.LEFT_START]: 'left-start',
  [TOOLTIP_PLACEMENT.LEFT_END]: 'left-end',
  [TOOLTIP_PLACEMENT.RIGHT]: 'right',
  [TOOLTIP_PLACEMENT.RIGHT_START]: 'right-start',
  [TOOLTIP_PLACEMENT.RIGHT_END]: 'right-end',
  [TOOLTIP_PLACEMENT.TOP]: 'top',
  [TOOLTIP_PLACEMENT.TOP_START]: 'top-start',
  [TOOLTIP_PLACEMENT.TOP_END]: 'top-end',
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
    const {
      destination,
      target,
      icon,
      size,
      id,
      delay,
      identifier,
      tooltipPlacement,
      showIdentifier,
      className,
      ...other
    } = this.props;

    return (
      <div
        { ...other }
        className={ classNames(className, 'contact-information') }
      >
        <a
          className={ 'contact-link' }
          href={ destination }
          target={ targetValues[target] }
        >
          <FontAwesome
            id={ id }
            className={ 'contact-icon' }
            icon={ icon }
            size={ sizeValues[size] }
          />
        </a>
        { showIdentifier &&
          <Tooltip
            className={ 'contact-link-tooltip' }
            placement={ tooltipPlacementValues[tooltipPlacement] }
            toggle={ this.toggle }
            isOpen={ show }
            target={ id }
            delay={ delay }
          >
            { identifier }
          </Tooltip>
        }
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
  tooltipPlacement: TOOLTIP_PLACEMENT.TOP,
  showIdentifier: false,
  className: '',
};

ContactIcon.propTypes = {
  id: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  identifier: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
  target: PropTypes.oneOf(Object.keys(TARGET)),
  delay: PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number,
  }),
  tooltipPlacement: PropTypes.oneOf(Object.keys(TOOLTIP_PLACEMENT)),
  showIdentifier: PropTypes.bool,
  className: PropTypes.string,
};

export default ContactIcon;