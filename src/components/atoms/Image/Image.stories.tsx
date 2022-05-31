import react from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from './Images';

export default {
    title:"Image",
    component:Image

}

const Template : ComponentStory<typeof Image> = (args)=><Image />

export const MyImage = Template.bind({});