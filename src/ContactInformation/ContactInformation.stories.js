import React from 'react';
import {storiesOf} from '@storybook/react';

import ContactInformation from './index';
import Service from '../Service';
import Email from '../Email';
import {SERVICE_TYPE, FONT_AWESOME_SIZE} from '../constants';

storiesOf('ContactInformation', module)
  .add('basic usage, single row', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={6}>
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Email to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ))
  .add('multiple rows', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={3}>
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Email to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ))
  .add('font awesome size one', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.ONE}>
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Email to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ))
  .add('all services', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={12} >
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.BITBUCKET} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Service accountIdentifier='166227184' type={SERVICE_TYPE.FOURSQUARE} />
      <Service accountIdentifier='+JaeBradleyTest' type={SERVICE_TYPE.GOOGLE_PLUS} />
      <Service accountIdentifier='gitlab' type={SERVICE_TYPE.GITLAB} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service accountIdentifier='jae.b.bradley' type={SERVICE_TYPE.INSTAGRAM} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.LINKEDIN} />
      <Service accountIdentifier='@jaebradley' type={SERVICE_TYPE.MEDIUM} />
      <Service accountIdentifier='@jaebradley' type={SERVICE_TYPE.POCKET} />
      <Service accountIdentifier='ohjoy' type={SERVICE_TYPE.PINTEREST} />
      <Service accountIdentifier='spez' type={SERVICE_TYPE.REDDIT} />
      <Service accountIdentifier='@djkhaled305' type={SERVICE_TYPE.SNAPCHAT} />
      <Service accountIdentifier='124955558' type={SERVICE_TYPE.SPOTIFY} />
      <Service accountIdentifier='5225575' type={SERVICE_TYPE.STACKOVERFLOW} />
      <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service accountIdentifier='1234567890' type={SERVICE_TYPE.WHATSAPP} />
      <Service accountIdentifier='UCYUQQgogVeQY8cMQamhHJcg' type={SERVICE_TYPE.YOUTUBE} />
      <Email to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ))
  .add('show tooltip', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={12} >
      <Service showIdentifier accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB} />
      <Service showIdentifier accountIdentifier='arsenal' type={SERVICE_TYPE.INSTAGRAM} />
      <Service showIdentifier accountIdentifier='ohjoy' type={SERVICE_TYPE.PINTEREST} />
      <Service showIdentifier accountIdentifier='spez' type={SERVICE_TYPE.REDDIT} />
      <Service showIdentifier accountIdentifier='@djkhaled305' type={SERVICE_TYPE.SNAPCHAT} />
      <Email to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ));