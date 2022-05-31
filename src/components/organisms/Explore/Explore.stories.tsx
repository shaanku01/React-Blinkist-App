import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Explore from './Explore';
import { BrowserRouter as Router } from "react-router-dom";


export default {
    title : "Explore",
    Component:Explore
}
const Template : ComponentStory<typeof Explore> = (args)=>(
    <Router>
  
      <Explore  />
    
  </Router>)
export const explore = Template.bind({});
