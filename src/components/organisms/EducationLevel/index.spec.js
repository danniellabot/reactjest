// unit test for Age component
// Author: Jansen Lefever
// Date: 2020-01-15
// License: MIT

import React, { useReducer, useState } from "react";
import renderer from "react-test-renderer";
import {
  render,
  fireEvent,
  renderHook,
  screen,
  within,
} from "@testing-library/react";
import {
  DispatchContext,
  StateContext,
  reducer,
} from "../../../context/Provider";
import EducationLevel from "./index";

describe("EducationLevel", () => {
  // mock state to pass to the component
  const mockState = {
    educationLevel: "None",
  };

  // mock dispatch to pass to the component
  const mockDispatch = jest.fn();

  // wrapper to pass to the component
  const wrapper = ({ children }) => (
    <StateContext.Provider value={mockState}>
      <DispatchContext.Provider value={mockDispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );

  const handleClickOpen = jest.fn();
  const handleClose = jest.fn();

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <StateContext.Provider value={mockState}>
          <DispatchContext.Provider value={mockDispatch}>
            <EducationLevel />
          </DispatchContext.Provider>
        </StateContext.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  /**
   * Test that onClick state.educationLevel, useState is called to set to open
   */
  it("should set open to true when clicked", () => {
    const { getByTestId } = render(<EducationLevel />, { wrapper });
    const educationLevel = getByTestId("education-level-label");
    fireEvent.click(educationLevel);
    expect(handleClickOpen).toHaveBeenCalled();
  });

  /**
   * Test that the component renders but does not show the dropdown
   */
  it("renders", () => {
    const tree = renderer.create(<EducationLevel />, { wrapper }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  /**
   * Test that the component renders and shows the dropdown
   * when the user clicks on the label
   * and that the dropdown has the correct options
   */
  it("renders and shows the dropdown", () => {
    const { getByText } = render(<EducationLevel />, { wrapper });
    const label = getByText("Education Level");
    fireEvent.click(label);
    const dropdown = screen.getByTestId("education-level-select");
    const { getAllByRole } = within(dropdown);
    const options = getAllByRole("option");
    expect(options).toHaveLength(5);
    expect(options[0]).toHaveTextContent("None");
  });

  /**
   * Test that the component changes the state when the user selects a different option in the dropdown
   */
  test("EducationLevel changes state when user selects a different option", () => {
    const { getByTestId } = render(
      <DispatchContext.Provider value={mockDispatch}>
        <StateContext.Provider value={mockState}>
          <EducationLevel />
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
    const select = getByTestId("education-level-select");
    const input = within(select).getByRole("combobox");
    select.focus();
    fireEvent.change(input, { target: { value: "High School" } });
    fireEvent.keyDown(select, { key: "ArrowDown" });
    fireEvent.keyDown(select, { key: "Enter" });
    expect(input).toHaveValue("High School");
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_EDUCATION_LEVEL",
      payload: "High School",
    });
  });
});
