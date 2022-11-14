/**
 * AutoComplete Component
 * @description: AutoComplete Component
 * @param {Object} props
 * @param {String} props.label
 * @param {String} props.value
 * @param {Function} props.onChange
 * @param {Array} props.options
 * @returns {JSX.Element}
 */

import * as React from "react";
import PropTypes from "prop-types";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const AutoComplete = (props) => {
  const { value, onChange, options, freeSolo } = props;

  return (
    <Autocomplete
      freeSolo={freeSolo}
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      options={options}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

/**
 * Prop Types
 */

AutoComplete.propTypes = {
  freeSolo: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
};


