import { Meta, Story } from '@storybook/react/types-6-0';
import Input, { inputProps } from './index';

const inputSettings = {
  component: Input,
  title: 'Atoms/Input',
  argTypes: {
    type: {
      control: 'select',
      options: [
        'color',
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default inputSettings as Meta;

export const input: Story<inputProps> = ({ type, label, placeholder }) => {
  return <Input type={type} label={label} placeholder={placeholder} />;
};
