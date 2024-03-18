import type { Meta, StoryObj } from '@storybook/react';
import { SnsList } from '@components/snsList';

const meta: Meta<typeof SnsList> = {
  title: 'Navigation/SnsList',
  component: SnsList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'sns list를 간편하게 구현할 수 있습니다.\nIcon은 현재 임시 Icon으로 적용되어 있습니다. BX 적용 icon 배포 후 교체 예정',
      },
    },
  },
  argTypes: {
    data: {
      description: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SnsList>;

const snsData: {
  type: 'facebook' | 'instagram' | 'youtube' | 'blog' | 'medium';
  url: string;
}[] = [
  {
    type: 'facebook',
    url: 'https://www.facebook.com/ARmaxst',
  },
  {
    type: 'instagram',
    url: 'https://www.instagram.com/armaxst/',
  },
  {
    type: 'youtube',
    url: 'https://www.youtube.com/user/ARmaxst',
  },
  {
    type: 'blog',
    url: 'https://blog.naver.com/armaxst',
  },
  {
    type: 'medium',
    url: 'https://medium.com/@maxst_tech',
  },
];

export const SnsListDefault: Story = {
  render: (args) => (
    <div className="SnsList-box">
      <SnsList {...args} />
    </div>
  ),
  args: {
    data: snsData,
  },
};
