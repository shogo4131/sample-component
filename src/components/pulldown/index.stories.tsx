import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Pulldown } from './index';

export default {
  component: Pulldown,
} as ComponentMeta<typeof Pulldown>;

export const Default: ComponentStoryObj<typeof Pulldown> = {
  args: {
    options: [
      { label: 'Taro', value: 'taro' },
      { label: 'Jon', value: 'jon' },
      { label: 'Jack', value: 'jack' },
    ],
  },
};

export const Up: ComponentStoryObj<typeof Pulldown> = {
  args: {
    options: [
      { label: 'Taro', value: 'taro' },
      { label: 'Jon', value: 'jon' },
      { label: 'Jack', value: 'jack' },
    ],
    direction: 'up',
  },
};
