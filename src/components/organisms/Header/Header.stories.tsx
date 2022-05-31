import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';
import { BrowserRouter as Router } from "react-router-dom";


export default {
    title : "Header",
    Component:Header
}
const Template : ComponentStory<typeof Header> = (args)=>(
    <Router>
  
      <Header  />
    
  </Router>)
export const header = Template.bind({});