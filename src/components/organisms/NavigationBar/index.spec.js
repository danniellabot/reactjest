/**
 * Navigation Bar unit test
 * Check that renders page, title and icon correctly
 * Check that when screen is small, links are hidden and menu icon is shown
 * Check that when screen is large, links are shown and menu icon is hidden
 * Check that when menu icon is clicked, links are shown
 * Check that when link is clicked, a function is called
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavigationBar } from "./index";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("NavigationBar component", () => {
  const props = {
    title: "Test",
    icon: <div>Icon</div>,
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  };

  it("should render title and icon", () => {
    render(<NavigationBar {...props} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });

  it("should render links", () => {
    render(<NavigationBar {...props} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("should render menu icon when screen is small", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 600,
    });
    render(<NavigationBar {...props} />);
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  it("should not render menu icon when screen is large", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1200,
    });
    render(<NavigationBar {...props} />);
    expect(screen.queryByText("Menu")).not.toBeInTheDocument();
  });

  it("should show links when menu icon is clicked", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 600,
    });
    render(<NavigationBar {...props} />);
    fireEvent.click(screen.getByText("Menu"));
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("should call router.push when link is clicked", () => {
    const router = {
      push: jest.fn(),
    };
    useRouter.mockImplementation(() => router);
    render(<NavigationBar {...props} />);
    fireEvent.click(screen.getByText("Home"));
    expect(router.push).toHaveBeenCalledWith("/");
  });
});
