/**
 * Test the Provider component
 */

import * as React from "react";
import { render, screen, renderHook } from "@testing-library/react";
import {
  Provider,
  useGlobalState,
  useDispatch,
  DispatchContext,
  StateContext,
  reducer,
} from "./Provider";

describe("Provider", () => {
  const mockState = { foo: "bar" };
  const mockDispatch = jest.fn();

  const wrapper = ({ children }) => (
    <DispatchContext.Provider value={mockDispatch}>
      <StateContext.Provider value={mockState}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );

  const mockUseContext = () => {
    jest.fn().mockImplementation(() => ({ mockState, mockDispatch }));
  };

  React.useContext = mockUseContext;

  it("should render the Provider component with the correct state", () => {
    render(<Provider />);
    const { result } = renderHook(() => useGlobalState(), { wrapper });
    expect(result.current).toEqual(mockState);
  });

  it("should render the Provider component with the correct dispatch", () => {
    render(<Provider />);
    const { result } = renderHook(() => useDispatch(), { wrapper });
    expect(result.current).toEqual(mockDispatch);
  });

  /**
   * Test the reducer function
   * Check that the reducer function returns the correct state
   */

  it("should return the correct state", () => {
    const action = {
      type: "UPDATE_EDUCATION_LEVEL",
      payload: "Bachelor's Degree",
    };
    const state = reducer(mockState, action);
    expect(state).toEqual({ foo: "bar", educationLevel: "Bachelor's Degree" });
  });
});
