import React from "react";
import { Box, Typography } from "@mui/material";
import EmptyIcon from "@mui/icons-material/HourglassEmpty";

const NoData = () => {
  return (
    <Box
      sx={{ mb: "30px" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <EmptyIcon fontSize="large" color="error" />
      <Typography variant="h6" color="textSecondary" mt={2}>
        This Direction has no Sub Direction
      </Typography>
    </Box>
  );
};

export default NoData;
