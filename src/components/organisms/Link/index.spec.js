/**
 * Unit test component for Link component
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Link from "./index";

describe("Link component", () => {
  it("should render", () => {
    const { container } = render(<Link />);
    expect(container).toBeTruthy();
  });

  it("should render children", () => {
    const { getByText } = render(<Link>Link</Link>);
    expect(getByText("Link")).toBeTruthy();
  })

  it("should render href", () => {
    const { getByRole } = render(<Link href="https://www.google.com">Link</Link>);
    expect(screen.getByRole("link")).toHaveAttribute("href", "https://www.google.com");

  })

});
