import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Balloon, Props } from './index';

export default {
  component: Balloon,
  title: 'Components/Balloon',
} as Meta;

const Template: Story<Props> = (args) => <Balloon {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    { label: 'test1', onClick: action('click test1') },
    { label: 'test2', onClick: action('click test2') },
    { label: 'test3', onClick: action('click test3') },
  ],
};
