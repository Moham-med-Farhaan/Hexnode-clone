import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import CardMedia from "../../components/card-media";
const DATA = [
  {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fandroid.jpg&w=640&q=90",
    title: "Android",
    expanded: true,
    content:
      "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.",
  },
  {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FiOS.jpg&w=640&q=90",
    title: "iOS",
    content:
      "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
  },
  {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FmacOS.jpg&w=640&q=90",
    title: "macOS",
    content:
      "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
  },
  {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fwindows.jpg&w=640&q=90",
    title: "Windows",
    content:
      "Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.",
  },
  {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FtvOS.jpg&w=640&q=90",
    title: "tvOS",
    content:
      "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
  },
  {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FfireOS.jpg&w=640&q=90",
    title: "FireOS",
    content:
      "Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.",
  },
];
function MultiSection() {
  const [image, setImage] = useState(DATA.find((el) => el.expanded).img);

  return (
    <Stack
      p={2}
      id={"platforms"}
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
        <Stack>
          <Typography
            sx={{ color: "black" }}
            letterSpacing={2}
            textAlign={"center"}
            fontWeight={600}
            fontSize={50}
            variant="h5"
          >
            Multi-platform Endpoint Management
          </Typography>
          <Typography
            sx={{ color: "black" }}
            color="textDisabled"
            letterSpacing={2}
            textAlign={"center"}
            fontSize={20}
            variant="subtitle1"
          >
            Devices of varying platforms? Hexnode thrives in a diverse
            environment.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        // flexWrap={"wrap"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
        // height={500}
        gap={3}
        pl={3}
        pr={3}
        spacing={1}
      >
        <Stack width={"100%"}>
          <img src={image} />
        </Stack>

        <Stack height={"100%"} sx={{ height: "100%", gap: 2 }}>
          {DATA.map((el) => {
            return (
              <Accordion
                defaultExpanded={el.expanded}
                key={el.img}
                onChange={(e, expanded) => {
                  if (expanded) {
                    setImage(el.img);
                  }
                }}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  height: "100%",
                  borderRadius: 2,
                  //   gap: 2,
                }}
              >
                <AccordionSummary
                  sx={{ borderRadius: 2 }}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{ color: "black" }}
                  >
                    {el.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "black" }} textAlign={"left"}>
                    {el.content}
                  </Typography>
                </AccordionDetails>
                <AccordionActions
                  sx={{
                    color: "black",
                    backgroundColor: "black",
                    borderRadius: 2,
                  }}
                >
                  <Button variant="standard" color="error">
                    Try Hexnode on your Endpoints
                  </Button>
                </AccordionActions>
              </Accordion>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MultiSection;
