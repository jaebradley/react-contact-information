import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Email from './index';
import README from './README.md';

storiesOf('Email', module)
  .addDecorator((story, context) => withInfo({ styles: bootstrap }, README)(story)(context))
  .add('basic usage', () => <Email id='email' to='jae.b.bradley@gmail.com' />);
