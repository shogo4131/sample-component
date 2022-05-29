import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Textarea, Props } from './index';

export default {
  component: Textarea,
  title: 'Components/Textarea',
} as Meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'title',
  rows: 3,
  horizontal: true,
};

export const MaxLength = Template.bind({});

MaxLength.args = {
  rows: 5,
  maxLength: 20,
};

export const MaxLengthTitle = Template.bind({});

MaxLengthTitle.args = {
  label: 'title',
  maxLength: 20,
};

export const Error = Template.bind({});

Error.args = {
  label: 'title',
  error: 'error message',
};