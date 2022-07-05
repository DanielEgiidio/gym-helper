import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { FitnessCenter } from "@mui/icons-material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            backgroundColor: "#007fff",
            borderRadius: "10px",
            color: "#FFF",
            width: "270px",
            border: "1px solid #007fff",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
        : {
            borderRadius: "10px",
            width: "270px",
            color: "#373737",
            height: "282px",
            border: "2px solid #007fff",
            cursor: "pointer",
            gap: "47px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <FitnessCenter style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
