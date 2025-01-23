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
  Icon,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomerSayCard from "../../components/customer-say";
const DATA = [
  {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1920&q=80",
    title: "Hexnode is of great value. Works great with Android and iOS!",
    id: 1,
    name: "Justin Modark",
    position: "Technology Coordinator",
  },
  {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80",
    title:
      "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    position: "KAMELEYA LTD",
    id: 2,
  },

  {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80",
    title: "It seemed to be in-line with everything we were looking at.",
    id: 3,
    name: "Chris Robinson",
    position: "Executive Account Manager, NCS",
  },
];
function CustomersSay() {
  const [current, setCurrent] = useState(DATA[0]);
  return (
    <Stack
      p={2}
      id={"customers"}
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
            What Our Customers Say
          </Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
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
        <IconButton
          disabled={current.id === 1}
          onClick={() => {
            setCurrent(DATA.find((el) => el.id === current.id - 1));
          }}
        >
          {/* <Typography sx={{ color: "black" }}> jjjjjjjjjjjjjjjj</Typography> */}
          <ArrowBackIosNewIcon sx={{ color: "black", borderRadius: "50%" }} />
        </IconButton>

        <CustomerSayCard
          key={current.img}
          imageLink={current.img}
          review={current.title}
          name={current.name}
          position={current.position}
        />
        {/* );
        })} */}
        <IconButton
          disabled={current.id === 3}
          onClick={() => {
            setCurrent(DATA.find((el) => el.id === current.id + 1));
          }}
        >
          <ArrowForwardIosIcon sx={{ color: "black" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default CustomersSay;
