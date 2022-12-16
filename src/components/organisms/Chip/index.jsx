/**
 * Chip component for the Chip component from Material UI
 */

import React from "react";
import PropTypes from "prop-types";
import MuiChip from "@mui/material/Chip";

const Chip = (props) => {
  const { label, color = "default" } = props;

  return <MuiChip label={label} color={color} />;
};

Chip.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
};

export default Chip;
