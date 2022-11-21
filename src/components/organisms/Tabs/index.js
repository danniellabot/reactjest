/**
 * Tabs component import from @mui/material
 * Contains Tab, Tabs, Box, Typography
 * Obtain list of tabs from props
 * Switch tabs by clicking on tabs
 * Disable tabs by passing disabled prop
 *
 *
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Tab as TabMUI, Tabs as TabsMUI } from "@mui/material";

export const Tabs = (props) => {
  const { tabs, onChange, value } = props;

  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <TabsMUI value={value} onChange={handleChange}>
      {tabs.map((tab) => (
        <TabMUI
          key={tab.label}
          label={tab.label}
          disabled={tab.disabled}
          value={tab.value}
          indicatorColor="primary"
          textColor="primary"
        />
      ))}
    </TabsMUI>
  );
};

/**
 * Prop Types
 * @type {Object}
 * @property {Array} tabs - list of tabs
 * @property {Function} onChange - function to switch tabs
 * @property {String} value - value of tab
 */

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
