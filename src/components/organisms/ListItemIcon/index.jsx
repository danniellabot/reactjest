/**
 * List Item Icon component from MUI
 * props include sx, children, class
 */

import React from "react";
import PropTypes from "prop-types";
import { ListItemIcon as MUIListItemIcon } from "@mui/material";

export const ListItemIcon = (props) => {
  const { sx, children, className } = props;

  return (
    <MUIListItemIcon sx={sx} className={className}>
      {children}
    </MUIListItemIcon>
  );
};

ListItemIcon.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
};
