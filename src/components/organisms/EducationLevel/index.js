// a dropdown for selecting Education Level
// use Autocomplete from material-ui
// Typography from material-ui for the label of the dropdown menu
// Value is from context
// onChange, call dispatch with the new value
// options = high school, college, graduate school, other

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { StateContext, DispatchContext } from "../../../context/Provider";

const options = ["None", "High School", "College", "Graduate School", "Other"];

export default function EducationLevel() {
  const [inputValue, setInputValue] = React.useState("");
  const [show, setShow] = React.useState(false);
  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const [value, setValue] = React.useState(state.educationLevel);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch({ type: "UPDATE_EDUCATION_LEVEL", payload: newValue });
  };

  const handleClickOpen = () => {
    setShow(true);
  };

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <div>{`inputValue: '${state.educationLevel}'`}</div>
      <br />
      <Typography variant="h6"
        sx={{ mt: 3, mb: 1, fontWeight: "bold" }}
        onClick={handleClickOpen}
        data-testid="education-level-label"
      >{state.educationLevel}</Typography>
      {show && (
      <Autocomplete
        value={value}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        data-testid="education-level-select"
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
      )}
    </div>
  );
}
