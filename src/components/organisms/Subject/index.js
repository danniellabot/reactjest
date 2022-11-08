/**
 * A component that consists of a label and a dropdown menu
 * Label is a Typography component that renders the state.subject
 * onClick the label, setShow(true), show the Dropdown menu
 * Dropdown menu is an Autocomplete component
 * Options include Math, Science, English, Social Studies, Other, None
 * onChange the Dropdown menu, setValue(newValue), dispatch({ type: "UPDATE_SUBJECT", payload: newValue })
 */

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { StateContext, DispatchContext } from "../../../context/Provider";

const options = [
  "None",
  "Math",
  "Science",
  "English",
  "Social Studies",
  "Other",
];

export default function Subject() {
  const [inputValue, setInputValue] = React.useState("");
  const [show, setShow] = React.useState(false);
  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const [value, setValue] = React.useState(state.subject);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch({ type: "UPDATE_SUBJECT", payload: newValue });
  };

  const handleClickOpen = () => {
    setShow(true);
  };

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <div>{`inputValue: '${state.subject}'`}</div>
      <br />
      <Typography
        variant="h6"
        sx={{ mt: 3, mb: 1, fontWeight: "bold" }}
        onClick={handleClickOpen}
        data-testid="subject-label"
      >
        {state.subject}
      </Typography>
      {show && (
        <Autocomplete
          value={value}
          onChange={handleChange}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          data-testid="subject-select"
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Controllable" />
          )}
        />
      )}
    </div>
  );
}
