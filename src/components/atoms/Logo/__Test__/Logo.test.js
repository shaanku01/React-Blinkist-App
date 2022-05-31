import { render , screen} from '@testing-library/react';
import React from 'react'
import Logo from '../Logo';


const mockedClick = jest.fn(); 

it("Check if Logo getting rendered",()=>{
    render(<Logo handleClick={mockedClick}/>)
    const logoEle = screen.getByTestId('MainLogo');
    expect(logoEle).toBeInTheDocument();
})