import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '@components/form';
import { FormLogin } from './FormLogin';
import { FormBasic } from './FormBasic';

const meta: Meta<typeof Form> = {
  title: 'DataInputs/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Form은 데이터 제공 또는 옵션을 구성할 수 있는 입력 컨트롤 그룹 컴포넌트입니다.\nForm은 쓰임새에 따라 2가지로 분류합니다.',
      },
    },
  },
  argTypes: {
    children: {
      description:
        'input group, checkbox, radio button, group등 여러 components 구성 가능합니다.',
      control: {
        type: null,
      },
    },
    className: {
      control: {
        type: null,
      },
    },
    id: {
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const FormLoginExample: Story = {
  render: (args) => <Form {...args}>{args.children}</Form>,
  args: {
    children: <FormLogin />,
    className: 'form-login',
  },
  parameters: {
    docs: {
      description: {
        story: 'Form에서는 여러가지 인풋 요소를 조합하여 사용할 수 있습니다. ',
      },
      source: {
        code: `
<Form className="form-login">
  <InputGroup
    fullWidth={true}
    label="Id"
    helperText="2~10자리 입력가능합니다."
  >
    <TextField
      id="default-textfield-01"
      placeholder="placeholder"
      required={true}
      resetButton={true}
    />
  </InputGroup>
  <InputGroup
    fullWidth={true}
    label="Password"
    helperText="2~10자리 입력가능합니다."
  >
    <TextField
      id="default-textfield-03"
      placeholder="placeholder"
      required={true}
      password={true}
    />
  </InputGroup>
  <Checkbox id="login-checkbox" size="l" label="Save Password" />
  <ButtonGroup align="right">
    <Button type="ghost" size="xl">
      Button
    </Button>
    <Button type="primary" size="xl" isActionMode={true}>
      Button
    </Button>
  </ButtonGroup>
</Form>
        `,
      },
    },
  },
};

export const FormBasicExample: Story = {
  render: (args) => <Form {...args}>{args.children}</Form>,
  args: {
    children: <FormBasic />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Form에서는 여러가지 인풋 요소를 조합하여 사용할 수 있습니다. ',
      },
      source: {
        code: `
        <Form>
          <InputGroup fullWidth={true} label="Input Title" required={true}>
            <TextField id="default-textfield-01" placeholder="placeholder" />
            <TextField id="default-textfield-02" placeholder="placeholder" />
          </InputGroup>
          <InputGroup fullWidth={true} label="Input Title" required={true}>
            <TextField
              id="default-textfield-03"
              placeholder="placeholder"
              value="text는 blabla"
              helperText="2~10자리 입력가능합니다."
            />
          </InputGroup>
          <Dropdown
            menuData={menuData}
            onChange={resolveOnChage}
            onClick={resolveOnClick}
            id="dropdown-textfield"
            isFullWidthMenu={true}
            className="form-dropdown"
          >
            <TextField
              helperText="Please select an option."
              value={labelValue && labelValue}
              id={idValue && idValue}
              required={true}
              placeholder="placeholder"
              label="Dropdown Title"
              iconRight={<ArrowDownLineIcon />}
            />
          </Dropdown>
          <RadioGroup
            id="radio-all"
            label="Radio Title"
            onChange={(e) => onChangeRadio(e)}
            onClick={(e) => onClickRadio(e)}
            options={radioItemList}
            name="radio-all"
            size="l"
          />
          <InputGroup fullWidth={true} label="Area Title" required={true}>
            <TextField
              id="default-textarea"
              placeholder="placeholder"
              helperText="Please enter the content."
              multiLine={true}
              maxLength={300}
            />
          </InputGroup>
          <ButtonGroup align="right" buttonWidth="194px">
            <Button type="secondary" size="xl">
              Button
            </Button>
            <Button type="primary" size="xl">
              Button
            </Button>
          </ButtonGroup>
        </Form>
        `,
      },
    },
  },
};
