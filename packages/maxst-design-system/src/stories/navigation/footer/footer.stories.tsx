import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@components/footer';
import { Text } from '@components/text';
import { Button } from '@components/button';
import { Dropdown } from '@components/dropdown';
import { TextField } from '@components/textField';
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
      description: '약관 등의 링크이동을 지원합니다.\nlabel과 url을 ',
      control: {
        type: null,
      },
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
    url: '',
  },
  {
    label: '위치기반서비스 이용약관',
    url: '',
  },
  {
    label: '개인정보 취급방침',
    url: '',
  },
  {
    label: '오시는 길',
    url: '',
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
    termData: termData,
    topRightArea: <FooterTopRightBox />,
    bottomRightArea: <FooterBottomRightBox />,
  },
};
