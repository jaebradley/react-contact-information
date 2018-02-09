import React from 'react';
import { storiesOf } from '@storybook/react';

import ContactInformation from './index';
import Service from '../Service';
import Email from '../Email';
import { SERVICE_TYPE, FONT_AWESOME_SIZE } from '../constants';

storiesOf('ContactInformation', module)
  .add('basic usage', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={3}>
      <Service username='jaebradley' type={SERVICE_TYPE.BITBUCKET} />
      <Service username='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Service username='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service username='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service username='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Email to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ));