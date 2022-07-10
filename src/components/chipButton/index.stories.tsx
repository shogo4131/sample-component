import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { ChipButton } from './index';

export default {
  component: ChipButton,
} as ComponentMeta<typeof ChipButton>;

export const Default: ComponentStoryObj<typeof ChipButton> = {
  args: {
    children: 'chipButton',
  },
};
