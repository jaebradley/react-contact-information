import React from 'react';
import { storiesOf } from '@storybook/react';
import Service from './index';
import { SERVICE_TYPE } from '../constants';

storiesOf('Service', module)
  .add('basic usage', () => (
    <Service id='github' username='jaebradley' type={SERVICE_TYPE.GITHUB} />
  ));