// Stack component test file

// Path: src/components/organisms/Stack/index.spec.js

import React from "react";
import { render, screen } from "@testing-library/react";
import { Stack } from "./index";

describe("Stack component", () => {
    const props = {
        children: <div>Stack</div>,
    };

    it("should render children", () => {
        render(<Stack {...props} />);
        expect(screen.getByText("Stack")).toBeInTheDocument();
    });
    

});
