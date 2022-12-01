/**
 * List Item Text component from MUI
 * props include children, class, primary, secondary, inset, disableTypography, primaryTypographyProps, secondaryTypographyProps, sx
 */

import React from "react";
import PropTypes from "prop-types";
import { ListItemText as MUIListItemText } from "@mui/material";

export const ListItemText = (props) => {
  const {
    children,
    className,
    primary,
    secondary,
    inset,
    disableTypography,
    primaryTypographyProps,
    secondaryTypographyProps,
    sx,
  } = props;

  return (
    <MUIListItemText
      className={className}
      primary={primary}
      secondary={secondary}
      inset={inset}
      disableTypography={disableTypography}
      primaryTypographyProps={primaryTypographyProps}
      secondaryTypographyProps={secondaryTypographyProps}
      sx={sx}
    >
      {children}
    </MUIListItemText>
  );
};

ListItemText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.node,
  secondary: PropTypes.node,
  inset: PropTypes.bool,
  disableTypography: PropTypes.bool,
  primaryTypographyProps: PropTypes.object,
  secondaryTypographyProps: PropTypes.object,
  sx: PropTypes.object,
};
