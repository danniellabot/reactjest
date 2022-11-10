/**
 * Test the Provider component
 */

import React from "react";
import { render, renderHook } from "@testing-library/react";
import { Provider, useGlobalState, useDispatch } from "./Provider";

describe("Provider", () => {
  test("renders the Provider component", () => {
    render(
      <Provider>
        <div>Test</div>
      </Provider>
    );
  });
  test("useGlobalState returns the state", () => {
    const { result } = renderHook(() => useGlobalState());
    expect(result.current).toEqual({
      educationLevel: "None",
      subject: "None",
      experience: "Beginner",
    });
  });
  test("useDispatch returns the dispatch function", () => {
    const { result } = renderHook(() => useDispatch());
    expect(typeof result.current).toBe("function");
  });
});
