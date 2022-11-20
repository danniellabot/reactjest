/**
 * Drawer component test
 * @param {Object} props
 * @param {Boolean} props.open
 * @param {Function} props.onClose
 * @param {String} props.anchor
 * @param {String} props.variant
 * @param {String} props.children
 */

import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Drawer } from "./index";

describe("DrawerComponent", () => {
    it("should render Drawer component", () => {
        render(
        <Drawer
            open={true}
            onClose={() => {}}
            anchor="left"
            variant="temporary"
            children={<div>children</div>}
        />
        );
    
        expect(screen.getByTestId("drawer")).toBeInTheDocument();
    });

});
