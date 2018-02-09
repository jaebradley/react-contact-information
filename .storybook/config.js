import { configure } from '@storybook/react';

function loadStories() {
  require('../src/Service/Service.stories.js');
  require('../src/ContactBar/ContactBar.stories.js');
}

configure(loadStories, module);