import React from "react";
import BannerImage from "../../components/banner-img";
import { Container, Stack } from "@mui/material";
import LandingText from "./landing-text";

function Landing() {
  return (
    <Container
      maxWidth={"xxl"}
      sx={{ pl: 3, pr: 3, pt: 3, backgroundColor: "background.default" }}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        sx={{ flexDirection: { lg: "row-reverse" } }}
        // flexDirection={"row-reverse"}
        flexWrap={"wrap"}
        gap={5}
      >
        <BannerImage />
        <LandingText />
      </Stack>
    </Container>
  );
}

export default Landing;
