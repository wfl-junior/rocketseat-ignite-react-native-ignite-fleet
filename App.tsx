import type { JSX } from "react";
import { ThemeProvider } from "styled-components";
import { SignIn } from "./src/screens/SignIn";
import { theme } from "./src/theme";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
