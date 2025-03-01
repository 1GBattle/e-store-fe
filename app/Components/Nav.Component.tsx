"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import Link from "next/link";
import { toggleDarkMode } from "@/app/redux/ui.Slice";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { toast } from "react-toastify";

export default function Nav() {
  const uiState = useAppSelector((state) => state.uiState);
  const dispatch = useAppDispatch();

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="div" sx={{ width: "40%" }}>
            <Link href={"/"}> E-Store</Link>
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={uiState.darkMode === true}
                onChange={() => dispatch(toggleDarkMode())}
                name="darkModeCheck"
              />
            }
            label="Dark Mode"
            sx={{ m: 1, alignSelf: "end", color: "white" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            gap: 10,
          }}
        >
          <Typography variant="h6" component="div">
            <Link href={"/catalog"}>Catalog</Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link href={"/contact"}>Contact</Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link href={"/about"}>About</Link>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: "20%",
          }}
        >
          <IconButton aria-label="cart" color="inherit">
            <Link href={"/cart"}>
              <ShoppingCartIcon />
            </Link>
          </IconButton>

          <Typography variant="h6" component="div">
            <Link href={"/login"}>Login</Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link href={"/register"}>Register</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
