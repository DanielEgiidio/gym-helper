import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="20px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        mb="50px"
        textAlign="center"
        sx={{ fontSize: { lg: "44px", sx: "30px" } }}
      >
        Exercícios incríveis que você <br />
        deveria saber
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "15px",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Pesquisar Exercícios"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#007fff",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Pesquisar
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
