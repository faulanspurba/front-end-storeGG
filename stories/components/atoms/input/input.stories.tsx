import { Meta } from '@storybook/react';
import Input, { InputProps } from '../../../../components/atoms/Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  labelName: 'Full Name ',
  placeHolder: 'Enter Your Full Name',
} as Meta;
