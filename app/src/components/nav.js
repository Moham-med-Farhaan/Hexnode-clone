import React, { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";
import Logo from "./logo";
import MenuIcon from "@mui/icons-material/Menu";
import map from "lodash/map";
import { Button, IconButton, Link, Typography } from "@mui/material";
import NavDrawer from "./nav-drawer";
export const ROUTES = [
  {
    label: "Why Hexnode?",
    id: "#why-node",
  },
  {
    label: "Features",
    id: "#features",
  },
  {
    label: "Platforms",
    id: "#platforms",
  },
  {
    label: "Customers",
    id: "#customers",
  },
];

function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const onClose = useCallback(() => {
    setMenuClick(false);
  }, []);
  return (
    <Stack
      sx={{
        height: "35px",
        width: "100%",
        backgroundColor: "background.default",
        p: 2,
        zIndex: 999,
        position: "fixed",
        top: 0,
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
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    lg: "inherit",
                  },
                }}
                key={route.id}
                justifyContent={"center"}
                alignContent={"center"}
                pb={1}
              >
                <Link href={route.id} sx={{ textDecoration: "none" }}>
                  {route.label}
                </Link>
              </Stack>
            );
          })}
        </Stack>

        <Stack
          height={"100%"}
          width={"30%"}
          gap={2}
          flexDirection={"row"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Button
            color="error"
            size="medium"
            variant="contained"
            sx={{ width: "fit-content" }}
          >
            Start 14 Day Trial
          </Button>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            sx={{
              display: {
                // xs: "none",
                // sm: "none",
                lg: "none",
                xl: "none",
              },
            }}
            justifyItems={"center"}
          >
            <IconButton
              onClick={() => {
                setMenuClick(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      {menuClick && <NavDrawer open={menuClick} onClose={onClose} />}
    </Stack>
  );
}

export default Navbar;
