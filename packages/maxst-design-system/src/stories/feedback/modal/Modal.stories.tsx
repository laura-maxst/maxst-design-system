import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@components/modal';
import { BaseModalExampleType1 } from './BaseModalExampleType1';
import { BaseModalExampleType2 } from './BaseModalExampletype2';
import { NotificationLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '현재 상황에 관련된 중요한 정보나 긴급한 정보를 전달하는 용도로 사용합니다.\n모달에서는 여러가지 인풋 요소와 시각 오브젝트를 조합하여 사용할 수 있습니다. \nBody영역이 요소들로 브라우저 높이의 90% 보다 길어질 경우 스크롤 바를 생성합니다.',
      },
    },
  },
  argTypes: {
    children: {
      description: `\`string\`으로 넘기면 자동으로 Text Component로 적용됩니다.그 외의 형태는 컴포넌트 형태로 넘길 수 있습니다.\n\`string\`, \`React.ReactNode\`
        `,
    },
    titleIcon: {
      description:
        'modal header영역에서 title 상단에 위치하는 icon을 설정합니다.',
      control: {
        type: null,
      },
    },
    titleImage: {
      description:
        'modal header영역에서 title 상단에 위치하는 image를 설정합니다.',
      control: {
        type: null,
      },
    },
    mainButton: {
      description: `main버튼으로 type을 '\`primary\`','\`secondary\`', '\`error\`'을 하나를 지정해줘야 합니다.`,
      control: {
        type: null,
      },
    },
    subButton: {
      description: 'main button보다 낮은 위계로 tertiary button이 적용됩니다.',
      control: {
        type: null,
      },
    },
    subtlestButton: {
      description: 'sub button보다 낮은 위계로 ghost button이 적용됩니다.',
      control: {
        type: null,
      },
    },
    open: {
      description: 'open 상태값을 할당해줍니다.',
      control: {
        type: null,
      },
    },
    onClose: {
      description: 'open 상태값을 조절하는 함수를 할당해줍니다.',
    },
    isCloseButton: {
      description: 'Modal의 close button의 유무를 설정할 수 있습니다.',
    },
    size: {
      description: `Modal의 너비를 정해줍니다. \n
    xl= 1088px; l=720px; m=532px; s=348px;`,
    },
    id: {
      description: '필요에 따라 id를 지정할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const BaseModalPrimaryButtonVersion: Story = {
  render: (args) => <BaseModalExampleType1 {...args} />,
  args: {
    id: 'modal',
    children: 'Modal',
    title: 'Title',
    size: 's',
    mainButton: {
      type: 'primary',
      text: 'main button',
      onClick: () => console.log('main'),
    },
    subButton: {
      text: 'sub button',
      onClick: () => console.log('sub'),
    },
    subtlestButton: {
      text: 'subtlest button',
      onClick: () => console.log('subtlest'),
    },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'primary button 등 최대 3가지 button이 제공됩니다.',
      },
      source: {
        code: `
const [isOpen, setIsOpen] = useState<boolean>(false);
const onOpenModal = () => {
  setIsOpen(true);
};
const onCloseModal = () => {
  setIsOpen(false);
};
return (
  <div className="modal-example">
    <Button size="l" type="primary" onClick={onOpenModal}>
      open modal
    </Button>
    <Modal 
      isCloseButton={true}
      mainButton={{
        onClick: () => {},
        text: 'main button',
        type: 'primary'
      }}
      onClose={() => {}}
      size="s"
      subButton={{
        onClick: () => {},
        text: 'sub button'
      }}
      subtlestButton={{
        onClick: () => {},
        text: 'subtlest button'
      }}
      title="Title"
      open={isOpen} 
      onClose={onCloseModal}
    >
      Modal
    </Modal>
  </div>
)
        `,
      },
    },
  },
};

export const BaseModalSecondaryButtonVersion: Story = {
  render: (args) => <BaseModalExampleType1 {...args} />,
  args: {
    children: 'Modal',
    title: 'Title',
    size: 's',
    mainButton: {
      type: 'secondary',
      text: 'main button',
      onClick: () => console.log('main'),
    },
    subButton: {
      text: 'sub button',
      onClick: () => console.log('sub'),
    },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'button은 갯수에 따라 자동으로 width값이 조정됩니다.',
      },
      source: {
        code: `
const [isOpen, setIsOpen] = useState<boolean>(false);
const onOpenModal = () => {
  setIsOpen(true);
};
const onCloseModal = () => {
  setIsOpen(false);
};
return (
  <div className="modal-example">
    <Button size="l" type="primary" onClick={onOpenModal}>
      open modal
    </Button>
    <Modal 
      isCloseButton={true}
      mainButton={{
        onClick: () => {},
        text: 'main button',
        type: 'secondary'
      }}
      onClose={() => {}}
      size="s"
      subButton={{
        onClick: () => {},
        text: 'sub button'
      }}
      subtlestButton={{
        onClick: () => {},
        text: 'subtlest button'
      }}
      title="Title"
    >
      Modal
    </Modal>
  </div>
)
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
    mainButton: {
      type: 'error',
      text: 'main button',
      onClick: () => console.log('main'),
    },
    subButton: {
      text: 'sub button',
      onClick: () => console.log('sub'),
    },
    subtlestButton: {
      text: 'subtlest button',
      onClick: () => console.log('subtlest'),
    },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'main button이 error type인 예시입니다.',
      },
      source: {
        code: `
const [isOpen, setIsOpen] = useState<boolean>(false);
const onOpenModal = () => {
  setIsOpen(true);
};
const onCloseModal = () => {
  setIsOpen(false);
};
return (
  <div className="modal-example">
    <Button size="l" type="primary" onClick={onOpenModal}>
      open modal
    </Button>
    <Modal 
      isCloseButton={true}
      mainButton={{
        onClick: () => {},
        text: 'main button',
        type: 'primary'
      }}
      onClose={() => {}}
      size="s"
      subButton={{
        onClick: () => {},
        text: 'sub button'
      }}
      subtlestButton={{
        onClick: () => {},
        text: 'subtlest button'
      }}
      title="Title"
      open={isOpen} 
      onClose={onCloseModal}
    >
      Modal
    </Modal>
  </div>
)
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
    mainButton: {
      type: 'secondary',
      text: 'main button',
      onClick: () => console.log('main'),
    },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Modal에서 contents의 양이 많아 브라우저 높이의 90%을 넘으면 자동으로 scrollbar가 생성됩니다.',
      },
      source: {
        code: `
const [isOpen, setIsOpen] = useState<boolean>(false);
const onOpenModal = () => {
  console.log('sample open', isOpen);
  setIsOpen(true);
};
const onCloseModal = () => {
  console.log('sample close', isOpen);
  setIsOpen(false);
};

return (
  <div className="modal-example">
    <Button size="l" type="primary" onClick={onOpenModal}>
      open modal
    </Button>
    <Modal 
      isCloseButton={true}
      mainButton={{
        onClick: () => {},
        text: 'main button',
        type: 'secondary'
      }}
      onClose={() => {}}
      size="xl"
      title="Title"
      open={isOpen} 
      onClose={onCloseModal} 
    >
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
)
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
    mainButton: {
      type: 'primary',
      text: 'main button',
      onClick: () => console.log('main'),
    },
    subButton: { text: 'sub button', onClick: () => console.log('sub') },
    isCloseButton: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal의 head영역에 이미지를 설정할 수 있습니다.',
      },
      source: {
        code: `
const [isOpen, setIsOpen] = useState<boolean>(false);
const onOpenModal = () => {
  setIsOpen(true);
};
const onCloseModal = () => {
  setIsOpen(false);
};
return (
  <div className="modal-example">
    <Button size="l" type="primary" onClick={onOpenModal}>
      open modal
    </Button>
    <Modal 
      isCloseButton={true}
      mainButton={{
        onClick: () => {},
        text: 'main button',
        type: 'primary'
      }}
      onClose={() => {}}
      size="s"
      subButton={{
        onClick: () => {},
        text: 'sub button'
      }}
      title="Title"
      titleImage={<img alt="" src="./images/img_modal_title.png"/>}
    >
      Modal
    </Modal>
  </div>
)
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
    mainButton: {
      type: 'secondary',
      text: 'main button',
      onClick: () => console.log('main'),
    },
    isCloseButton: true,
  },

  parameters: {
    docs: {
      description: {
        story: 'Modal의 head영역에 icon을 설정할 수 있습니다.',
      },
      source: {
        code: `
const [isOpen, setIsOpen] = useState<boolean>(false);
const onOpenModal = () => {
  setIsOpen(true);
};
const onCloseModal = () => {
  setIsOpen(false);
};
return (
  <div className="modal-example">
    <Button size="l" type="primary" onClick={onOpenModal}>
      open modal
    </Button>
    <Modal 
      isCloseButton={true}
      mainButton={{
        onClick: () => {},
        text: 'main button',
        type: 'primary'
      }}
      onClose={() => {}}
      size="s"
      subButton={{
        onClick: () => {},
        text: 'sub button'
      }}
      title="Title"
      titleIcon={<NotificationLineIcon />}
    >
      Modal
    </Modal>
  </div>
)
        `,
      },
    },
  },
};
