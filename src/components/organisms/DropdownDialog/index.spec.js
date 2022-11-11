/**
 * Unit tests for the DropdownDialog component.
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { DropdownDialog } from "./index";
import { Provider } from "../../../context/Provider";

describe("DropdownDialog", () => {
  it("renders the component", () => {
    render(
      <Provider>
        <DropdownDialog />
      </Provider>
    );
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("Beginner");
  });

  it("clicking the experience label shows the dialog and contents", () => {
    render(
      <Provider>
        <DropdownDialog />
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
   * Test that the dropdown menu value changes when the user selects a different option.
   * When click the save button, the value of the dropdown menu should be different from the initial value.
   */

  it("clicking the save button changes the dropdown menu value", () => {
    const mockOptions = ["Beginner", "Intermediate", "Advanced"];
    render(
      <Provider>
        <DropdownDialog options={mockOptions} />
      </Provider>
    );
    const labelElement = screen.getByTestId("experience-label");
    fireEvent.click(labelElement);
    const dialogContentElement = screen.getByRole("combobox");
    fireEvent.change(dialogContentElement, {
      target: { value: "Intermediate" },
    });
    fireEvent.keyDown(dialogContentElement, { key: "ArrowDown" });
    fireEvent.keyDown(dialogContentElement, { key: "Enter" });
    expect(dialogContentElement.value).toBe("Intermediate");
    const saveButtonElement = screen.getByRole("button", {
      name: "Save",
      hidden: false,
    });
    fireEvent.click(saveButtonElement);
    expect(labelElement).toHaveTextContent("Intermediate");
  });

  /**
   * Test that the dropdown menu value does not change when the user clicks the cancel button.
   */

  it("clicking the cancel button does not change the dropdown menu value", () => {
    const mockOptions = ["Beginner", "Intermediate", "Advanced"];
    render(
      <Provider>
        <DropdownDialog options={mockOptions} />
      </Provider>
    );
    const labelElement = screen.getByTestId("experience-label");
    fireEvent.click(labelElement);
    const dialogContentElement = screen.getByRole("combobox");
    fireEvent.change(dialogContentElement, {
      target: { value: "Intermediate" },
    });
    fireEvent.keyDown(dialogContentElement, { key: "ArrowDown" });
    fireEvent.keyDown(dialogContentElement, { key: "Enter" });
    expect(dialogContentElement.value).toBe("Intermediate");
    const cancelButtonElement = screen.getByRole("button", {
      name: "Cancel",
      hidden: false,
    });
    fireEvent.click(cancelButtonElement);
    expect(labelElement).toHaveTextContent("Beginner");
  });

  /**
   * Test that the dropdown menu value does not change when the user clicks outside the dialog.
   */

  it("clicking outside the dialog does not change the dropdown menu value", () => {
    const mockOptions = ["Beginner", "Intermediate", "Advanced"];
    render(
      <Provider>
        <DropdownDialog options={mockOptions} />
      </Provider>
    );
    const labelElement = screen.getByTestId("experience-label");
    fireEvent.click(labelElement);
    const dialogContentElement = screen.getByRole("combobox");
    fireEvent.change(dialogContentElement, {
      target: { value: "Intermediate" },
    });
    fireEvent.keyDown(dialogContentElement, { key: "ArrowDown" });
    fireEvent.keyDown(dialogContentElement, { key: "Enter" });
    expect(dialogContentElement.value).toBe("Intermediate");
    fireEvent.click(screen.getByRole("dialog"));
    expect(labelElement).toHaveTextContent("Beginner");
  });
});
