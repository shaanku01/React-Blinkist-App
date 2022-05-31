import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
 
import  Heading1, {Heading2,Heading3}  from './Heading';

export default {
    title : "Headings",
    Component : Heading2
}

const Template : ComponentStory<typeof Heading1> = (args)=><Heading1 {...args}/>

export const MyHeading = Template.bind({});
MyHeading.args={
    content:"Hello World"
}

const Template1 : ComponentStory<typeof Heading2> = (args)=><Heading2 {...args}/>

export const MyHeading1 = Template1.bind({});
MyHeading1.args={
    content:"Hello World"
}

const Template2 : ComponentStory<typeof Heading3> = (args)=><Heading3 {...args}/>

export const MyHeading2 = Template2.bind({});
MyHeading2.args={
    content:"Hello World"
}
