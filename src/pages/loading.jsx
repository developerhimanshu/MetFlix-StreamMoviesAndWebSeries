import React from "react";
import { CircularProgress, Box } from "@mui/material";
const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black/50 z-10">
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    </div>
  );
};

export default Loading;
