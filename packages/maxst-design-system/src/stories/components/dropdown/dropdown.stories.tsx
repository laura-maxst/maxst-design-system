import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@components/dropdown';
import { TextField } from '@components/textField';
import { Button } from '@components/button';
import {
  ArrowDownLineIcon,
  CheckLineIcon,
  ArrowRightLineIcon,
  MoreVerticalLineIcon,
} from '@maxst-designsystem/icons';
import DropDownTextfield from './DropDownTextfield';

const meta: Meta<typeof Dropdown> = {
  title: 'components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        'input, button, icon button, text button 등 원하는 컴포넌트로 지정할 수 있습니다. 해당 상태는 해당 children에 들어가는 component 속성으로 관리합니다.',
      control: {
        type: null,
      },
    },
    size: {
      description:
        'children에 들어가는 component의 높이와 동일하게 지정합니다.',
    },
    align: {
      description: `dropdown menu option의 좌, 우, 센터 정렬을 설정합니다. 기본적으로 left 정렬을 지원합니다.`,
    },
    isFullWidthMenu: {
      description:
        'children으로 들어가는 component에 너비를 맞추고 싶을 때 boolean값으로 넘겨줍니다.',
    },
    menuData: {
      description: `\n
      {\n
        id: string;\n
        label: string;\n
        iconLeft?: JSX.Element | React.ReactNode;\n
        iconRight?: JSX.Element | React.ReactNode;\n
        disabled?: boolean;\n
        subLabel?: string;\n
      }[]`,
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const menuData = [
  {
    id: 'label-0',
    label: 'label 0',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-1',
    label: 'label 1',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: true,
    // subLabel: 'more',
  },
  {
    id: 'label-2',
    label: 'label 2',
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-3',
    label: 'label 3',
    iconLeft: <CheckLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-4',
    label: 'label 4',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    // subLabel: 'more',
  },
];

const onClickMenu = (data: any) => {
  console.log('click data', data);
};

const onChangeMenu = (data: any) => {
  console.log('change data', data);
};

export const DropdownWithInput: Story = {
  render: (args) => <DropDownTextfield {...args} />,
  args: {
    children: (
      <TextField
        helperText="helper text"
        required={true}
        placeholder="placeholder"
        label="label"
        iconRight={<ArrowDownLineIcon />}
      />
    ),
    menuData: menuData,
    onChange: onChangeMenu,
    onClick: onClickMenu,
    id: 'dropdown-textfield',
    isFullWidthMenu: true,
    className: 'dropdown-example',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Dropdown
          menuData={menuData}
          onChange={resolveOnChage}
          onClick={resolveOnClick}
          id="dropdown-textfield" 
          isFullWidthMenu={true}
          className="dropdown-example"
        >
          <TextField
            helperText="helper text"
            value={labelValue && labelValue}
            id={idValue && idValue}
            required={true}
            placeholder="placeholder"
            label="label"
            iconRight={<ArrowDownLineIcon />}
          />
        </Dropdown>
        `,
      },
    },
  },
};

export const DropdownWithButton: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <Button type="primary" size="l" iconRight={<ArrowDownLineIcon />}>
        dropdown
      </Button>
    </Dropdown>
  ),
  args: {
    children: (
      <Button type="primary" size="l">
        dropdown
      </Button>
    ),
    menuData: menuData,
    onChange: onChangeMenu,
    onClick: onClickMenu,
    id: 'dropdown-button',
    className: 'dropdown-example',
  },
};

export const DropdownWithIconButton: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <Button
        type="primary"
        size="l"
        iconOnly={<MoreVerticalLineIcon />}
        isIconMode={true}
      >
        more
      </Button>
    </Dropdown>
  ),
  args: {
    children: (
      <Button type="primary" size="l">
        dropdown
      </Button>
    ),
    menuData: menuData,
    onChange: onChangeMenu,
    onClick: onClickMenu,
    align: 'right',
    id: 'dropdown-icon-button',
    className: 'dropdown-example',
  },
};
