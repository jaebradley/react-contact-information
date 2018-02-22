import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Service from './index';
import { SERVICE_TYPE, FONT_AWESOME_SIZE } from '../constants';
import README from './README.md';

storiesOf('Service', module)
  .addDecorator((story, context) => withInfo({ styles: bootstrap }, README)(story)(context))
  .add('basic usage', () => (
    <Service
      id='github'
      username='jaebradley'
      accountIdentifier='jaebradley'
      type={SERVICE_TYPE.GITHUB}
    />
  ))
  .add('different font awesome sizes', () => (
    <div>
      <h3>fa-xs</h3>
      <Service
        id='xs-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.EXTRA_SMALL}
      />
      <h3>fa-s</h3>
      <Service
        id='s-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.SMALL}
      />
      <h3>fa-lg</h3>
      <Service
        id='lg-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.LARGE}
      />
      <h3>fa-1</h3>
      <Service
        id='1-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.ONE}
      />
      <h3>fa-2</h3>
      <Service
        id='2-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.TWO}
      />
      <h3>fa-3</h3>
      <Service
        id='3-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.THREE}
      />
      <h3>fa-4</h3>
      <Service
        id='4-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.FOUR}
      />
      <h3>fa-5</h3>
      <Service
        id='5-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.FIVE}
      />
      <h3>fa-6</h3>
      <Service
        id='6-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.SIX}
      />
      <h3>fa-7</h3>
      <Service
        id='7-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.SEVEN}
      />
      <h3>fa-8</h3>
      <Service
        id='8-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.EIGHT}
      />
      <h3>fa-9</h3>
      <Service
        id='9-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.NINE}
      />
      <h3>fa-10</h3>
      <Service
        id='10-size'
        username='jaebradley'
        accountIdentifier='jaebradley'
        type={SERVICE_TYPE.GITHUB}
        size={FONT_AWESOME_SIZE.TEN}
      />
    </div>
  ));