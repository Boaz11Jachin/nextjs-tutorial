"use client";

import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useState } from "react";
import Link from "next/link";

export default function AppHeader({ target, subTarget }) {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setLeftDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <GitHubIcon />
              </IconButton>
            </Link>
            <Breadcrumbs aria-label="breadcrumb" separator="/">
              <Link href={target ? "/" + target : "/"}>
                <Button
                  variant="text"
                  color="inherit"
                  disableRipple={true}
                  sx={{ textTransform: "none" }}
                >
                  {target ? target : "DashBoard"}
                </Button>
              </Link>
              {subTarget && (
                <Link href={"/" + target + "/" + subTarget}>
                  <Button
                    variant="text"
                    color="inherit"
                    disableRipple={true}
                    sx={{ textTransform: "none" }}
                  >
                    {subTarget}
                  </Button>
                </Link>
              )}
            </Breadcrumbs>

            <Box sx={{ flexGrow: 1 }} />
            <Button
              disableRipple={true}
              variant="outlined"
              startIcon={<SearchIcon />}
              color="inherit"
              sx={{
                pr: 14,
                borderColor: "lightgray",
                color: "gray",
              }}
            >
              Type / to search
            </Button>
            <IconButton onClick={() => setRightDrawerOpen(true)}>
              <Avatar sx={{ width: 36, height: 36 }}>H</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          open={rightDrawerOpen}
          onClose={() => setRightDrawerOpen(false)}
          anchor="right"
        >
          <Box role="presentation" sx={{ width: 300 }}></Box>
        </Drawer>

        <Drawer
          open={leftDrawerOpen}
          onClose={() => setLeftDrawerOpen(false)}
          anchor="left"
        >
          <Box role="presentation" sx={{ width: 300, p: 1 }}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <HomeOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText>Issues</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemText>Issues</ListItemText>
              </MenuItem>
            </MenuList>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
