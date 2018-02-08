import React from 'react';
import { storiesOf } from '@storybook/react';
import ContactIcon from './index';
import { CONTACT_TYPE } from '../constants';

storiesOf('ContactIcon', module)
  .add('basic usage', () => (
    <ContactIcon location='https://github.com/jaebradley' type={CONTACT_TYPE.GITHUB} />
  ));