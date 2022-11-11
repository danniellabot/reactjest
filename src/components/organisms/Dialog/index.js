/**
 * Dialog component
 * @param {Object} props
 * @param {Boolean} props.open
 * @param {Function} props.onClose
 * @param {String} props.title
 * @param {String} props.description
 * @param {String} props.options
 * @param {String} props.value
 * @param {Function} props.onChange
 * @param {Function} props.onClickSave
 * @param {Function} props.onClickCancel
 * @returns {JSX.Element}
 */

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const DialogComponent = (props) => {
  const {
    open,
    onClose,
    title,
    description,
    onClickSave,
    children,
  } = props;

  const handleClickSave = () => {
    onClickSave();
    onClose();
    };


  return (
    <Dialog open={open} onClose={onClose}
    fullWidth={true}>
    
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>{description}</Typography>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleClickSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

