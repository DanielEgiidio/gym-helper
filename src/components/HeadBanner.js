import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeadbannerImage from "../assets/images/banner.png";

const HeadBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "200px", sx: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#007fff" fontWeight="600" fontSize="26px" pb="15px">
        Bem-Vindo ao Gym Helper
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "40px", xs: "36px" } }}
        mb="23px"
        mt="30px"
      >
        Onde lhe ajudaremos a
        <br /> conseguir a performance
        <br /> e estética desejada
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Confira os exercícios mais eficazes
      </Typography>

      <Button
        variant="contained"
        href="#exercises"
        sx={{
          backgroundColor: "#007fff",
          padding: "10px",
        }}
      >
        Pesquisar Exercício
      </Button>

      <Typography
        fontWeight={600}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
        pt="130px"
      >
        Let's Go!
      </Typography>

      <img src={HeadbannerImage} alt="logo" className="hero-banner-img" />
    </Box>
  );
};

export default HeadBanner;
