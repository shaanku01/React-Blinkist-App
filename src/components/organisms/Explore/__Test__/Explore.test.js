import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ExploreDialog from "../Explore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockExploreDialog = () => {
    return (
      <BrowserRouter>
        <ExploreDialog />
      </BrowserRouter>
    );
  };
  const mouseFun = jest.fn();

  describe("Explore-Tests",()=>{

    test("should display the explore dialog", () => {
        render(<MockExploreDialog />);
        const explore = screen.getByTestId("explore-button");
        expect(explore).toBeTruthy();
        expect(explore).toBeVisible();
        expect(explore.textContent).toBe("Explore");
        fireEvent.click(explore);
        const exploreMenu = screen.getByTestId("menu");
        expect(exploreMenu).toBeTruthy();
        expect(exploreMenu).toBeVisible();
        const menuItems = screen.getAllByTestId("menuitem");
        expect(menuItems.length).toBe(18);
        fireEvent.click(explore);
      });

      test("should route to respective url on clicking category", () => {
        render(<MockExploreDialog />);
        const explore = screen.getByTestId("explore-button");
        fireEvent.click(explore);
        screen.getByTestId("menu");
        const menuItems = screen.getAllByTestId("menuitem");
        expect(menuItems.length).toBe(18);        
        const entrepreneurshipCategory = screen.queryByText("Entrepreneurship");
        fireEvent.click(entrepreneurshipCategory);
        expect(window.location.pathname).toBe("/entrepreneurship"); 
      });

      test("Mouse over and mouse out events",()=>{
        render(<MockExploreDialog />);
        const explore1 = screen.getByTestId("explore-button");
        fireEvent.mouseOver(explore1);
        fireEvent.mouseOut(explore1);
      })




  })