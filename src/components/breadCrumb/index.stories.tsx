import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BreadCrumb, Props } from './index';

export default {
  component: BreadCrumb,
  title: 'Components/BreadCrumb',
} as Meta;

const Template: Story<Props> = (args) => <BreadCrumb {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    { id: 1, label: 'トップ', href: '/' },
    { id: 2, label: 'センター', href: '/center' },
    { id: 3, label: 'ラスト' },
  ],
};
