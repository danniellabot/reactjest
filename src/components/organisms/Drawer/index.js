/**
 * Drawer component
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Drawer as DrawerMUI, Toolbar, Box, Typography } from "@mui/material";

export const Drawer = (props) => {
  const { anchor, variant, children, open } = props;

  return (
    <Box zIndex={2}>
      <DrawerMUI anchor={anchor} variant={variant} open={open}>
        <Toolbar />
        {/* <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Drawer</Typography>
        </Box> */}
        {children}
      </DrawerMUI>
    </Box>
  );
};

/**
 * Prop Types
 * @type {Object}
 * @property {String} anchor - anchor
 * @property {String} variant - variant
 * @property {String} children - children
 * @property {Boolean} open - open
 */

Drawer.propTypes = {
    anchor: PropTypes.string,
    variant: PropTypes.string,
    open: PropTypes.bool,
    children: PropTypes.node,
};


