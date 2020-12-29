import { Meta, Story } from '@storybook/react/types-6-0';

import RadioButton, { radioButtonProps } from './index';

const radioSettings = {
  component: RadioButton,
  title: 'Atoms/RadioButton',
};

export default radioSettings as Meta;

export const radioButton: Story<radioButtonProps> = () => {
  return <RadioButton options={['Option 1', 'Option 2']} onClick={() => {}} />;
};
