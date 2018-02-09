import React from 'react';
import { storiesOf } from '@storybook/react';
import ContactBar from './index';
import Service from '../Service';
import { SERVICE_TYPE, FONT_AWESOME_SIZE } from '../constants';

storiesOf('ContactBar', module)
  .add('basic usage', () => (
    <ContactBar size={FONT_AWESOME_SIZE.TWO}>
      <Service username='jaebradley' type={SERVICE_TYPE.BITBUCKET} />
      <Service username='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Service username='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service username='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service username='jaebradley' type={SERVICE_TYPE.TWITTER} />
    </ContactBar>
  ));