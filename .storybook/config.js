import { configure } from '@storybook/react';

function loadStories() {
  require('../src/ContactInformation/ContactInformation.stories.js');
  require('../src/Service/Service.stories.js');
  require('../src/Email/Email.stories.js');
}

configure(loadStories, module);