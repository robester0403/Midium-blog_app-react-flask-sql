import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const NavBar = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const handleChange = (_, newValue) => {
    setValue(newValue);
    // can be useful later on
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="nav tabs for midium"
      >
        <LinkTab
          icon={
            <IconButton sx={{ padding: "0px", margin: "0px", minWidth: "0px" }}>
              <AddIcon />
            </IconButton>
          }
          sx={{ padding: "0px", margin: "0px", minWidth: "0px" }}
          aria-label="add"
          href="/createposts"
          onClick={(e) => {
            e.preventDefault();
            navigate("/createposts");
          }}
        />
        <LinkTab
          label="For You"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        />
        <LinkTab
          label="Midium"
          href="/antimedium"
          onClick={(e) => {
            e.preventDefault();
            navigate("/antimedium");
          }}
        />

        <LinkTab label="About Me" href="/" />
        <LinkTab label="Logs & Roadmap" href="/" />
      </Tabs>
    </Box>
  );
};

export default NavBar;
