import React, { useCallback, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Pulldown, Props, Option } from './index';

export default {
  component: Pulldown,
  title: 'Components/Pulldown',
} as Meta;

const Template: Story<Props> = (args) => {
  const [selectedOption, setSelectedOption] = useState<Option | undefined>();

  const onChangeHandler = useCallback((option: Option) => setSelectedOption(option), []);

  return <Pulldown {...args} selectedOptions={selectedOption} onSelect={onChangeHandler} />;
};

export const Default = Template.bind({});

Default.args = {
  options: [
    { label: 'Taro', value: 'taro' },
    { label: 'Jon', value: 'jon' },
    { label: 'Jack', value: 'jack' },
  ],
};
