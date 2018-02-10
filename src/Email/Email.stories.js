import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Email from './index';
import README from './README.md';

const wrapComponent = (component) => (
  withInfo({ styles: bootstrap }, README)(() => component)
);

storiesOf('Email', module)
  .add('basic usage', wrapComponent(
    <Email id='email' to='jae.b.bradley@gmail.com' />
  ));