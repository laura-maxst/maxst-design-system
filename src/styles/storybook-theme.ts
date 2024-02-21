import { create } from '@storybook/theming/create';
import './fonts.css';

// storybook theme custom
export default create({
  base: 'light',

  fontBase: "'Pretendard', sans-serif",
  brandTitle: 'Maxst Design System',
  brandUrl: '',
  brandImage: '',
  brandTarget: '_self',

  // point color - *
  colorPrimary: '#1DD9E7',
  // side bar, toolbar select color, focus
  colorSecondary: '#0F9BB6',

  // UI
  // appBg: '',
  // appContentBg: '',
  // appBorderColor: '',
  appBorderRadius: 4,

  // 하단 control 영역
  // barTextColor: '#9E9E9E',
  barSelectedColor: '#0F9BB6',
  // barBg: '#ffffff',

  // addons form
  // inputBorder: '#1DD9E7',
  // inputTextColor: '#9b4dca',
});
