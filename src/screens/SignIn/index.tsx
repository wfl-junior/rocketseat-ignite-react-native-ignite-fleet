import { IOS_CLIENT_ID, WEB_CLIENT_ID } from "@env";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState, type JSX } from "react";
import { Alert } from "react-native";
import backgroundImage from "../../assets/background.png";
import { Button } from "../../components/Button";
import { Container, Slogan, Title } from "./styles";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

interface SignInProps {}

export function SignIn({}: SignInProps): JSX.Element | null {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignin() {
    setIsAuthenticating(true);

    try {
      const response = await GoogleSignin.signIn();

      if (response.type !== "success") {
        throw new Error("Failed to authenticate");
      }

      const { idToken } = response.data;
    } catch (error) {
      console.log(error);
      Alert.alert("Entrar", "Não foi possível conectar-se à sua conta Google.");
      setIsAuthenticating(false);
    }
  }

  return (
    <Container source={backgroundImage}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>

      <Button
        title="Entrar com Google"
        onPress={handleGoogleSignin}
        isLoading={isAuthenticating}
      />
    </Container>
  );
}
