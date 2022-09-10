import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

const FloatingBtn = ({ link }) => {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          p: 6,
          position: "absolute",
          bottom: 20,
          right: 30,
        },
      }}
    >
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        style={{ backgroundColor: "black" }}
      >
        <a className="floating-text" href={link}>
          Create Your Own Website!
        </a>
      </Fab>
    </Box>
  );
};

export default FloatingBtn;
