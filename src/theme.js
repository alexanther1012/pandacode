// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#1e1e1e", // Visual Studio dark gray
    },
    text: {
      primary: "#e1e1e1", // Optional: light text color for better readability
    },
  },
});

export default theme;
