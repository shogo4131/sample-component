import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Tab } from './index';

export default {
  component: Tab,
} as ComponentMeta<typeof Tab>;

// TODO:Tab Changeのactionを書く
export const Default: ComponentStoryObj<typeof Tab> = {
  args: {
    tabs: [
      { id: '1', label: 'test', content: <div>test</div> },
      { id: '2', label: 'test2', content: <div>test2</div> },
      { id: '3', label: 'test3', content: <div>test3</div> },
    ],
    activeId: '1',
  },
};
