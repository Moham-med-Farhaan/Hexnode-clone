import { Card, CardContent, CardHeader, Divider, Stack } from "@mui/material";
import React from "react";
import AchievementsCard from "../../components/achievements";

function Achievements() {
  return (
    <Stack
      sx={{ backgroundColor: "#1a1c2b" }}
      flexDirection={"row"}
      p={2}
      height={"100%"}
      justifyContent={"space-between"}
      alignItems={"space-between"}
    >
      <AchievementsCard
        title={
          <img src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fidc.png&w=96&q=75" />
        }
        sx={{ pl: 4 }}
        content={
          "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024."
        }
      />
      <Divider
        orientation="vertical"
        sx={{ backgroundColor: "#cccccc", height: 200 }}
      />
      <AchievementsCard
        title={
          <img src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fgartner.png&w=128&q=75" />
        }
        content={
          "Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022."
        }
      />
      <Divider
        orientation="vertical"
        sx={{ backgroundColor: "#cccccc", height: 200 }}
      />
      <AchievementsCard
        title={
          <img src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fforrester.png&w=256&q=75" />
        }
        content={
          "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024."
        }
      />
    </Stack>
  );
}

export default Achievements;
