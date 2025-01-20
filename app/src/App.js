import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./pages/home";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      tonalOffset: 3.4,
    },

    colorSchemes: {
      dark: true,
    },
    components: {
      MuiTextField: {
        styleOverrides: { root: { color: "black" } },
      },
    },
    typography: {
      allVariants: {
        color: "#FFF",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
