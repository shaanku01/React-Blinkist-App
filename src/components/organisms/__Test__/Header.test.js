import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockMainHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("Header Testing -", () => {
  test("checking the main header", () => {
    render(<MockMainHeader />);
    const mainHeader = screen.getByTestId("main-header");
    expect(mainHeader).toBeTruthy();
    expect(mainHeader).toBeVisible();
  });

  test("checking the blinkist logo in main header", () => {
    render(<MockMainHeader />);
    const logo = screen.getByTestId("blinkist-logo");
    expect(logo).toBeTruthy();
    expect(logo).toBeVisible();
  });

  test("checking the search icon in main header", () => {
    render(<MockMainHeader />);
    const searchIcon = screen.getByTestId("searchIcon-button");
    expect(searchIcon).toBeTruthy();
    expect(searchIcon).toBeVisible();
    fireEvent.click(searchIcon);
  });

  test("checking the explore dialog in main header", () => {
    render(<MockMainHeader />);
    const explore = screen.queryByTestId("explore-button");
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

  test("checking the my library button in main header", () => {
    render(<MockMainHeader />);
    const myLibrary = screen.getByText("My Library");
    expect(myLibrary).toBeTruthy();
    expect(myLibrary).toBeVisible();
    fireEvent.click(myLibrary);
    expect(window.location.pathname).toBe("/");
  });

  test("checking the acconnt dropdown  in main header", () => {
    render(<MockMainHeader />);
    const account = screen.getByTestId("account-dropdown-button");
    expect(account).toBeTruthy();
    expect(account).toBeVisible();
  });
});
