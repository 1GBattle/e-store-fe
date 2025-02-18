"use client";
import { useEffect, useState } from "react";
import { Product } from "@/app/Models/Product.Model";
import Catalog from "@/app/Components/Catalog.Component";
import { Container } from "@mui/system";
import {
  Box,
  CssBaseline,
  FormControlLabel,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Nav from "@/app/Components/Nav.Component";
import * as React from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const themeHandler = isThemeDark
    ? createTheme({
        palette: {
          mode: "dark",
          background: { default: "#eaeaea" },
        },
      })
    : createTheme({
        palette: {
          mode: "light",
          background: { default: "#eaeaea" },
        },
      });

  return (
    <ThemeProvider theme={themeHandler}>
      <CssBaseline />
      <Nav />
      <Box
        sx={{
          minHeight: "100vh",
          background: isThemeDark ? "#121212" : "#eaeaea",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            marginTop: 8,
            padding: 4,
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={isThemeDark}
                onChange={() => setIsThemeDark(!isThemeDark)}
                name="darkModeCheck"
              />
            }
            label="Dark Mode"
            sx={{ m: 1, alignSelf: "end" }}
          />
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
