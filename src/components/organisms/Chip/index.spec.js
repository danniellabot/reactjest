/**
 * Chip unit test
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Chip from "./index";

describe("Chip component", () => {
  const props = {
    label: "Chip",
  };

  it("should render label", () => {
    render(<Chip {...props} />);
    expect(screen.getByText("Chip")).toBeInTheDocument();
  });
});
