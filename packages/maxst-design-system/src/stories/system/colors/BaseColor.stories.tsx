import type { Meta, StoryObj } from '@storybook/react';
import { BaseColor } from './BaseColor';
import { Text } from '@components/text';
import {
  palettePrimaryData,
  paletteSecondaryData,
  paletteGrayData,
  paletteSubData,
  paletteBlueData,
  paletteMagentaData,
  palettePurpleData,
} from './BaseColorData';

const meta: Meta<typeof BaseColor> = {
  title: 'system/BaseColor',
  component: BaseColor,
};

export default meta;
type Story = StoryObj<typeof BaseColor>;

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
  render: () => Palettes('primary-palette', palettePrimaryData),
};
export const SecondaryPalette = {
  render: () => Palettes('secondary-palette', paletteSecondaryData),
};

export const GrayPalette = {
  render: () => Palettes('gray-palette', paletteGrayData),
};

export const SubPalette = {
  render: () => Palettes('sub-palette', paletteSubData),
};

export const BluePalette = {
  render: () => Palettes('blue-palette', paletteBlueData),
};

export const MagentaPalette = {
  render: () => Palettes('magenta-palette', paletteMagentaData),
};

export const PurplePalette = {
  render: () => Palettes('purple-palette', palettePurpleData),
};
