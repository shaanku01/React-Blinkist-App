import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Card from "../Card2";
import { BrowserRouter } from "react-router-dom";

const mockFun = jest.fn();

const Card1 = () => {
  return (
    <BrowserRouter>
      <Card
        id={1}
        picturenumber={"pictures/1.png"}
        Heading={"Bring Your Human to Work"}
        subheading={"Erica Keswin"}
        minuteread={"13-minute read"}
        totalreads={""}
        buttonText={"Finish"}
        readStatus={"Finished"}
        modifyData={mockFun}
      />
    </BrowserRouter>
  );
};

describe("Test Cases for the Card Component", () => {
  it("Check if the Card image gets rendered", () => {
    render(<Card1 />);
    const cardImage = screen.getByRole("img");
    expect(cardImage).toBeInTheDocument();
  });

  it("Main Heading Check", () => {
    render(<Card1 />);
    const cardHead = screen.getByText("Bring Your Human to Work");
    expect(cardHead).toBeInTheDocument();
  });

  it("Sub heading gets Rendered",()=>{
      render(<Card1/>);
      const cardSubHead = screen.getByText("Erica Keswin");
      expect(cardSubHead).toBeInTheDocument();
  })

  it("Minutes Read",()=>{
      render(<Card1/>);
      const cardMins = screen.getByText("13-minute read");
      expect(cardMins).toBeTruthy();
  })

  it("Check if the button Exists",()=>{
    render(<Card1/>);
    const cardButton = screen.getByRole('button');
    expect(cardButton).toBeTruthy();
  })

  it("check The total reads is not displayed",()=>{
      render(<Card1/>)
      const tReads = screen.queryByText("1.7k Reads");
      expect(tReads).toBeFalsy();
  })

  it("Check for the button",()=>{
    render(<Card1/>);
    const btn = screen.getByTestId("final-btn");
    expect(btn).toBeVisible();
    fireEvent.click(btn);
  })

  it("Navigation activity in card",()=>{
    render(<Card1/>);
    const HeadNav = screen.getByTestId("Headnav");
    fireEvent.click(HeadNav);
    expect(window.location.pathname).toBe("/detailed"); 

  })

});
