import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { buttonProps } from './index';

const calcButtonType = (type: 'primary' | 'secondary') => {
  return type;
};

const buttonSettings = {
  component: Button,
  title: 'Atoms/Button',
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default buttonSettings as Meta;

export const button: Story<buttonProps> = ({ type }) => {
  const buttonType = calcButtonType(type || 'primary');

  return <Button type={buttonType}>Click Me</Button>;
};
