/**
 * imports Drawer component 
 * Check able to render contents from Provider 
 * Check that able to hide and show Drawer component
 */

import * as React from "react";
import { Toolbar, Box, Typography } from "@mui/material";
import { Drawer } from "../Drawer";

export const DrawerRight = (props) => {
    const { open, onClose, children } = props;
    
    return (
        <Drawer open={open} onClose={onClose} anchor="right" variant="temporary">
        <Toolbar />
            <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">Drawer Right</Typography>
            </Box>
        {children}
        </Drawer>
    );
    }



