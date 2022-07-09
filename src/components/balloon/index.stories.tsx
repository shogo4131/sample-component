import React from 'react';

import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Balloon, Props } from './index';

export default {
  component: Balloon,
  title: 'Components/Balloon',
} as Meta;

const Template: Story<Props> = (args) => <Balloon {...args} />;

export const Default = Template.bind({});

Default.args = {
  positions: 'top',
  items: [
    { label: 'test1', onClick: action('click test1') },
    { label: 'test2', onClick: action('click test2') },
    { label: 'test3', onClick: action('click test3') },
  ],
};

export const Left = Template.bind({});

Left.args = {
  ...Default.args,
  positions: 'left',
};

export const Right = Template.bind({});

Right.args = {
  ...Default.args,
  positions: 'right',
};

export const Bottom = Template.bind({});

Bottom.args = {
  ...Default.args,
  positions: 'bottom',
};
