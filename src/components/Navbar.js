import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import logoIcon from "../assets/images/logo-icon.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "60px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={logoIcon}
          alt="logo"
          style={{ width: "80px", height: "80px", margin: "0, 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#000",
            borderBottom: "2px solid #007fff ",
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "#000 " }}>
          Exercícios
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
