import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: true,
  header: true,
  source: true,
});

setTimeout(() => setOptions({
  name: 'REACT CONTACT INFORMATION',
  url: 'https://github.com/jaebradley/react-contact-information',
  showDownPanel: true,
  downPanelInRight: true,
}), 1000);

function loadStories() {
  require('../src/ContactInformation/ContactInformation.stories.js');
  require('../src/Service/Service.stories.js');
  require('../src/Email/Email.stories.js');
}

configure(loadStories, module);