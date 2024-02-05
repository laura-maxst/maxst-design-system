// import React, { useEffect } from "react";
import type { Preview } from '@storybook/react';
// import '@styles/scss/main.scss';
import '@styles/storybookStyle.scss';
import { withThemeByClassName } from '@storybook/addon-styling';
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import storybookTheme from '../src/styles/storybook-theme';

// globalTypes으로 관리하는 theme 설정 관련 테스트 코드
// const MyTheme = {
//   light : "light",
//   dark : "dark",
// }
// const clearStyles = (element: HTMLElement, className: string) => {
//   element.classList.remove(className);
//   for (const className of Object.values(MyTheme)) {
//     element.classList.remove(className);
//   }
// };
// const applyStyle = (element: HTMLElement, className: string) => {
//   element.classList.add(className);
// };
// const WithThemeProvider = (Story, context) => {
//   useEffect(() => {
//     const body = window.document.body;
//     applyStyle(body, context.globals.theme ? context.globals.theme : 'light');
//     return () => {
//       clearStyles(body, context.globals.theme);
//     };
//   }, [context.globals.theme]);

//   return <Story />;
// };

const preview: Preview = {
  // globalTypes: {
  //   theme: {
  //     name: 'Theme',
  //     description: 'Global theme for components',
  //     defaultValue: 'light',
  //     toolbar: {
  //       icon: 'circlehollow',
  //       items: ['light', 'dark'],
  //       showName: true,
  //       dynamicTitle: true,
  //     },
  //   },
  // },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    // WithThemeProvider
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
      // defaultViewport: 'someDefault',
    },
  },
};

export default preview;
