import {
  Card,
  CardContent,
  CardHeader,
  CardMedia as CardMediaMui,
} from "@mui/material";
import React from "react";

function CardMedia({ title, imgUrl, content, sx }) {
  return (
    <Card sx={{ backgroundColor: "white", ...sx }}>
      <CardMediaMui sx={{ color: "black" }}>
        <img src={imgUrl} />
      </CardMediaMui>
      <CardHeader sx={{ color: "black" }} title={title} />
      <CardContent>{content}</CardContent>
    </Card>
  );
}

export default CardMedia;
