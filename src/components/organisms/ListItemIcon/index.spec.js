/**
 * Unit tests for ListItemIcon component
 * @type {Object}
 * @property {Function} it - test function
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { ListItemIcon } from "./index";

describe("ListItemIcon component", () => {
  const props = {
    children: <div>ListItemIcon</div>,
  };

  it("should render children", () => {
    render(<ListItemIcon {...props} />);
    expect(screen.getByText("ListItemIcon")).toBeInTheDocument();
  });
});
