/**
 * Unit test for DropdownDialog component
 */

import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DropdownDialog } from "./index";

describe("DropdownDialog component", () => {
  it("should render the DropdownDialog component", () => {
    render(
      <DropdownDialog
        open={true}
        onClose={() => {}}
        title={"Title"}
        description={"Description"}
        options={["Option 1", "Option 2"]}
        value={""}
        onChange={() => {}}
        onClickSave={() => {}}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should call onChange when clicking on an option", () => {
    const onChange = jest.fn();
    render(
      <DropdownDialog
        open={true}
        onClose={() => {}}
        title={"Title"}
        description={"Description"}
        options={["Option 1", "Option 2"]}
        value={""}
        onChange={onChange}
        onClickSave={() => {}}
      />
    );

    const combobox = screen.getByRole("combobox");
    fireEvent.change(combobox, { target: { value: "Option 1" } });
    fireEvent.keyDown(combobox, { key: "ArrowDown" });
    fireEvent.keyDown(combobox, { key: "Enter" });

    expect(onChange).toHaveBeenCalled();
  });
});

// The test for the DropdownDialog component is very similar to the test for the Autocomplete component. The only difference is that we are passing the open prop to the DropdownDialog component. This is because the Dialog component is only rendered when the open prop is true.
