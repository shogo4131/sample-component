import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ChipButton, Props } from './index';

export default {
  component: ChipButton,
  title: 'Components/ChipButton',
} as Meta;

const Template: Story<Props> = (args) => <ChipButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'chipButton',
};
