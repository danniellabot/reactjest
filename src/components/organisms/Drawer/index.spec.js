/**
 * Drawer component test
 * @param {Object} props
 * @param {String} props.anchor
 * @param {String} props.variant
 * @param {
 * 
 } props.children
 */

import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Drawer } from "./index";

describe("DrawerComponent", () => {
  const props = {
    anchor: "left",
    variant: "temporary",
    open: true,
    children: "Drawer",
  };



  it("renders contents from Provider", () => {
    render(<Drawer {...props} />);
    expect(screen.getByText("Drawer")).toBeInTheDocument();
  });

  it("able to hide and show Drawer component", () => {
    render(<Drawer {...props} />);
    expect(screen.getByText("Drawer")).toBeInTheDocument();
    expect(screen.getByText("Drawer")).toBeVisible();
  });
});
