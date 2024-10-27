import { StatusBar } from "expo-status-bar";
import type { JSX } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface SignInProps {}

export function SignIn({}: SignInProps): JSX.Element | null {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
