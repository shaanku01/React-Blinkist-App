import { render , screen} from '@testing-library/react';
import React from 'react';
import Banner from '../Banner';

describe("banner Test Cases",()=>{

    it("Check for the Heading in Banner",()=>{
        render(<Banner/>)
        const bannerHeader = screen.getByText(/Explore Books on entrepreneurship/i)
        expect(bannerHeader).toBeInTheDocument();
    })
    
    it("Check if the banner content is rendered",()=>{
        render(<Banner/>);
        const bannerContent = screen.getByText('Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.');
        expect(bannerContent).toBeInTheDocument();
    })
    
    it('Check if the Picture has been rendered',()=>{
        render(<Banner/>)
        const bannerImage = screen.getByRole('img');
        expect(bannerImage).toBeInTheDocument();
    })

})

