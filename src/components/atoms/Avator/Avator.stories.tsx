import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
 
import  Avator  from './Avator';

export default {
    title: 'Avator',
    component: Avator,
  } as ComponentMeta<typeof Avator>;

  const Template: ComponentStory<typeof Avator> = (args) => <Avator {...args} />;

  export const Myavator = Template.bind({});



