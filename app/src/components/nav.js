import React from "react";
import Stack from "@mui/material/Stack";
import Logo from "./logo";
import map from "lodash/map";
import { Button, Link, Typography } from "@mui/material";
function Navbar() {
  const ROUTES = [
    {
      label: "Why Hexnode?",
      id: "1",
    },
    {
      label: "Features",
      id: "2",
    },
    {
      label: "Platforms",
      id: "2",
    },
    {
      label: "Customers",
      id: "3",
    },
  ];
  return (
    <Stack
      sx={{
        height: "35px",
        width: "100%",
        backgroundColor: "background.default",
        p: 2,
      }}
    >
      <Stack
        height={"100%"}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Stack flexDirection={"row"} height={"100%"} spacing={2} gap={6}>
          <Stack height={"100%"} pl={12} backgroundColor="">
            <Logo />
          </Stack>
          {map(ROUTES, (route) => {
            return (
              <Stack
                key={route.id}
                justifyContent={"center"}
                alignContent={"center"}
                pb={1}
              >
                <Link href={"#"} sx={{ textDecoration: "none" }}>
                  {route.label}
                </Link>
              </Stack>
            );
          })}
        </Stack>
        <Stack
          height={"100%"}
          width={"30%"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Button color="error" variant="contained" sx={{ p: 2.5 }}>
            Start 14 Day Trial
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Navbar;
