import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from './Tabs';


export default {
    title : "Tabs",
    Component:Tabs
}
const Template : ComponentStory<typeof Tabs> = (args)=><Tabs/>
export const mytabs = Template.bind({});
