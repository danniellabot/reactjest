/**
 * Organism component contains AutoComplete and Dialog components
 */

import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { DialogComponent } from "../Dialog";
import { AutoComplete } from "../Autocomplete";
import { useGlobalState, useDispatch } from "../../../context/Provider";

export const DropdownDialog = (props) => {
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { experience } = useGlobalState();
  const dispatch = useDispatch();

  const { options } = props;

  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClickSave = () => {
    dispatch({ type: "UPDATE_EXPERIENCE", payload: value });
    setShow(false);
  };

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Typography
        data-testid="experience-label"
        variant="h5"
        component="h2"
        onClick={handleClick}
      >
        {experience}
      </Typography>
      <DialogComponent
        open={show}
        onClose={handleClose}
        title="Experience"
        description="Please select your experience level 22"
        onClickSave={handleClickSave}
      >
        <AutoComplete
          value={experience}
          onChange={onChange}
          options={options}
          freeSolo
        />
      </DialogComponent>
    </div>
  );
};

/**
 * Prop Types
 */

DropdownDialog.propTypes = {
  options: PropTypes.array.isRequired,
};

