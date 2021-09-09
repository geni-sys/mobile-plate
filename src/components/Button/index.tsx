import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface IProps extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
}: IProps) {
  return (
    <Container
      color={color || "#dedede"}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color="#47474D" />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
