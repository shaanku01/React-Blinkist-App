import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuItem from './MenuItem';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export default {
    title : "Menu Item",
    Component:MenuItem
}
const Template : ComponentStory<typeof MenuItem> = (args)=><MenuItem {...args}/>
export const menuitem = Template.bind({});
menuitem.args={
    content:"Education",
    emoji:SchoolOutlinedIcon
    
}