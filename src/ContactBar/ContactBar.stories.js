import React from 'react';
import { storiesOf } from '@storybook/react';
import ContactBar from './index';
import ContactIcon from '../ContactIcon';
import { CONTACT_TYPE, FONT_AWESOME_SIZE } from '../constants';

storiesOf('ContactBar', module)
  .add('basic usage', () => (
    <ContactBar size={FONT_AWESOME_SIZE.TWO}>
      <ContactIcon location='https://bitbucket.com' type={CONTACT_TYPE.BITBUCKET} />
      <ContactIcon location='https://codepen.com' type={CONTACT_TYPE.CODEPEN} />
      <ContactIcon location='https://github.com' type={CONTACT_TYPE.GITHUB}/>
      <ContactIcon location='https://facebook.com' type={CONTACT_TYPE.FACEBOOK} />
      <ContactIcon location='https://twitter.com' type={CONTACT_TYPE.TWITTER} />
    </ContactBar>
  ));