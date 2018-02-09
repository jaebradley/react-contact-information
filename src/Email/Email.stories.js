import React from 'react';
import { storiesOf } from '@storybook/react';
import Email from './index';

storiesOf('Email', module)
  .add('basic usage', () => (
    <Email id='email' to='jae.b.bradley@gmail.com' />
  ));