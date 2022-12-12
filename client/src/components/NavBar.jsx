import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Konnect" height={45} />
        </Link>
        <Typography
          sx={{
            pl: "1rem",
            fontSize: "1.3rem",
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "row",
            // alignItems: "center",
          }}
        >
          <p style={{ fontSize: "1.2rem" }}>K</p>
          <p style={{ fontSize: "1.1rem" }}>O</p>
          <p style={{ fontSize: "1.08rem" }}>N</p>
          <p style={{ fontSize: "1.06rem" }}>N</p>
          <p style={{ fontSize: "1.08rem" }}>E</p>
          <p style={{ fontSize: "1.1rem" }}>C</p>
          <p style={{ fontSize: "1.2rem" }}>T</p>
        </Typography>
      </div>

      <SearchBar />
    </Stack>
  );
};

export default NavBar;
