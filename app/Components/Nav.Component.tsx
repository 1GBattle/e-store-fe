import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";
import Link from "next/link";

export default function Nav() {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
        }}
      >
        <Typography variant="h4" component="div" sx={{ width: "20%" }}>
          <Link href={"/"}> E-Store</Link>
        </Typography>

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
            <Link href={"/contact"}>About</Link>
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
