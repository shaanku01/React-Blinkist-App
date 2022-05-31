import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BookDetailedView from './BookDetailView';
import { BrowserRouter as Router } from "react-router-dom";


export default {
    title : "BookDetailedView",
    Component:BookDetailedView
}
const Template : ComponentStory<typeof BookDetailedView> = (args)=>(
    <Router>
  
      <BookDetailedView  />
    
  </Router>)
export const Page1 = Template.bind({});