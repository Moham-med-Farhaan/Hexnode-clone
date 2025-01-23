import {
  Button,
  DialogActions,
  DialogTitle,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ROUTES } from "./nav";

function NavDrawer({ open, onClose }) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      PaperProps={{
        sx: {
          width: "60%",
          p: 2,
        },
      }}
    >
      {" "}
      <DialogActions>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <List>
        {ROUTES.map((route, index) => (
          <ListItem key={route.id} onClick={onClose} sx={{ p: 2 }}>
            <Button sx={{ width: "100%", textAlign: "left" }}>
              <Link href={route.id} sx={{ textDecoration: "none" }}>
                {route.label}
              </Link>
            </Button>
          </ListItem>
        ))}
        <Stack gap={2}>
          <Button color="error" variant="contained" fullWidth>
            14 Day Free Trial
          </Button>
          <Button>Login</Button>
        </Stack>
      </List>
    </Drawer>
  );
}

export default NavDrawer;
