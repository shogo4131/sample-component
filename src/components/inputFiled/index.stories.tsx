import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputFiled, Props } from './index';

export default {
  component: InputFiled,
  title: 'Components/InputFiled',
} as Meta;

const Template: Story<Props> = (args) => <InputFiled {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const WidthPlaceholder = Template.bind({});

WidthPlaceholder.args = {
  label: 'label',
  placeholder: 'placeholder',
};

export const Error = Template.bind({});

Error.args = {
  label: 'label',
  horizontal: true,
  error: 'error message',
};
