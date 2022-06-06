import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
 
import  CustomTextFiled from ".";

export default {
    title : "Custom Text Field",
    Component : CustomTextFiled
}

const Template : ComponentStory<typeof CustomTextFiled> = ()=><CustomTextFiled />

export const customtextfields = Template.bind({});