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
      <Link to="/" className="logo">
        <img
          src={logoIcon}
          alt="logo"
          style={{ width: "80px", height: "80px", margin: "0, 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          className="home"
          style={{
            textDecoration: "none",
            color: "#373737",
            padding: "8px",
            borderRadius: "10px",
            border: "2px solid #007fff ",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="exercises"
          style={{
            textDecoration: "none",
            color: "#373737",
            padding: "8px",
            borderRadius: "10px",
            border: "2px solid #007fff ",
          }}
        >
          Exercícios
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
