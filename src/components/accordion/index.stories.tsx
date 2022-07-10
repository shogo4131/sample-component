import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Accordion } from './index';

export default {
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Default: ComponentStoryObj<typeof Accordion> = {
  args: {
    header: 'タイトル',
    children: (
      <ul>
        <li>テスト</li>
        <li>テスト</li>
        <li>テスト</li>
      </ul>
    ),
  },
};
