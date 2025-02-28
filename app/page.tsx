"use client";
import Catalog from "@/app/Components/Catalog.Component";
import { Container } from "@mui/system";
import { Box, Button, CssBaseline } from "@mui/material";
import Nav from "@/app/Components/Nav.Component";
import * as React from "react";
import { useAppSelector } from "@/app/redux/store";
import { toast } from "react-toastify";

export default function Home() {
  const uiState = useAppSelector((state) => state.uiState);
  return (
    <>
      <CssBaseline />
      <Nav />
      <Box
        sx={{
          minHeight: "100vh",
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
          <Catalog />
        </Container>
      </Box>
    </>
  );
}
