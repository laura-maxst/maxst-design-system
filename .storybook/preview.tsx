import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/storybookStyle.scss';
import { withThemeByClassName } from '@storybook/addon-styling';
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import storybookTheme from '../src/styles/storybook-theme';

import { pretendard } from '../src/util/fonts';

const preview: Preview = {
  decorators: [
    // (Story) => (
    //   <main
    //     className={[
    //       pretendard.className,
    //       pretendard.variable,
    //       'font-pretendard',
    //     ].join(' ')}
    //   >
    //     <Story />
    //   </main>
    // ),
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: storybookTheme,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
