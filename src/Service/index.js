import React, { Component } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';

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

class Service extends Component {
  constructor(props) {
    super(props);

    this.toggleUsername = this.toggleUsername.bind(this);

    this.state = { showUsername: false, timeoutId: null };
  }

  toggleUsername() {
    this.setState({ showUsername: !this.state.showUsername });
  }

  render() {
    const { showUsername } = this.state;
    const { id, username, type, size, target, delay } = this.props;

    return (
      <div className='service-icon-link'>
        <a
          href={ getDestination(username, type) }
          target={ targetValues[target] }
        >
          <FontAwesome
            id={id}
            icon={ iconValues[type] }
            size={ sizeValues[size] }
          />
        </a>
        <Tooltip
          className='username'
          placement='bottom'
          toggle={this.toggleUsername}
          isOpen={showUsername}
          target={id}
          delay={delay}
        >
          @{ username }
        </Tooltip>
      </div>
    );
  }
}

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