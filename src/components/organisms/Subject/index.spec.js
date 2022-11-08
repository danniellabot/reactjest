import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "../../../context/Provider";
import Subject from "./index";

/**
 * Typography is a component that renders the state.subject
 * use getByRole to get the element with role="heading"
 */
test("renders the subject", () => {
  render(
    <Provider>
      <Subject />
    </Provider>
  );
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});

/**
 * onClick Typography, setShow(true), show Autocomplete
 */
test("clicking the subject label shows the subject dropdown menu", () => {
  render(
    <Provider>
      <Subject />
    </Provider>
  );
  const labelElement = screen.getByTestId("subject-label");
  fireEvent.click(labelElement);
  const dropdownElement = screen.getByRole("combobox");
  expect(dropdownElement).toBeInTheDocument();
});

/**
 * onChange Autocomplete, setValue(newValue), dispatch({ type: "UPDATE_SUBJECT", payload: newValue })
 */
test("selecting a subject from the dropdown menu updates the subject", () => {
  render(
    <Provider>
      <Subject />
    </Provider>
  );
  const labelElement = screen.getByTestId("subject-label");
  fireEvent.click(labelElement);
  const dropdownElement = screen.getByRole("combobox");
  fireEvent.change(dropdownElement, { target: { value: "Math" } });
  fireEvent.keyDown(dropdownElement, { key: "ArrowDown" });
  fireEvent.keyDown(dropdownElement, { key: "Enter" });
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toHaveTextContent("Math");
});
