/**
 * Navigation Bar component
 * Consists of a MUI AppBar, Toolbar, and Typography
 * Renders a navigation bar with an image logo and a list of links on the left size of the bar
 * On the right side of the navigation bar, consists of settings and user profile icons
 * If the screen size is small, the right hand side of the navigation bar will be collapsed into a drawer
 * The drawer will be opened when the user clicks on the menu icon
 * The drawer will be closed when the user clicks on the close icon
 * The drawer will be closed when the user clicks on the backdrop
 * The drawer will be closed when the user clicks on a link in the drawer
 * onClick the link will navigate to the link's href
 */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from '../Link'


