/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@components/footer';
import { Text } from '@components/text';
import { Button } from '@components/button';
import { Dropdown } from '@components/dropdown';
import { TextField } from '@components/textField';
import type { SnsListDataType } from '@components/snsList';
import {
  ArrowDownLineIcon,
  ArrowForwardLineIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'footer 간편하게 구현할 수 있습니다.',
      },
    },
  },
  argTypes: {
    termData: {
      description:
        '약관 등의 링크이동을 지원합니다. onClick 함수로 기존 router 이동, 새탭 open 등 원하는 이벤트를 설정할 수 있습니다.',
      control: {
        type: null,
      },
    },
    snsData: {
      description: '선택 옵션으로 data 지정시 snsList가 설정됩니다.',
    },
    topRightArea: {
      description:
        'Footer의 상단 오른쪽 영역에 원하는 component를 설정할 수 있습니다.',
      control: {
        type: null,
      },
    },
    bottomRightArea: {
      description:
        'Footer의 하단 오른쪽 영역에 원하는 component를 설정할 수 있습니다.',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const termData = [
  {
    label: '위치정보사업 이용약관',
    onClick: () => console.log('위치정보사업 이용약관'),
  },
  {
    label: '위치기반서비스 이용약관',
    onClick: () => console.log('위치기반서비스 이용약관'),
  },
  {
    label: '개인정보 취급방침',
    onClick: () => console.log('개인정보 취급방침'),
  },
  {
    label: '오시는 길',
    onClick: () => console.log('오시는 길'),
  },
];

const snsData: SnsListDataType[] = [
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

const familySiteMenuData = [
  {
    id: 'family-site-01',
    label: 'family-site-01',
    iconRight: <ArrowForwardLineIcon />,
    disabled: true,
  },
  {
    id: 'family-site-02',
    label: 'family-site-02',
    iconRight: <ArrowForwardLineIcon />,
  },
  {
    id: 'family-site-03',
    label: 'family-site-03',
    iconRight: <ArrowForwardLineIcon />,
  },
];

const FooterTopRightBox = () => {
  return (
    <div className="footer-top-right-example">
      <Text type="body" size="l" role="sub" className="">
        [뉴스레터 & 이벤트 정보] MAXST 소식 구독
      </Text>
      <Button type="secondary" size="l" buttonWidth="150px">
        구독 신청
      </Button>
    </div>
  );
};

const FooterBottomRightBox = () => {
  return (
    <div className="footer-bottom-right-example">
      <Dropdown
        menuData={familySiteMenuData}
        id="dropdown-textfield"
        isFullWidthMenu={true}
        className="dropdown-example"
      >
        <TextField
          id={'footer-bottom-family-site'}
          required={true}
          placeholder="Family Site"
          iconRight={<ArrowDownLineIcon />}
          readOnly
        />
      </Dropdown>
    </div>
  );
};

export const FooterDefault: Story = {
  render: (args: any) => (
    <div className="Footer-box">
      <Footer {...args}></Footer>
    </div>
  ),
  args: {
    snsData: snsData,
    logo: <img src="/images/lib/footer_logo.png" alt="maxst logo" />,
    termData: termData,
    topRightArea: <div className="footer-top-right-sample"> </div>,
    bottomRightArea: <div className="footer-bottom-right-sample"> </div>,
  },
};

export const FooterCustom: Story = {
  render: (args: any) => (
    <div className="Footer-box">
      <Footer {...args}></Footer>
    </div>
  ),
  args: {
    logo: <img src="/images/lib/footer_logo.png" alt="maxst logo" />,
    termData: termData,
    topRightArea: <FooterTopRightBox />,
    bottomRightArea: <FooterBottomRightBox />,
    // snsData: snsData,
    addressData: [
      'address',
      'custom 가능',
      'string[]',
      '형태로',
      '설정 가능합니다.',
      '미 설정시',
      'maxst의 정보로',
      '기본 설정됩니다.',
    ],
  },
};
