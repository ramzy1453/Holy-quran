import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import PersonIcon from "@mui/icons-material/Person";
import ReviewsIcon from "@mui/icons-material/Reviews";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Divider />
      <List>
        <ListItem key={"Home"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
              Home
            </ListItemIcon>
          </ListItemButton>
        </ListItem>{" "}
        <ListItem key={"Reciters"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GraphicEqIcon />
              Reciters
            </ListItemIcon>
          </ListItemButton>
        </ListItem>{" "}
        <ListItem key={"About"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
              About
            </ListItemIcon>
          </ListItemButton>
        </ListItem>{" "}
        <ListItem key={"Feedback"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ReviewsIcon />
              Feedback
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <svg
        style={{ cursor: "pointer" }}
        onClick={toggleDrawer(true)}
        stroke="white"
        fill="none"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mx-2 cursor-pointer bg-transparent hover:text-gray-400"
        height="28"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        ></path>
      </svg>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
