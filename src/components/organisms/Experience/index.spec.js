import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "../../../context/Provider";
import Experience from "./index";

/**
 * Typography is a component that renders the state.experience
 * use getByRole to get the element with role="heading"
 */
test("renders the experience", () => {
  render(
    <Provider>
      <Experience />
    </Provider>
  );
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent("Beginner");
});

/**
 * onClick Typography, setShow(true), show Dialog with DialogTitle, DialogContent, DialogActions
 * DialogTitle is a Typography component that renders "Experience"
 * DialogContent is a dropdown menu with options: "Beginner", "Intermediate", "Advanced"
 * DialogActions is a Button component that renders "Save" and "Cancel"
 */
test("clicking the experience label shows the experience dialog", () => {
  render(
    <Provider>
      <Experience />
    </Provider>
  );
  const labelElement = screen.getByTestId("experience-label");
  fireEvent.click(labelElement);
  const dialogTitleElement = screen.getByRole("heading");
  expect(dialogTitleElement).toBeInTheDocument();
  expect(dialogTitleElement).toHaveTextContent("Experience");
  const dialogContentElement = screen.getByRole("combobox");
  expect(dialogContentElement).toBeInTheDocument();
  const saveButtonElement = screen.getByRole("button", {
    name: "Save",
    hidden: false,
  });
  expect(saveButtonElement).toBeInTheDocument();
  const cancelButtonElement = screen.getByRole("button", {
    name: "Cancel",
    hidden: false,
  });
  expect(cancelButtonElement).toBeInTheDocument();
});

/**
 * onClick Typography, setShow(true), show Dialog with DialogTitle, DialogContent, DialogActions
 * DialogTitle is a Typography component that renders "Experience"
 * DialogContent is a dropdown menu with options: "Beginner", "Intermediate", "Advanced"
 * Change the value of the dropdown menu to "Intermediate"
 * Click the "Save" button
 * Check that the value of the dropdown menu should be "Intermediate"
 * Check that the value of the experience label should be "Intermediate"
 */

test("selecting a experience from the dropdown menu updates the experience", () => {
  render(
    <Provider>
      <Experience />
    </Provider>
  );

  const headingElement = screen.getByRole("heading");
  fireEvent.click(headingElement);
  const dialogContentElement = screen.getByRole("combobox");
  fireEvent.change(dialogContentElement, { target: { value: "Intermediate" } });
  fireEvent.keyDown(dialogContentElement, { key: "ArrowDown" });
  fireEvent.keyDown(dialogContentElement, { key: "Enter" });
  const saveButtonElement = screen.getByRole("button", {
    name: "Save",
    hidden: false,
  });
  fireEvent.click(saveButtonElement);
  expect(headingElement).toHaveTextContent("Intermediate");
});

/**
 * onClick Typography, setShow(true), show Dialog with DialogTitle, DialogContent, DialogActions
 * Click the "Cancel" button
 * Check that the Dialog should not be visible
 * Check that setShow(false) should be called
 */

test("clicking the cancel button closes the experience dialog", () => {
    render(
        <Provider>
        <Experience />
        </Provider>
    );
    
    const headingElement = screen.getByRole("heading");
    fireEvent.click(headingElement);
    const cancelButtonElement = screen.getByRole("button", {
        name: "Cancel",
        hidden: false,
    });
    fireEvent.click(cancelButtonElement);
    expect(cancelButtonElement).not.toBeVisible();
    expect(headingElement).toBeInTheDocument();
    });




