// New stack component from MUI Stack
// Stack props className, direction, spacing, alignItems, justifyContent, wrap, children

import React from "react";
import PropTypes from "prop-types";
import { Stack as MUIStack } from "@mui/material";

export const Stack = (props) => {
  const {
    className,
    direction,
    spacing,
    alignItems,
    justifyContent,
    wrap,
    children,
  } = props;

  return (
    <MUIStack
      className={className}
      direction={direction}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      wrap={wrap}
    >
      {children}
    </MUIStack>
  );
};

Stack.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse",
  ]),
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline",
  ]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  children: PropTypes.node,
};

