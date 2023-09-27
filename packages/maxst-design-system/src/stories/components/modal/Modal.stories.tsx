import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@components/modal';
import { BaseModalExampleType1 } from './BaseModalExampleType1';
import { BaseModalExampleType2 } from './BaseModalExampletype2';
import { NotificationLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        'string으로 넘기면 자동으로 Text Component로 적용됩니다.그 외의 형태는 컴포넌트 형태로 넘길 수 있습니다. ',
    },
    titleIcon: {
      description: 'modal header영역에서 title 상단에 위치하는 icon',
      control: {
        type: null,
      },
    },
    titleImage: {
      description: 'modal header영역에서 title 상단에 위치하는 image',
      control: {
        type: null,
      },
    },
    buttonPrimary: {
      description: 'buttonError와 둘 중 하나만 사용됩니다.',
      control: {
        type: null,
      },
    },
    buttonError: {
      description: 'buttonPrimary와 둘 중 하나만 사용됩니다.',
      control: {
        type: null,
      },
    },
    buttonSecondary: {
      control: {
        type: null,
      },
    },
    buttonGhost: {
      control: {
        type: null,
      },
    },
    open: {
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const BaseModalPrimaryButtonVersion: Story = {
  render: (args) => <BaseModalExampleType1 {...args} />,
  args: {
    children: 'Modal',
    title: 'Title',
    size: 's',
    buttonPrimary: { text: 'primary', onClick: () => console.log('primary') },
    buttonSecondary: {
      text: 'secondary',
      onClick: () => console.log('secondary'),
    },
    buttonGhost: { text: 'ghost', onClick: () => console.log('ghost') },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<div className="modal-example">
  <Button size="l" type="primary" onClick={onOpenModal}>
    open modal
  </Button>
  <Modal {...props} open={isOpen} onClose={onCloseModal}>
    {props.children}
  </Modal>
</div>
        `,
      },
    },
  },
};

export const BaseModalErrorButtonVersion: Story = {
  render: (args) => <BaseModalExampleType1 {...args} />,
  args: {
    children: 'Modal',
    title: 'Title',
    size: 's',
    buttonError: { text: 'Error', onClick: () => console.log('Error') },
    buttonSecondary: {
      text: 'secondary',
      onClick: () => console.log('secondary'),
    },
    buttonGhost: { text: 'ghost', onClick: () => console.log('ghost') },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<div className="modal-example">
  <Button size="l" type="primary" onClick={onOpenModal}>
    open modal
  </Button>
  <Modal {...props} open={isOpen} onClose={onCloseModal}>
    {props.children}
  </Modal>
</div>
        `,
      },
    },
  },
};

export const BaseModalScollbar: Story = {
  render: (args) => <BaseModalExampleType2 {...args} />,
  args: {
    children: 'Modal',
    title: 'Title',
    size: 'xl',
    buttonPrimary: { text: 'primary', onClick: () => console.log('primary') },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<div className="modal-example">
  <Button size="l" type="primary" onClick={onOpenModal}>
    open modal
  </Button>
  <Modal {...props} open={isOpen} onClose={onCloseModal}>
    <Checkbox id="checkbox01" label="checkbox" size="l" />
    <Radio id="radio" label="radio" size="l" name="radio" />
    <InputGroup
      fullWidth={true}
      label="Id"
      helperText="helper text"
      required={true}
    >
      <TextField
        id="default-textfield-01"
        placeholder="placeholder"
        resetButton={true}
      />
    </InputGroup>
    <InputGroup
      fullWidth={true}
      label="Password"
      helperText="helper text"
      required={true}
    >
      <TextField
        id="default-textfield-01"
        placeholder="placeholder"
        resetButton={true}
      />
    </InputGroup>
    <InputGroup fullWidth={true} label="Memo" helperText="helper text">
      <TextField
        id="default-textfield-01"
        placeholder="placeholder"
        resetButton={true}
        multiLine={true}
      />
    </InputGroup>
    <InputGroup
      fullWidth={true}
      label="Input"
      helperText="helper text"
      required={true}
    >
      <TextField
        id="default-textfield-01"
        placeholder="placeholder"
        resetButton={true}
      />
    </InputGroup>
    <InputGroup
      fullWidth={true}
      label="Input group"
      helperText="2~10자리 입력가능합니다."
    >
      <TextField
        id="default-textfield-01"
        placeholder="placeholder"
        required={true}
        resetButton={true}
      />
      <TextField
        id="default-textfield-03"
        placeholder="placeholder"
        required={true}
        password={true}
      />
    </InputGroup>
  </Modal>
</div>
        `,
      },
    },
  },
};

export const BaseModalTitleImage: Story = {
  render: (args) => <BaseModalExampleType1 {...args} />,
  args: {
    children: 'Modal',
    // eslint-disable-next-line @next/next/no-img-element
    titleImage: <img src="./images/img_modal_title.png" alt="" />,
    title: 'Title',
    size: 's',
    buttonPrimary: { text: 'primary', onClick: () => console.log('primary') },
    buttonGhost: { text: 'ghost', onClick: () => console.log('ghost') },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<div className="modal-example">
  <Button size="l" type="primary" onClick={onOpenModal}>
    open modal
  </Button>
  <Modal {...props} open={isOpen} onClose={onCloseModal}>
    {props.children}
  </Modal>
</div>
        `,
      },
    },
  },
};

export const BaseModalTitleIcon: Story = {
  render: (args) => <BaseModalExampleType1 {...args} />,
  args: {
    children: 'Modal',
    titleIcon: <NotificationLineIcon />,
    title: 'Title',
    size: 's',
    buttonPrimary: { text: 'primary', onClick: () => console.log('primary') },
    buttonSecondary: {
      text: 'secondary',
      onClick: () => console.log('secondary'),
    },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<div className="modal-example">
  <Button size="l" type="primary" onClick={onOpenModal}>
    open modal
  </Button>
  <Modal {...props} open={isOpen} onClose={onCloseModal}>
    {props.children}
  </Modal>
</div>
        `,
      },
    },
  },
};
