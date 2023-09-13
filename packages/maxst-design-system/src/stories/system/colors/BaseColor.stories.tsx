import type { Meta, StoryObj } from '@storybook/react';

import { BaseColor } from './BaseColor';
import { Text } from '@components/text';

const meta: Meta<typeof BaseColor> = {
  title: 'system/BaseColor',
  component: BaseColor,
};

export default meta;
type Story = StoryObj<typeof BaseColor>;

const paletteMintData = [
  {
    color: 'palette-mint-900',
    light: {
      color: '#fff',
      bgColor: '#0F9BB6',
    },
    dark: {
      color: '#222',
      bgColor: '#DDF9FB',
    },
  },
  {
    color: 'palette-mint-800',
    light: {
      color: '#fff',
      bgColor: '#0EADCA',
    },
    dark: {
      color: '#222',
      bgColor: '#BBF4F8',
    },
  },
  {
    color: 'palette-mint-700',
    light: {
      color: '#fff',
      bgColor: '#0FBED7',
    },
    dark: {
      color: '#222',
      bgColor: '#99EEF4',
    },
  },
  {
    color: 'palette-mint-600',
    light: {
      color: '#fff',
      bgColor: '#0FCBDD',
    },
    dark: {
      color: '#222',
      bgColor: '#73E7F0',
    },
  },
  {
    color: 'palette-mint-500',
    light: {
      color: '#fff',
      bgColor: '#1DD9E7',
    },
    dark: {
      color: '#222',
      bgColor: '#43DFEB',
    },
    // light: '#73E7F0',
    // dark: '#43DFEB',
    // fontColor: '#353535',
  },
  {
    color: 'palette-mint-400',
    light: {
      color: '#222',
      bgColor: '#43DFEB',
    },
    dark: {
      color: '#fff',
      bgColor: '#1DD9E7',
    },
  },
  {
    color: 'palette-mint-300',
    light: {
      color: '#222',
      bgColor: '#73E7F0',
    },
    dark: {
      color: '#fff',
      bgColor: '#0FCBDD',
    },
  },
  {
    color: 'palette-mint-200',
    light: {
      color: '#222',
      bgColor: '#99EEF4',
    },
    dark: {
      color: '#fff',
      bgColor: '#0FBED7',
    },
  },
  {
    color: 'palette-mint-100',
    light: {
      color: '#222',
      bgColor: '#BBF4F8',
    },
    dark: {
      color: '#fff',
      bgColor: '#0EADCA',
    },
  },
  {
    color: 'palette-mint-50',
    light: {
      color: '#222',
      bgColor: '#DDF9FB',
    },
    dark: {
      color: '#fff',
      bgColor: '#0F9BB6',
    },
  },
];

const paletteGrayData = [
  {
    color: 'palette-gray-900',
    light: {
      color: '#fff',
      bgColor: '#222222',
    },
    dark: {
      color: '#222',
      bgColor: '#FDFDFD',
    },
  },
  {
    color: 'palette-gray-800',
    light: {
      color: '#fff',
      bgColor: '#424242',
    },
    dark: {
      color: '#222',
      bgColor: '#E9E9E9',
    },
  },
  {
    color: 'palette-gray-700',
    light: {
      color: '#fff',
      bgColor: '#606060',
    },
    dark: {
      color: '#222',
      bgColor: '#D9D9D9',
    },
  },
  {
    color: 'palette-gray-600',
    light: {
      color: '#fff',
      bgColor: '#818181',
    },
    dark: {
      color: '#222',
      bgColor: '#C0C0C0',
    },
  },
  {
    color: 'palette-gray-500',
    light: {
      color: '#fff',
      bgColor: '#9E9E9E',
    },
    dark: {
      color: '#222',
      bgColor: '#A3A3A3',
    },
  },
  {
    color: 'palette-gray-400',
    light: {
      color: '#222',
      bgColor: '#C2C2C2',
    },
    dark: {
      color: '#fff',
      bgColor: '#8E8E8E',
    },
  },
  {
    color: 'palette-gray-300',
    light: {
      color: '#222',
      bgColor: '#DEDEDE',
    },
    dark: {
      color: '#fff',
      bgColor: '#4F4F50',
    },
  },
  {
    color: 'palette-gray-200',
    light: {
      color: '#222',
      bgColor: '#F0F0F0',
    },
    dark: {
      color: '#fff',
      bgColor: '#343434',
    },
  },
  {
    color: 'palette-gray-100',
    light: {
      color: '#222',
      bgColor: '#F5F5F5',
    },
    dark: {
      color: '#fff',
      bgColor: '#272626',
    },
  },
  {
    color: 'palette-gray-50',
    light: {
      color: '#222',
      bgColor: '#FAFAFA',
    },
    dark: {
      color: '#fff',
      bgColor: '#141212',
    },
  },
];

const paletteSubData = [
  {
    color: 'palette-red',
    light: {
      color: '#fff',
      bgColor: '#EA1B1B',
    },
    dark: {
      color: '#fff',
      bgColor: '#EE3B3B',
    },
  },
  {
    color: 'palette-red-accent',
    light: {
      color: '#fff',
      bgColor: '#D80516',
    },
    dark: {
      color: '#fff',
      bgColor: '#E70F21',
    },
  },
  {
    color: 'palette-red-light',
    light: {
      color: '#222',
      bgColor: '#FFE9E9',
    },
    dark: {
      color: '#fff',
      bgColor: '#4E0B0B',
    },
  },
  {
    color: 'palette-orange',
    light: {
      color: '#fff',
      bgColor: '#F97F0E',
    },
    dark: {
      color: '#fff',
      bgColor: '#F98D0E',
    },
  },
  {
    color: 'palette-orange-light',
    light: {
      color: '#222',
      bgColor: '#FFEBD0',
    },
    dark: {
      color: '#fff',
      bgColor: '#4D2E06',
    },
  },
  {
    color: 'palette-green',
    light: {
      color: '#fff',
      bgColor: '#00C400',
    },
    dark: {
      color: '#fff',
      bgColor: '#03CD03',
    },
  },
  {
    color: 'palette-green-light',
    light: {
      color: '#222',
      bgColor: '#DBF1DB',
    },
    dark: {
      color: '#fff',
      bgColor: '#073207',
    },
  },
  {
    color: 'palette-blue',
    light: {
      color: '#fff',
      bgColor: '#109EFF',
    },
    dark: {
      color: '#fff',
      bgColor: '#24A6FF',
    },
  },
  {
    color: 'palette-blue-light',
    light: {
      color: '#222',
      bgColor: '#CEF1FF',
    },
    dark: {
      color: '#fff',
      bgColor: '#023245',
    },
  },
  {
    color: 'palette-purple',
    light: {
      color: '#fff',
      bgColor: '#E59BFF',
    },
    dark: {
      color: '#fff',
      bgColor: '#E394FF',
    },
  },
  {
    color: 'palette-magenta',
    light: {
      color: '#fff',
      bgColor: '#F567AC',
    },
    dark: {
      color: '#fff',
      bgColor: '#F86FB1',
    },
  },
];

// export const mint = {
//   args: {
//     color: 'palette-mint-900',
//   },
// };

const Palettes = (
  paletteType: string,
  palette: {
    color: string;
    light: {
      color: string;
      bgColor: string;
    };
    dark: {
      color: string;
      bgColor: string;
    };
  }[],
) => {
  return (
    <div className={['color-box-wrap', paletteType && paletteType].join(' ')}>
      <ul className="color-palette__list">
        {palette.map((item) => (
          <li key={item.color}>
            <Text type="body" size="s">
              {item.color}
            </Text>
            <BaseColor
              color={item.light.bgColor}
              fontColor={item.light.color}
            />
            <BaseColor color={item.dark.bgColor} fontColor={item.dark.color} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const PrimaryPalette = {
  render: () => Palettes('primary-palette', paletteMintData),
};

export const GrayPalette = {
  render: () => Palettes('gray-palette', paletteGrayData),
};

export const SubPalette = {
  render: () => Palettes('sub-palette', paletteSubData),
};
