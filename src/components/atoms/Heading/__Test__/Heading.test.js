import { render, screen } from '@testing-library/react';
import Heading ,{Heading2,Heading3} from '../Heading';

it("Should render the same text passed to it",()=>{
    render(<Heading content='Hello'/>);
    const headingElement = screen.getByText(/Hello/i);
    expect(headingElement).toBeInTheDocument();
})

it("Test case for Heading2 to render the same text passed",()=>{
    render(<Heading2 content='Shanker'/>);
    const headEle2 = screen.getByText(/Shanker/i);
    expect(headEle2).toBeInTheDocument();
})

it("Heading 3 test case",()=>{
    render(<Heading3 content='My Library'/>);
    const headEle3 = screen.getByText(/My Library/i);
    expect(headEle3).toBeInTheDocument();
})