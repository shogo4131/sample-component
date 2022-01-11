import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Switch, Props } from './index';

export default {
  component: Switch,
  title: 'Components/Switch',
  argTypes: {
    onchange: { action: 'change' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {};
