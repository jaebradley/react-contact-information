import { configure } from '@storybook/react';

function loadStories() {
  require('../src/Service/Service.stories.js');
  require('../src/ContactInformation/ContactInformation.stories.js');
}

configure(loadStories, module);