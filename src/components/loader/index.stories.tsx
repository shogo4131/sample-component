import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Loader, Props } from './index';

export default {
  component: Loader,
  title: 'Components/Loader',
} as Meta;

const Template: Story<Props> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {};
