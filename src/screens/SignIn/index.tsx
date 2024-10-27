import type { JSX } from "react";
import backgroundImage from "../../assets/background.png";
import { Container, Slogan, Title } from "./styles";

interface SignInProps {}

export function SignIn({}: SignInProps): JSX.Element | null {
  return (
    <Container source={backgroundImage}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
    </Container>
  );
}
