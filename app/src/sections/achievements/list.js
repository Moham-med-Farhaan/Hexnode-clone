import { Card, CardContent, CardHeader, Divider, Stack } from "@mui/material";
import React from "react";
import AchievementsCard from "../../components/achievements";

function Achievements() {
  return (
    <Stack
      sx={{
        backgroundColor: "#1a1c2b",
        flexDirection: { lg: "row", xl: "row" },

        width: { sm: "100%", xs: "100%" },
        gap: { sm: 2, xs: 2 },
        p: { sm: 2, xs: 2 },
      }}
      // flexDirection={"row"}

      p={2}
      width={"100%"}
      flexWrap={"wrap"}
      // height={"100%"}
      // justifyContent={"space-between"}
      // alignItems={"space-between"}
    >
      <AchievementsCard
        href={
          "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
        }
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
        sx={{
          backgroundColor: "#cccccc",
          height: 200,
          display: { sm: "none", xs: "none", lg: "inherit", xl: "inherit" },
        }}
      />
      <AchievementsCard
        href={
          "https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/"
        }
        title={
          <img src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fgartner.png&w=128&q=75" />
        }
        content={
          "Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022."
        }
      />
      <Divider
        orientation="vertical"
        sx={{
          backgroundColor: "#cccccc",
          height: 200,
          display: { sm: "none", xs: "none", lg: "inherit", xl: "inherit" },
        }}
      />
      <AchievementsCard
        href={
          "https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/"
        }
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
