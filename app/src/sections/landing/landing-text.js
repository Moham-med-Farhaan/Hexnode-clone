import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function LandingText() {
  return (
    <Stack
      height={"100%"}
      width={"40%"} // break point
      justifySelf={"center"}
      alignSelf={"center"}
      gap={20}
      textAlign={"left"}
      //   p={3}
      //   sx={{ backgroundColor: "red" }}
    >
      <Stack gap={4} p={6}>
        <Stack>
          <Typography color="textDisabled" variant="subtitle1">
            Unified Endpoint Management
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h3" fontWeight={650} fontSize={40}>
            Gain control and visibility over your endpoints
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="subtitle1" flexWrap={"wrap"}>
            Hexnode's UEM solution allows you to simplify endpoint management
            and free up IT. Focus on the big picture while Hexnode works on the
            details.
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"center"} gap={1}>
          {" "}
          <TextField
            label="Email"
            notched={false}
            color="black"
            slotProps={{
              inputLabel: {
                style: {
                  color: "black",
                },
              },
            }}
            sx={{
              backgroundColor: "white",
              color: "black",
              "& .MuiInputBase-input": {
                color: "black",
              },
            }}
          />
          <Button variant="contained" color="error" sx={{ p: 2 }}>
            Let's Try it Out!
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default LandingText;
