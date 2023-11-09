import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '@components/form';
import { FormLogin } from './FormLogin';
import { FormBasic } from './FormBasic';

const meta: Meta<typeof Form> = {
  title: 'components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        'input group, checkbox, radio button, group등 여러 components 구성 가능합니다.',
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
