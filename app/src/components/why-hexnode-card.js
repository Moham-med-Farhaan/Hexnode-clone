import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import React, { useState } from "react";

function WhyHexnodeCard({
  title,
  content,
  actionArea,
  enterCb,
  leaveCb,
  visible,
}) {
  return (
    <Card
      onMouseEnter={() => enterCb()}
      onMouseLeave={() => leaveCb()}
      sx={{
        transition: "all 4s ease-in-out",
        backgroundColor: (theme) => theme.palette.common.white,
        color: "black",
        p: 3,
        width: "40%",
      }}
    >
      <CardHeader sx={{ color: "black" }} title={title} />
      <CardContent>{content}</CardContent>
      {visible && <CardActionArea>{actionArea}</CardActionArea>}
    </Card>
  );
}

export default WhyHexnodeCard;
