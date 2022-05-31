import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';


export default {
    title : "Footer",
    Component:Footer
}
const Template : ComponentStory<typeof Footer> = (args)=><Footer/>
export const footer = Template.bind({});
