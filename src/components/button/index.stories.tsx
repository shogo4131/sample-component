import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Props } from './index';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    onclick: { action: 'click' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '保存',
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...Default.args,
  disabled: true,
};
