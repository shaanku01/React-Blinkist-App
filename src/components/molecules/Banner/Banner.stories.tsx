import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner from './Banner';


export default {
    title : "Banner",
    Component:Banner
}
const Template : ComponentStory<typeof Banner> = (args)=><Banner/>
export const banner = Template.bind({});
