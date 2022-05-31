import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyLibrary from './MyLibrary';
import { BrowserRouter as Router } from "react-router-dom";


export default {
    title : "MyLibrary",
    Component:MyLibrary
}
const Template : ComponentStory<typeof MyLibrary> = (args)=>(
    <Router>
  
      <MyLibrary  />
    
  </Router>)
export const myLibrary = Template.bind({});