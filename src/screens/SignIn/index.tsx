import type { JSX } from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface SignInProps {}

export function SignIn({}: SignInProps): JSX.Element | null {
  return <View style={styles.container}></View>;
}
