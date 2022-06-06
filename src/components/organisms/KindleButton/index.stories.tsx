import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import KindleButton from '.';
import { BrowserRouter as Router } from "react-router-dom";



export default {
    title : "Kindle Button",
    Component:KindleButton
}

const Template : ComponentStory<typeof KindleButton> = (args)=>{
    return(
       <Router>
           <KindleButton/>
       </Router>



    )

}

export const kindlebutton = Template.bind({});