import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tab, Props } from './index';

export default {
  component: Tab,
  title: 'Components/Tab',
} as Meta;

const Template: Story<Props> = (args) => {
  const [tabId, setTabId] = useState('1');

  const onChangeTabHandler = (id: string) => setTabId(id);

  return <Tab {...args} activeId={tabId} onChange={onChangeTabHandler} />;
};

export const Default = Template.bind({});

Default.args = {
  tabs: [
    { id: '1', label: 'test', content: <div>test</div> },
    { id: '2', label: 'test2', content: <div>test2</div> },
    { id: '3', label: 'test3', content: <div>test3</div> },
  ],
};
