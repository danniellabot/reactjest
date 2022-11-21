/**
 * Tabs component unit test
 * List of tests:
 * 1. Able to render Tabs component
 * 2. Able to render Tabs component with children
 * 3. Able to switch tabs
 * 4. Able to disable tabs by passing disabled prop
 */

import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Tabs } from "./index";

describe("TabsComponent", () => {
  const props = {
    tabs: [
      {
        label: "Tab 1",
        value: "tab1",
        disabled: false,
      },
      {
        label: "Tab 2",
        value: "tab2",
        disabled: false,
      },
      {
        label: "Tab 3",
        value: "tab3",
        disabled: true,
      },
    ],
    onChange: jest.fn(),
    value: "tab1",
  };

  it("Able to render Tabs component", () => {
    render(<Tabs {...props} />);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("Able to render Tabs component with children", () => {
    render(
      <Tabs {...props}>
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
      </Tabs>
    );
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("Able to switch tabs", () => {
    render(<Tabs {...props} />);
    const tab2 = screen.getByText("Tab 2");
    tab2.click();
    expect(props.onChange).toHaveBeenCalled();
  });

  it("Able to disable tabs by passing disabled prop", () => {
    render(<Tabs {...props} />);
    const tab3 = screen.getByText("Tab 3");
    expect(tab3).toHaveAttribute("disabled");
  });
});
