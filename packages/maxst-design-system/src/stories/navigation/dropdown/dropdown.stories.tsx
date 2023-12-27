import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@components/dropdown';
import { TextField } from '@components/textField';
import { Button } from '@components/button';
import {
  ArrowDownLineIcon,
  CheckLineIcon,
  ArrowRightLineIcon,
  ArrowForwardCircleLineIcon,
  MobileLineIcon,
  MapLineIcon,
  DesktopLineIcon,
  FolderLineIcon,
  MoreVerticalLineIcon,
} from '@maxst-designsystem/icons';
import DropDownTextfield from './DropDownTextfield';
import DropDownMultiSelectText from './DropDownMultiSelectText';
import DropDownMultiSelectChip from './DropDownMultiSelectChip';
import DropDownWithControl from './DropDownWithControl';

const meta: Meta<typeof Dropdown> = {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '여러 개의 옵션 리스트 중 하나의 옵션을 선택할 시 활용합니다.',
      },
    },
  },
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
        'children으로 들어가는 component에 너비를 맞추고 싶을 때 `boolean`값으로 넘겨줍니다.',
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
    multiple: {
      description:
        '다중선택 옵션입니다. textfield와 함께 쓰여야 합니다. textfield의 renderValue옵션으로 `string` 혹은 chip 중 원하는 형태로 값을 넣어줄 수 있습니다.\n아래에서 Multi Select 예시들을 확인하세요.',
      control: {
        type: null,
      },
    },
    menuDirection: {
      description:
        '메뉴의 상하 정렬 설정 옵션으로 기본적으로 bottom이나 필요시 top으로 설정할 수 있습니다.',
    },
    onChange: {
      description:
        '선택된 메뉴의 data를 return 받습니다. \nmultiple mode일때는 배열 형태로 return 받습니다.',
    },
    onClick: {
      description: '클릭한 메뉴의 data를 return 받습니다.',
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
    iconLeft: <DesktopLineIcon />,
    iconRight: <ArrowRightLineIcon />,
  },
  {
    id: 'label-2',
    label: 'label 2',
    iconLeft: <MobileLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
  },
  {
    id: 'label-3',
    label: 'label 3',
    iconLeft: <MapLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-4',
    label: 'label 4',
    iconLeft: <FolderLineIcon />,
    iconRight: <ArrowForwardCircleLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-5',
    label: 'label 5',
    iconRight: <ArrowForwardCircleLineIcon />,
    disabled: true,
  },
  {
    id: 'label-6',
    label: 'label 6',
    iconRight: <ArrowForwardCircleLineIcon />,
  },
  {
    id: 'label-7',
    label: 'label 7',
    iconRight: <ArrowRightLineIcon />,
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
    menuDirection: 'bottom',
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

export const DropdownMultiSelectText: Story = {
  render: (args) => <DropDownMultiSelectText {...args} />,
  args: {
    menuData: menuData,
    onChange: onChangeMenu,
    onClick: onClickMenu,
    id: 'dropdown-textfield',
    isFullWidthMenu: true,
    className: 'dropdown-example',
    multiple: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
const DropDownMultiSelectText = ({
  menuData,
  onChange,
  onClick,
}: DropdownProps) => {
  const [labelValue, setLabelValue] = useState<any>('');
  const [selectData, setSelectData] = useState<any>(null);

  const resolveOnChage = (data: any) => {
    if (!onChange) {
      return;
    }
    onChange(data);
  };
  const resolveOnClick = (data: any) => {
    setSelectData(data);
    if (!onClick) {
      return;
    }
    onClick(data);
  };

  useEffect(() => {
    if (selectData) {
      const selectMenus: any[] = [];
      selectData.map((selectItem: any) => {
        return selectMenus.push(selectItem.label);
      });
      setLabelValue(selectMenus.join(', '));
    }
  }, [selectData]);

  return (
    <Dropdown
      menuData={menuData}
      onChange={resolveOnChage}
      onClick={resolveOnClick}
      id="dropdown-multiple-text"
      isFullWidthMenu={true}
      className="dropdown-example"
      multiple={true}
    >
      <TextField
        size="auto"
        helperText="helper text"
        value={labelValue && labelValue}
        id="dropdown-textfield-multiple-text"
        renderValue={labelValue}
        required={true}
        placeholder="placeholder"
        label="label"
        iconRight={<ArrowDownLineIcon />}
      />
    </Dropdown>
  );
};
          `,
      },
    },
  },
};

export const DropdownMultiSelectChip: Story = {
  render: (args) => <DropDownMultiSelectChip {...args} />,
  args: {
    menuData: menuData,
    onChange: onChangeMenu,
    onClick: onClickMenu,
    id: 'dropdown-multiple-chip',
    isFullWidthMenu: true,
    className: 'dropdown-example',
    multiple: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
const DropDownMultiSelectChip = ({
  menuData,
  onChange,
  onClick,
}: DropdownProps) => {
  const [labelValue, setLabelValue] = useState<any>('');
  const [selectData, setSelectData] = useState<any>([]);

  const resolveOnChage = (data: any) => {
    if (!onChange) {
      return;
    }
    onChange(data);
  };
  const resolveOnClick = (data: any) => {
    setSelectData(data);
    if (!onClick) {
      return;
    }
    onClick(data);
  };

  useEffect(() => {
    if (selectData && selectData.length !== 0) {
      const selectMenus: any[] = [];
      selectData.map((selectItem: any) => {
        return selectMenus.push(selectItem.label);
      });
      setLabelValue(selectMenus.join(', '));
    }
  }, [selectData]);

  return (
    <Dropdown
      menuData={menuData}
      onChange={resolveOnChage}
      onClick={resolveOnClick}
      id="dropdown-multiple-chip"
      isFullWidthMenu={true}
      className="dropdown-example"
      multiple={true}
    >
      <TextField
        size="auto"
        helperText="helper text"
        value={labelValue && labelValue}
        renderValue={
          <ChipGroup>
            {selectData.map((menuItem: { label: string; id: string }) => {
              return (
                <Chip type="color-blue" size="s" key={menuItem.id}>
                  {menuItem.label}
                </Chip>
              );
            })}
          </ChipGroup>
        }
        id="dropdown-textfield-multiple-chip"
        required={true}
        placeholder="placeholder"
        label="label"
        iconRight={<ArrowDownLineIcon />}
      />
    </Dropdown>
  );
};
          `,
      },
    },
  },
};

export const DropDownWithControls: Story = {
  render: (args) => <DropDownWithControl {...args} />,
  args: {
    menuData: menuData,
    onChange: onChangeMenu,
    onClick: onClickMenu,
    id: 'dropdown-width-checkbox',
    isFullWidthMenu: true,
    className: 'dropdown-example',
    multiple: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
const DropDownWithControl = ({ onChange, onClick }: DropdownProps) => {
  const [labelValue, setLabelValue] = useState<any>('');
  const [selectData, setSelectData] = useState<any>([]);

  const onIsSelectChecked = (id: string) => {
    return selectData.filter((item: any) => item.id === id).length === 1
      ? true
      : false;
  };

  const onIsSelectSwitch = (id: string) => {
    return selectData.filter((item: any) => item.id === id).length === 1
      ? true
      : false;
  };

  const menuData = [
    {
      id: 'label-0',
      label: 'label 0',
      iconLeft: (
        <Checkbox
          id="checkbox-0"
          size="l"
          checked={onIsSelectChecked('label-0')}
        />
      ),
      disabled: false,
      subLabel: 'more',
    },
    {
      id: 'label-1',
      label: 'label 1',
      iconLeft: (
        <Checkbox
          id="checkbox-1"
          size="l"
          checked={onIsSelectChecked('label-1')}
        />
      ),
      iconRight: <ArrowRightLineIcon />,
    },
    {
      id: 'label-2',
      label: 'label 2',
      iconLeft: (
        <Checkbox
          id="checkbox-2"
          size="l"
          checked={onIsSelectChecked('label-2')}
        />
      ),
      disabled: false,
      subLabel: 'more',
    },
    {
      id: 'label-3',
      label: 'label 3',
      iconRight: <Switch id="switch" checked={onIsSelectSwitch('label-3')} />,
      disabled: false,
    },
    {
      id: 'label-4',
      label: 'label 4',
      iconRight: <Switch id="switch" checked={onIsSelectSwitch('label-4')} />,
      disabled: false,
    },
    {
      id: 'label-5',
      label: 'label 5',
      iconRight: <Switch id="switch" checked={onIsSelectSwitch('label-5')} />,
      disabled: true,
    },
    {
      id: 'label-6',
      label: 'label 6',
      disabled: true,
      iconLeft: (
        <Checkbox
          id="checkbox-5"
          size="l"
          checked={onIsSelectChecked('label-6')}
        />
      ),
    },
    {
      id: 'label-7',
      label: 'label 7',
      iconLeft: (
        <Checkbox
          id="checkbox-6"
          size="l"
          checked={onIsSelectChecked('label-7')}
        />
      ),
    },
  ];

  const resolveOnChage = (data: any) => {
    if (!onChange) {
      return;
    }
    onChange(data);
  };
  const resolveOnClick = (data: any) => {
    setSelectData(data);

    if (!onClick) {
      return;
    }
    onClick(data);
  };

  useEffect(() => {
    if (selectData && selectData.length !== 0) {
      const selectMenus: any[] = [];
      selectData.map((selectItem: any) => {
        return selectMenus.push(selectItem.label);
      });
      setLabelValue(selectMenus.join(', '));
    }
  }, [selectData]);

  return (
    <Dropdown
      menuData={menuData}
      onChange={resolveOnChage}
      onClick={resolveOnClick}
      id="dropdown-multiple-control"
      isFullWidthMenu={true}
      className="dropdown-example"
      multiple={true}
    >
      <TextField
        size="auto"
        helperText="helper text"
        value={labelValue && labelValue}
        renderValue={
          <ChipGroup>
            {selectData.map((menuItem: { label: string; id: string }) => {
              return (
                <Chip type="color-purple" size="s" key={menuItem.id}>
                  {menuItem.label}
                </Chip>
              );
            })}
          </ChipGroup>
        }
        id="dropdown-textfield-multiple-control"
        required={true}
        placeholder="placeholder"
        label="label"
        iconRight={<ArrowDownLineIcon />}
      />
    </Dropdown>
  );
};
          `,
      },
    },
  },
};
