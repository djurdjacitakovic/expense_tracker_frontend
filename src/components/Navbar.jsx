import { Link } from "react-router-dom";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { boxSize } from "../styles/Navbar.module.css";
export default function Navbar() {
  const [value, setValue] = React.useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box class={boxSize}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="/" component={Link} to="/" label="Dashboard" />
        <Tab value="/expense" component={Link} to="/expense" label="Expense" />
        <Tab value="/income" component={Link} to="/income" label="Income" />
        <Tab
          value="/expense-groups"
          component={Link}
          to="/expense-groups"
          label="Expense groups "
        />
        <Tab
          value="/income-groups"
          component={Link}
          to="/income-groups"
          label="Income groups"
        />
      </Tabs>
    </Box>
  );
}
