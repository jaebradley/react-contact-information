import { SERVICE_TYPE } from '../constants';

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

export default getDestination;