import React from 'react';
import '@testing-library/jest-dom';
import MyLibrary1 from '../MyLibrary';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

const MyLibrary = ()=>{
    return (
        <BrowserRouter>
        <MyLibrary1 />
        </BrowserRouter>
    )
}

describe("My-Library-tests",()=>{
    test('checking the buttom label', () => {
        render(<MyLibrary/>);
        const myLibrary = screen.getByTestId("myLibrary");
        expect(myLibrary).toBeTruthy();
        expect(myLibrary).toBeVisible();
        const cardGrid = screen.getByTestId("card-grid");
        expect(cardGrid).toBeVisible();
    });

    test('Checking if the HEader rendered correctly', () => {
        render(<MyLibrary/>);
        const Heading = screen.getByTestId('Header');
        expect(Heading).toBeTruthy();      
        expect(Heading).toBeVisible();  
       
    })
})