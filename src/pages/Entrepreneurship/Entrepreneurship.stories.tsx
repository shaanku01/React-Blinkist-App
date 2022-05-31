import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Entrepreneurship from './Entrepreneurship';
import { BrowserRouter as Router } from "react-router-dom";


export default {
    title : "Entrepreneurship",
    Component:Entrepreneurship
}
const Template : ComponentStory<typeof Entrepreneurship> = (args)=>(
    <Router>
  
      <Entrepreneurship  />
    
  </Router>)
export const entrepreneurship = Template.bind({});