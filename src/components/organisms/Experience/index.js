/**
 * A component that consists of Typography, Dialog, and Autocomplete
 * Typography is a component that renders the state.experience
 * onClick the Typography, setShow(true), show the Dialog
 * Dialog is a component that consists of a title, a description, and an Autocomplete, and a save button and a cancel button
 * DialogTitle is a Typography component that renders "Experience"
 * DialogContent is an Autocomplete component
 * Options include Beginner, Intermediate, Advanced
 * onChange the Autocomplete, setValue(newValue)
 * DialogActions is a component that consists of a save button and a cancel button
 */

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useGlobalState, useDispatch } from "../../../context/Provider";

export default function Experience() {
    const [show, setShow] = React.useState(false);
    const state = useGlobalState();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(state.experience);
    
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
    
    const handleClickCancel = () => {
        setShow(false);
    };
    
    return (
        <div>
        <Typography
            data-testid="experience-label"
            variant="h5"
            component="h2"
            onClick={handleClick}
        >
            {state.experience}
        </Typography>
        <Dialog open={show} onClose={handleClose}
        fullWidth={true}
        >
            <DialogTitle>Experience</DialogTitle>
            <DialogContent>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                options={["Beginner", "Intermediate", "Advanced"]}
                renderInput={(params) => <TextField {...params} />}
            />
            </DialogContent>
            <DialogActions>
            <Button
            data-testid="save-button" 
            onClick={handleClickSave}>Save</Button>
            <Button
            data-testid="cancel-button"
             onClick={handleClickCancel}>Cancel</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
    }

