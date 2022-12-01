// Unit test Box component

import React from "react";
import { render, screen } from "@testing-library/react";
import { Box } from "./index";

describe("Box component", () => {
    const props = {
        children: <div>Box</div>,
    };

    it("should render children", () => {
        render(<Box {...props} />);
        expect(screen.getByText("Box")).toBeInTheDocument();
    });
    
})