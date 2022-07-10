import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Balloon } from './index';

export default {
  component: Balloon,
} as ComponentMeta<typeof Balloon>;

export const Default: ComponentStoryObj<typeof Balloon> = {
  args: {
    positions: 'top',
    items: [
      { label: 'test1', onClick: action('click test1') },
      { label: 'test2', onClick: action('click test2') },
      { label: 'test3', onClick: action('click test3') },
    ],
  },
};

export const Left: ComponentStoryObj<typeof Balloon> = {
  args: {
    positions: 'left',
    items: [
      { label: 'test1', onClick: action('click test1') },
      { label: 'test2', onClick: action('click test2') },
      { label: 'test3', onClick: action('click test3') },
    ],
  },
};

export const Right: ComponentStoryObj<typeof Balloon> = {
  args: {
    positions: 'right',
    items: [
      { label: 'test1', onClick: action('click test1') },
      { label: 'test2', onClick: action('click test2') },
      { label: 'test3', onClick: action('click test3') },
    ],
  },
};

export const Bottom: ComponentStoryObj<typeof Balloon> = {
  args: {
    positions: 'bottom',
    items: [
      { label: 'test1', onClick: action('click test1') },
      { label: 'test2', onClick: action('click test2') },
      { label: 'test3', onClick: action('click test3') },
    ],
  },
};
