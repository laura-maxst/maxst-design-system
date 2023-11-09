import { addons } from '@storybook/manager-api';
import storybookTheme from '../src/styles/storybook-theme';

addons.setConfig({
  theme: storybookTheme,
});