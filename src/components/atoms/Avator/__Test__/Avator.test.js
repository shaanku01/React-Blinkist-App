import { render , screen} from '@testing-library/react';
import React from 'react';

import Avator from '../Avator';

it("Check if avator is rendering",()=>{

    render(<Avator />);
    const avatorEle = screen.getByTestId('myAvator');
    expect(avatorEle).toBeInTheDocument();



})