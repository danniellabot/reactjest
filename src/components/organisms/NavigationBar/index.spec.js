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
import ResponsiveAppBar from "./index";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Responsive App Bar component", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    useRouter.mockImplementation(() => mockRouter);
  });

  it("renders page, title and icon correctly", () => {
    render(<ResponsiveAppBar />);
    expect(screen.getByTestId("app-bar")).toBeInTheDocument();
    expect(screen.getByTestId("app-bar-title")).toBeInTheDocument();
    expect(screen.getByTestId("app-bar-icon")).toBeInTheDocument();
  });

  it("renders links when screen is large", () => {
    render(<ResponsiveAppBar />);
    expect(screen.getByTestId("app-bar-links")).toBeInTheDocument();
  });

  it("renders menu icon when screen is small", () => {
    render(<ResponsiveAppBar />);
    expect(screen.getByTestId("app-bar-menu-icon")).toBeInTheDocument();
  });

  it("renders links when menu icon is clicked", () => {
    render(<ResponsiveAppBar />);
    fireEvent.click(screen.getByTestId("app-bar-menu-icon"));
    expect(screen.getByTestId("app-bar-links")).toBeInTheDocument();
  });

  it("calls a function when link is clicked", () => {
    render(<ResponsiveAppBar />);
    fireEvent.click(screen.getByTestId("app-bar-link"));
    expect(mockRouter.push).toHaveBeenCalled();
  });

  /**
   * When clicking on the Avatar, menu should open
   */
  it("opens menu when avatar is clicked", () => {
    render(<ResponsiveAppBar />);
    fireEvent.click(screen.getByTestId("app-bar-avatar"));
    expect(screen.getByTestId("app-bar-menu")).toBeInTheDocument();
  })



});
