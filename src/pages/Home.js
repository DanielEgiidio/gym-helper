import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeadBanner from "../components/HeadBanner";

const Home = () => {
  return (
    <Box>
      <HeadBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
