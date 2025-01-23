import { Button, Stack, Typography } from "@mui/material";
import React from "react";

function FinalPitch() {
  return (
    <Stack p={5} sx={{ backgroundColor: "background.default" }}>
      <Stack gap={3}>
        <Typography variant="h3">
          Get Hexnode UEM and start securing your endpoints{" "}
        </Typography>
        <Button
          size="large"
          variant="contained"
          color="error"
          sx={{ width: "50%", alignSelf: "center" }}
          fullWidth={false}
        >
          Try Hexnode For Free
        </Button>
      </Stack>
    </Stack>
  );
}

export default FinalPitch;
