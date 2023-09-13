import type { Meta, StoryObj } from '@storybook/react';

import { BaseTypography } from './BaseTypography';

const meta: Meta<typeof BaseTypography> = {
  title: 'system/BaseTypography',
  component: BaseTypography,
};

export default meta;
type Story = StoryObj<typeof BaseTypography>;

const FontScaleData = [
  {
    scale: 'font-size-12',
  },
  {
    scale: 'font-size-14',
  },
  {
    scale: 'font-size-16',
  },
  {
    scale: 'font-size-18',
  },
  {
    scale: 'font-size-20',
  },
  {
    scale: 'font-size-24',
  },
  {
    scale: 'font-size-28',
  },
  {
    scale: 'font-size-32',
  },
  {
    scale: 'font-size-36',
  },
  {
    scale: 'font-size-40',
  },
];

const FontWeightData = [
  {
    weight: 'font-weight-semibold',
  },
  {
    weight: 'font-weight-medium',
  },
  {
    weight: 'font-weight-regular',
  },
];

// export const mint = {
//   args: {
//     color: 'palette-mint-900',
//   },
// };

const Palettes = (palette: { scale?: string; weight?: string }[]) => {
  return (
    <div className="font-box-wrap">
      {palette.map((item) => (
        <BaseTypography
          scale={item.scale}
          weight={item.weight}
          key={item.scale}
        />
      ))}
    </div>
  );
};

export const FontScales = {
  render: () => Palettes(FontScaleData),
  args: {
    scale: String([{ ...FontScaleData }]),
  },
};

export const FontWeights = {
  render: () => Palettes(FontWeightData),
  args: {
    weight: String([{ ...FontWeightData }]),
  },
};
