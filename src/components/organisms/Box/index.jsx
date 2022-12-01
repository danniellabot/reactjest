// Box component from MUI Box
// Box props className, component, sx, children, role, onClick, onKeyDown, tabIndex, wid

import React from "react";
import PropTypes from "prop-types";
import { Box as MUIBox } from "@mui/material";

export const Box = (props) => {
  const {
    className,
    component,
    sx,
    children,
    role,
    onClick,
    onKeyDown,
    tabIndex,
    width,
    height,
    ...other
  } = props;

  return (
    <MUIBox
      className={className}
      component={component}
      sx={sx}
      role={role}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      width={width}
      height={height}
      {...other}
    >
      {children}
    </MUIBox>
  );
};

Box.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  sx: PropTypes.object,
  children: PropTypes.node,
  role: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
