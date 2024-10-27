import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import type { JSX } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/SignIn";
import { theme } from "./src/theme";

function App(): JSX.Element | null {
  const [isLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      {isLoaded ? <SignIn /> : <Loading />}
    </ThemeProvider>
  );
}

export default App;
