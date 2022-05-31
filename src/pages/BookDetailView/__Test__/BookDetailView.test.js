import React from "react";
import "@testing-library/jest-dom";
import BookInfo1 from "../BookDetailView";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


const BookInfo = ()=>{
    return (
        <BrowserRouter>
        <BookInfo1 />
        </BrowserRouter>
    )
}

describe("Tests for Book detailed View Page",()=>{

    test("checking the Explore", () => {
        render(<BookInfo />);
        const bookImage = screen.getByTestId("book-image");
        expect(bookImage).toBeTruthy();
        expect(bookImage).toBeVisible();
        const bookInfoContent = screen.getByTestId("book-info-content");
        expect(bookInfoContent).toBeTruthy();
        expect(bookInfoContent).toBeVisible();
        expect(bookInfoContent.textContent).toContain(
          "Beyond Entrepreneurship 2.0"
        );
        expect(bookInfoContent.textContent).toContain(
          "Turning Your Business into an Enduring Great Company"
        );
        expect(bookInfoContent.textContent).toContain(
          "By Jim Collins and Bill Lazier"
        );

        const bookInfoContent1 = screen.queryByTestId('timeTaken');
        expect(bookInfoContent1.textContent).toContain("15-minutes read");
      });

      test("checking the tabs", () => {
        render(<BookInfo />);
        const tabs = screen.getAllByRole("tab");
        expect(tabs.length).toBe(3);
        expect(tabs[0].textContent).toBe("Synopsis");
        expect(tabs[1].textContent).toBe("Who is it for?");
        expect(tabs[2].textContent).toBe("About the author");
        const tabPanel = screen.getAllByTestId("tabpanel");
    expect(tabPanel.length).toBe(1);
    
    const tabPanel1 = screen.getByTestId("tabpanel");
    expect(tabPanel1.textContent).toContain(
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook"
    ); 
      });


      test("Existing elements",()=>{
        render(<BookInfo />);
        const eles = screen.getAllByTestId("toexist") 
        expect(eles.length).toBe(3);
      })


      it("Test the navigate Button",()=>{
          render(<BookInfo />);
          const btn = screen.getByTestId("navigate-btn");
          expect(btn).toBeInTheDocument();
          fireEvent.click(btn);
        expect(window.location.pathname).toBe("/"); 
      })

      it("Navigate Function ",()=>{
        render(<BookInfo />);
        const btns = screen.getByText('Finished');
        fireEvent.click(btns);
        expect(window.location.pathname).toBe("/"); 

      })
}) 