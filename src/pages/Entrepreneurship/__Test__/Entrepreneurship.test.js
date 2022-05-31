/* eslint-disable testing-library/await-async-query */
import React from 'react';
import '@testing-library/jest-dom';
import Entrepreneurship1 from '../Entrepreneurship';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

const mockedHandleChange = jest.fn();

const Entrepreneurship = ()=>{
    return (
        <BrowserRouter>
        <Entrepreneurship1 />
        </BrowserRouter>
    )
}

describe("Entrepreneurship Page Tests",()=>{


    test('checking the button label',  () => {
        render(<Entrepreneurship />);
        const explorePage =  screen.getByTestId("explore-page");
        expect(explorePage).toBeTruthy();
        expect(explorePage).toBeVisible();
        const searchInput =  screen.getByTestId("searchInput");
        expect(searchInput).toBeVisible();
        
    });
    test('Should display the search input dialog', () => {
        render(<Entrepreneurship  />);
        const searchInput = screen.getByTestId("searchInput");
        expect(searchInput).toBeTruthy();
        expect(searchInput).toBeVisible();
        const inputField = screen.getByPlaceholderText("Search by Title or Author");
        expect(inputField).toBeTruthy();
        expect(inputField).toBeVisible();
    });

    test("Should invove handle change on entering input", () => {
        render(<Entrepreneurship  />);
        const searchInput = screen.getByTestId("searchInput");
        expect(searchInput).toBeTruthy();
        expect(searchInput).toBeVisible();
        const inputField = screen.getByPlaceholderText("Search by Title or Author");
        fireEvent.change(inputField, { target: { value: "Dropshipping" } });
        fireEvent.change(inputField, { target: { value: "" } });
    })
   

   


})