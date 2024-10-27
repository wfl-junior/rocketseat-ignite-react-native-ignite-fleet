import type { JSX } from "react";
import { Container, LoadingIndicator } from "./styles";

interface LoadingProps {}

export function Loading({}: LoadingProps): JSX.Element | null {
  return (
    <Container >
      <LoadingIndicator size={40}  />
    </Container>
  );
}
