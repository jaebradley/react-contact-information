import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Service from './index';
import { SERVICE_TYPE } from '../constants';
import README from './README.md';

const wrapComponent = (component) => (
  withInfo({ styles: bootstrap }, README)(() => component)
);

storiesOf('Service', module)
  .add('basic usage', wrapComponent(
    <Service id='github' username='jaebradley' type={SERVICE_TYPE.GITHUB} />
  ));