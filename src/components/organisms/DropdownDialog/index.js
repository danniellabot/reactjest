/**
 * Organism component contains AutoComplete and Dialog components
 */

import * as React from "react";
import { DialogComponent } from "../Dialog";
import { AutoComplete } from "../Autocomplete";

export const DropdownDialog = (props) => {
  const {
    open,
    onClose,
    title,
    description,
    options,
    value,
    onChange,
    onClickSave,
  } = props;

  return (
    <DialogComponent
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      onClickSave={onClickSave}
    >
      <AutoComplete
        value={value}
        onChange={onChange}
        options={options}
        freeSolo
      />
    </DialogComponent>
  );
};
