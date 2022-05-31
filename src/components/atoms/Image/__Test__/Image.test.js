import { render , screen} from '@testing-library/react';
import React from 'react'
import Image from"../Images";

it("Test if Image is working",()=>{
    render(<Image/>);
    const imgEle = screen.getByTestId('myimg')
    expect(imgEle).toBeInTheDocument();

})