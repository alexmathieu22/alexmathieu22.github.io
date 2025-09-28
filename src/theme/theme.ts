import {createTheme, Theme} from "@mui/material";

type ThemeMode = "light" | "dark";

const getTheme = (mode: ThemeMode): Theme =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#6366f1" : "#a78bfa",
      },
      secondary: {
        main: mode === "light" ? "#ec4899" : "#f472b6",
      },
      background: {
        default: mode === "light" ? "#faf7ff" : "#0f0f23",
        paper: mode === "light" ? "#ffffff" : "#1a1a2e",
      },
      text: {
        primary: mode === "light" ? "#1f2937" : "#f9fafb",
        secondary: mode === "light" ? "#6b7280" : "#9ca3af",
      },
    },
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
      h1: {
        fontWeight: 300,
      },
      h2: {
        fontWeight: 400,
      },
      h4: {
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
  });

export {getTheme};
export type {ThemeMode};
