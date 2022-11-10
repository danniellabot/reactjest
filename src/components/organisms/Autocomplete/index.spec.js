/**
 * Unit tests for Autocomplete component
 */

import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AutoComplete } from "./index";

describe("Autocomplete component", () => {
  it("should render the Autocomplete component", () => {
    render(
      <AutoComplete
        value={""}
        onChange={() => {}}
        options={["Option 1", "Option 2"]}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should call onChange when clicking on an option", () => {
    const onChange = jest.fn();
    render(
      <AutoComplete
        value={""}
        onChange={onChange}
        options={["Option 1", "Option 2"]}
      />
    );

    const combobox = screen.getByRole("combobox");
    fireEvent.change(combobox, { target: { value: "Option 1" } });
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: "Enter" });

    expect(onChange).toHaveBeenCalled();
  });
});
