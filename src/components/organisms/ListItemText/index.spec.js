/**
 * Unit test for ListItemText component
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { ListItemText } from "./index";

describe("ListItemText component", () => {
  const props = {
    children: <div>ListItemText</div>,
  };

  it("should render children", () => {
    render(<ListItemText {...props} />);
    expect(screen.getByText("ListItemText")).toBeInTheDocument();
  });
});
