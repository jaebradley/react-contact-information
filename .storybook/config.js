import { configure } from '@storybook/react';

function loadStories() {
  require('../src/ContactIcon/ContactIcon.stories.js');
  require('../src/ContactBar/ContactBar.stories.js');
}

configure(loadStories, module);