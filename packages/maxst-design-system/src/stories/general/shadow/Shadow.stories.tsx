import type { Meta, StoryObj } from '@storybook/react';

import { ShadowBox } from './ShadowBox';
import { Container } from '@components/container';
import { Dropdown } from '@components/dropdown';
import { TextField } from '@components/textField';
import {
  ArrowDownLineIcon,
  CheckLineIcon,
  ArrowRightLineIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof ShadowBox> = {
  title: 'general/Shadow',
  component: ShadowBox,
};

export default meta;
type Story = StoryObj<typeof ShadowBox>;

export const Shadow = {
  render: () => (
    <Container>
      <Dropdown
        menuData={menuData}
        onClick={() => console.log('click')}
        id="dropdown-textfield"
        isFullWidthMenu={true}
        className="form-dropdown"
      >
        <TextField
          helperText="Please select an option."
          id="dropdown-sample"
          placeholder="placeholder"
          label="shadow를 보여주기 위한 dropdown"
          iconRight={<ArrowDownLineIcon />}
        />
      </Dropdown>
    </Container>
  ),
};

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
