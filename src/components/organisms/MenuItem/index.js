/**
 * MenuItem from Material-UI
 */

import React from "react";
import { MenuItem } from "@material-ui/core";

export const MenuItemComponent = (props) => {
  const { value, children, label } = props;

  return <MenuItem key={value} value={value}>
    {/* if children dont exist render label else render children */}
    {children ? children : label}

  </MenuItem>;
};
