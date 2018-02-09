import React from 'react';
import { storiesOf } from '@storybook/react';

import ContactInformation from './index';
import Service from '../Service';
import Email from '../Email';
import { SERVICE_TYPE, FONT_AWESOME_SIZE } from '../constants';

storiesOf('ContactInformation', module)
  .add('basic usage, single row', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={6}>
      <Service username='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
      <Service username='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service username='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service username='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service username='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Email to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ))
  .add('multiple rows', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={3}>
      <Service username='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
      <Service username='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service username='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service username='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service username='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Email to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ))
  .add('font awesome size one', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.ONE}>
      <Service username='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service username='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service username='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service username='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Email to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ));