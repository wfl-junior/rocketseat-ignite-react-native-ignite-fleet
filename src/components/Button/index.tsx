import type { JSX } from "react";
import type { TouchableOpacityProps } from "react-native";
import { Container, LoadingIndicator, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function Button({
  title,
  isLoading = false,
  ...props
}: ButtonProps): JSX.Element | null {
  return (
    <Container activeOpacity={0.7} disabled={isLoading} {...props}>
      {isLoading ? <LoadingIndicator /> : <Title>{title}</Title>}
    </Container>
  );
}
