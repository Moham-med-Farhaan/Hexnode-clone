import { Card, CardContent, CardHeader, Link, Stack } from "@mui/material";
import React from "react";

function AchievementsCard({ title, content, href, others, sx }) {
  return (
    // <Link href="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/">
    <Card
      component={Link}
      href={href}
      sx={{
        ...sx,
        width: "30%",
        borderRadius: 2,
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",

        ":hover": {
          boxShadow:
            "0 6px 20px 0 rgba(242, 229, 229, 0.22), 0 6px 20px 0 rgba(255, 255, 255, 0.28)",
        },
      }}
    >
      <CardHeader sx={{ textAlign: "left" }} title={title} />

      <CardContent>
        <Stack
          width={"60%"}
          flexWrap={"wrap"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignContent={"center"}
          textAlign={"left"}
        >
          {content}
        </Stack>
        {others}
      </CardContent>
    </Card>
    // </Link>
  );
}

export default AchievementsCard;
