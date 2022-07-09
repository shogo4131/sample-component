import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Accordion, Props } from './index';

export default {
  component: Accordion,
  title: 'Components/Accordion',
} as Meta;

const Template: Story<Props> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  header: <div>title</div>,
  children: (
    <ul>
      <li>テスト</li>
      <li>テスト</li>
      <li>テスト</li>
    </ul>
  ),
};
