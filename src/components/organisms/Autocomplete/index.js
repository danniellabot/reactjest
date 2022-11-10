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
