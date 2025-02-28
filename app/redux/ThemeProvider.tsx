import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useAppSelector } from "@/app/redux/store";
import { ToastContainer } from "react-toastify";
import ToastContainerComponent from "@/app/Components/ToastContainer.Component";

interface ThemeProps {
  children: React.ReactNode;
}

export default function UiThemeProvider({ children }: ThemeProps) {
  const darkMode = useAppSelector((state) => state.uiState.darkMode);
  const palleteMode = darkMode ? "dark" : "light";
  const theme = createTheme({
    typography: {
      fontFamily: "var(--font-roboto)",
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      background: { default: palleteMode ? "eaeaea" : "121212" },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
