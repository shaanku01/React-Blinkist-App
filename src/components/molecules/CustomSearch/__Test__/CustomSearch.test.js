import { getByTestId, render , screen , fireEvent} from '@testing-library/react';
import React from 'react';

import CustomSearch from '../CustomSearch';

const onClick = jest.fn();

it("Check if custom search is rendered",()=>{
    render(<CustomSearch/>);
    const ele = screen.getByTestId('Maindiv');
    expect(ele).toBeInTheDocument();
})

it("Check-1",()=>{
    render(<CustomSearch/>);
    const ele1 = screen.getByTestId('icon-btn');
    expect(ele1).toBeInTheDocument();
})

it("Check-2",()=>{
    render(<CustomSearch/>);
    const ele2 = screen.getByTestId('search-btn');
    expect(ele2).toBeInTheDocument();
})

