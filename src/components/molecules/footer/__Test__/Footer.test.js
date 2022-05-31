import { render , screen} from '@testing-library/react';
import React from 'react';
import Footer from '../Footer';

describe("Tests for the Footer",()=>{

    it("test if the logo has been rendered",()=>{
        render(<Footer/>);
        const Logo = screen.getByRole('img');
        expect(Logo).toBeTruthy();
    })

    it("Test the Main head",()=>{
        render(<Footer/>);
        const mainText = screen.getByText('Big ideas in small packages');
        expect(mainText).toBeTruthy();
    })

    it("Check for CopyRight",()=>{
        render(<Footer/>);
        const copyRight = screen.getByText(/© Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies/i);
        expect(copyRight).toBeTruthy();
    })

    it("Check for Editorial",()=>{
        render(<Footer/>);
        const Editorial = screen.getByText(/Editorial/i);
        expect(Editorial).toBeInTheDocument();
    })

    it("Check for Useful links",()=>{
        render(<Footer/>);
        const Useful_links = screen.getByText(/Useful links/i);
        expect(Useful_links).toBeInTheDocument(); 
    })

    it("Check for Company",()=>{
        render(<Footer/>);
        const Company = screen.getByText(/Company/i);
        expect(Company).toBeInTheDocument();
    })

    it("Check for About",()=>{
        render(<Footer/>);
        const About = screen.getByText(/About/i);
        expect(About).toBeInTheDocument();
    })

    it("Check for Careers",()=>{
        render(<Footer/>);
        const Careers = screen.getByText(/Careers/i);
        expect(Careers).toBeInTheDocument();
    })

    it("Check for total paraElements",()=>{
        render(<Footer/>);
        const totEle= screen.queryAllByTestId('pele');
        expect(totEle.length).toBe(19);
    })



    





})