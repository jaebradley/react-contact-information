import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import ContactInformation from './index';
import Service from '../Service';
import Email from '../Email';
import { SERVICE_TYPE, FONT_AWESOME_SIZE } from '../constants';
import README from './README.md';

storiesOf('ContactInformation', module)
  .addDecorator((story, context) => withInfo({ styles: bootstrap }, README)(story)(context))
  .add('basic usage, single row', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={6}>
      <Service id='angellist' accountIdentifier='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
      <Service id='github' accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service id='facebook' accountIdentifier='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service id='twitter' accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service id='codepen' accountIdentifier='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Email id='email' to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ))
  .add('multiple rows', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={3}>
      <Service id='angellist' accountIdentifier='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
      <Service id='github' accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service id='facebook' accountIdentifier='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service id='twitter' accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service id='codepen' accountIdentifier='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Email id='email' to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ))
  .add('font awesome size one', () => (
      <ContactInformation size={FONT_AWESOME_SIZE.ONE}>
        <Service id='angellist' accountIdentifier='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
        <Service id='github' accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB}/>
        <Service id='facebook' accountIdentifier='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
        <Service id='twitter' accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
        <Service id='codepen' accountIdentifier='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      </ContactInformation>
  ))
  .add('all services', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={12} >
      <Service id='angellist' accountIdentifier='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
      <Service id='github' accountIdentifier='jaebradley' type={SERVICE_TYPE.BITBUCKET} />
      <Service id='codepen' accountIdentifier='jaebradley' type={SERVICE_TYPE.CODEPEN} />
      <Service id='foursquare' accountIdentifier='166227184' type={SERVICE_TYPE.FOURSQUARE} />
      <Service id='google-plus' accountIdentifier='+JaeBradleyTest' type={SERVICE_TYPE.GOOGLE_PLUS} />
      <Service id='gitlab' accountIdentifier='gitlab' type={SERVICE_TYPE.GITLAB} />
      <Service id='github' accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB}/>
      <Service id='facebook' accountIdentifier='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
      <Service id='instagram' accountIdentifier='jae.b.bradley' type={SERVICE_TYPE.INSTAGRAM} />
      <Service id='linkedin' accountIdentifier='jaebradley' type={SERVICE_TYPE.LINKEDIN} />
      <Service id='medium' accountIdentifier='@jaebradley' type={SERVICE_TYPE.MEDIUM} />
      <Service id='pocket' accountIdentifier='@jaebradley' type={SERVICE_TYPE.POCKET} />
      <Service id='pinterest' accountIdentifier='ohjoy' type={SERVICE_TYPE.PINTEREST} />
      <Service id='reddit' accountIdentifier='spez' type={SERVICE_TYPE.REDDIT} />
      <Service id='snapchat' accountIdentifier='@djkhaled305' type={SERVICE_TYPE.SNAPCHAT} />
      <Service id='spotify' accountIdentifier='124955558' type={SERVICE_TYPE.SPOTIFY} />
      <Service id='stackoverflow' accountIdentifier='5225575' type={SERVICE_TYPE.STACKOVERFLOW} />
      <Service id='twitter' accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
      <Service id='whatsapp' accountIdentifier='1234567890' type={SERVICE_TYPE.WHATSAPP} />
      <Service id='youtube' accountIdentifier='UCYUQQgogVeQY8cMQamhHJcg' type={SERVICE_TYPE.YOUTUBE} />
      <Email id='email' to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ))
  .add('show tooltip', () => (
    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={6} >
      <Service id='github' showIdentifier accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB} />
      <Service id='instagram' showIdentifier accountIdentifier='arsenal' type={SERVICE_TYPE.INSTAGRAM} />
      <Service id='pinterest' showIdentifier accountIdentifier='ohjoy' type={SERVICE_TYPE.PINTEREST} />
      <Service id='reddit' showIdentifier accountIdentifier='spez' type={SERVICE_TYPE.REDDIT} />
      <Service id='snapchat' showIdentifier accountIdentifier='@djkhaled305' type={SERVICE_TYPE.SNAPCHAT} />
      <Email id='email' to='jae.b.bradley@gmail.com' />
    </ContactInformation>
  ));