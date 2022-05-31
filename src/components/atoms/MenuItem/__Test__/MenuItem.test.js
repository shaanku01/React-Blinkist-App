import { render , screen} from '@testing-library/react';
import React from 'react';
import MenuItem from '../MenuItem';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';


it("Check if menu Item getting rendered",()=>{
    render(<MenuItem emoji={SchoolOutlinedIcon}  content={"Education"}/>)
    const mainDiv = screen.getByTestId('menu-Item')
    expect(mainDiv).toBeInTheDocument();

    const emoji = screen.getByTestId('emoji');
    expect(emoji).toBeInTheDocument();
})
it("Emoji Check",()=>{
    render(<MenuItem emoji={SchoolOutlinedIcon}  content={"Education"}/>)
    

    const emoji = screen.getByTestId('emoji');
    expect(emoji).toBeInTheDocument();
})

it("Text Check",()=>{
    render(<MenuItem emoji={SchoolOutlinedIcon}  content={"Education"}/>)
    

    const text = screen.getByText(/Education/i);
    expect(text).toBeInTheDocument();
})