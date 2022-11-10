/**
 * Unit tests for Dialog component
 */

import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DialogComponent } from "./index";

describe("Dialog component", () => {
  it("should render the Dialog component", () => {
    render(
      <DialogComponent
        open={true}
        onClose={() => {}}
        title="Title"
        description="Description"
        onClickSave={() => {}}
        onClickCancel={() => {}}
      >
        <div>Children</div>
      </DialogComponent>
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Children")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("should call onClose when clicking on Cancel", () => {
    const onClose = jest.fn();
    render(
      <DialogComponent
        open={true}
        onClose={onClose}
        title="Title"
        description="Description"
        onClickSave={() => {}}
        onClickCancel={() => {}}
      >
        <div>Children</div>
      </DialogComponent>
    );

    fireEvent.click(screen.getByText("Cancel"));

    expect(onClose).toHaveBeenCalled();
  });

  it("should call onClose when clicking on Save", () => {
    const onClose = jest.fn();
    render(
      <DialogComponent
        open={true}
        onClose={onClose}
        title="Title"
        description="Description"
        onClickSave={() => {}}
        onClickCancel={() => {}}
      >
        <div>Children</div>
      </DialogComponent>
    );

    fireEvent.click(screen.getByText("Save"));

    expect(onClose).toHaveBeenCalled();
  });
});
