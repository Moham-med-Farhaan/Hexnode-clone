import { Card, Stack, Typography } from "@mui/material";
import React from "react";

function CustomerSayCard({ imageLink, review, name, position }) {
  return (
    <Card sx={{ width: "60%" }}>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <img src={imageLink} />
        <Stack height={"100%"} justifyContent={"space-between"}>
          <Stack p={5}>
            <Typography textAlign={"left"}>{`"${review}"`}</Typography>
          </Stack>
          <Stack p={5}>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="subtitle2">{position}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

export default CustomerSayCard;
