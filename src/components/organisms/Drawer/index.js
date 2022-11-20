/**
 * Drawer component
 */

import * as React from "react";
import PropTypes from "prop-types";
import {Drawer as DrawerMUI} from "@mui/material";

export const Drawer = (props) => {
  const { open, onClose, anchor, variant, children } = props;

  return (
    <DrawerMUI
      data-testid="drawer"
      open={open}
      onClose={onClose}
      anchor={anchor}
      variant={variant}
    >
      {children}
    </DrawerMUI>
  );
};

/**
 * Prop Types
 *
 * @type {Object}
 * @property {Boolean} open
 * @property {Function} onClose
 * @property {String} anchor
 * @property {String} variant
 * @property {String} children
 *
 */

DrawerMUI.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  anchor: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node,
};
