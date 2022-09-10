import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const FloatingBtn = () => {
  const handleClick = () => {};

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
      onClick={handleClick}
    >
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        style={{ backgroundColor: "black" }}
      >
        <p className="floating-text">Create Your Own Website!</p>
      </Fab>
    </Box>
  );
};

export default FloatingBtn;
