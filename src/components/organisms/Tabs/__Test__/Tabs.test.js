import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MyLibraryTab from "../Tabs";
import "@testing-library/jest-dom";

const displayCardsa = jest.fn();
describe("Tabs-Testing",()=>{
    test("should display the myLibrary tab", async () => {
        render(<MyLibraryTab />);
        const myLibraryTab = screen.getByRole("tablist");
        expect(myLibraryTab).toBeTruthy();
        expect(myLibraryTab).toBeVisible();
        const tabs = screen.getAllByRole("tab");
        expect(tabs).toBeTruthy();
        expect(tabs.length).toBe(2);
        expect(tabs[0].textContent).toBe("Currently Reading");
        expect(tabs[1].textContent).toBe("Finished");
      });

      test("should display the currently reading tab panel on clicking currently reading tab button",  () => {
        render(<MyLibraryTab />);
        const tabs = screen.getAllByRole("tab");
        expect(tabs).toBeTruthy();
        expect(tabs[0].textContent).toBe("Currently Reading");
        
        
      });

      test("The First Tab",()=>{
        render(<MyLibraryTab displayCards={displayCardsa}/>)
        const tabs = screen.getAllByRole("tab");
        expect(tabs).toBeTruthy();
        expect(tabs[0].textContent).toBe("Currently Reading");
        fireEvent.click(tabs[0]);

      })

      test("The Second Tab",()=>{
        render(<MyLibraryTab displayCards={displayCardsa}/>)
        const tabs = screen.getAllByRole("tab");
        expect(tabs).toBeTruthy();
        expect(tabs[1].textContent).toBe("Finished");
        fireEvent.click(tabs[1]);

      })

})

