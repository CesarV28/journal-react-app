import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleThme } from "./purpleTheme";

export const Apptheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleThme }>
        <CssBaseline/>

        {children}
    </ThemeProvider>
  )
}
