import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

setDefaults({
  inline: false,
  header: true,
  source: true,
});

setTimeout(() => setOptions({
  name: 'REACT CONTACT INFORMATION',
  url: 'https://github.com/jaebradley/react-contact-information',
  showAddonPanel: true,
  addonPanelInRight: true,
}), 1000);

function loadStories() {
  require('../src/ContactInformation/ContactInformation.stories.js');
  require('../src/Service/Service.stories.js');
  require('../src/Email/Email.stories.js');
}


addDecorator(centered);
addDecorator(checkA11y);

configure(loadStories, module);