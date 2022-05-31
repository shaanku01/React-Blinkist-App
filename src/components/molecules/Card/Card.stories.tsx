import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';
import { BrowserRouter as Router } from "react-router-dom";



export default {
    title : "Card",
    Component:Card
}
const Template : ComponentStory<typeof Card> = (args)=>(<Router>
    <Card {...args}/>
  </Router>)
export const Mycard = Template.bind({});
Mycard.args={
        "id":1,
        "picturenumber":"pictures/1.png",
        "Heading":"Bring Your Human to Work",
        "subheading":"Erica Keswin",
        "minuteread":"13-minute read",
        "totalreads":"",
        "buttonText":"Finish",
}


