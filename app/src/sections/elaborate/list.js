import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AchievementsCard from "../../components/achievements";
import WhyHexnodeCard from "../../components/why-hexnode-card";
import AdaptLogo from "../../components/adapt-logo";
import SecurityLogo from "../../components/security-logo";
import AutomationLogo from "../../components/auto-logo";
import PolicyLogo from "../../components/policy-logo";
import CardMedia from "../../components/card-media";

function Elaborate() {
  const DATA = [
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fzero-touch.jpg&w=384&q=100",
      title: "Zero Touch Enrollment",
      content:
        "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fautomation.jpg&w=384&q=100",
      title: "Automation",
      content:
        "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fremote-access.jpg&w=384&q=100",
      title: "Remote Access Management",
      content:
        "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fendpoint-security.jpg&w=384&q=100",
      title: "Endpoint Security and Compliance",
      content:
        "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fintegrations.jpg&w=384&q=100",
      title: "Integrations",
      content:
        "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fapp-management.jpg&w=384&q=100",
      title: "App Management",
      content:
        "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
    },
  ];
  return (
    <Stack
      p={2}
      id={"features"}
      gap={2}
      height={"100%"}
      justifyContent={"space-between"}
      alignItems={"space-between"}
    >
      <Stack
        flexDirection={"row"}
        width={"100%"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        {" "}
        <Typography
          sx={{ color: "black" }}
          letterSpacing={2}
          textAlign={"center"}
          fontWeight={600}
          fontSize={50}
          variant="h5"
        >
          Powerful endpoint management, built for the devices you choose
        </Typography>
      </Stack>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        width={"100%"}
        gap={3}
        spacing={1}
      >
        {DATA.map((data) => {
          return (
            <CardMedia
              sx={{ width: { lg: "30%", xl: "30%" } }}
              key={data.img}
              imgUrl={data.img}
              title={
                <Typography
                  sx={{ color: "black" }}
                  variant="h4"
                  fontWeight={400}
                >
                  {data.title}
                </Typography>
              }
              content={
                <Typography
                  variant="subtitle1"
                  sx={{ color: "black", textAlign: "left" }}
                >
                  {data.content}
                </Typography>
              }
            />
          );
        })}
      </Stack>
    </Stack>
  );
}

export default Elaborate;
