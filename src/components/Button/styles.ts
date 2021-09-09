import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IButtonProps {
  color: string;
}

interface IButtonTextProps {
  light: boolean;
}

export const Container = styled(RectButton)<IButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  margin-bottom: 8px;
`;

export const Title = styled.Text<IButtonTextProps>`
  font-family: "IBMPlexSans_500Medium";
  font-size: ${RFValue(19)}px;
  color: ${({ light }) => (light ? "#121214" : "#2ea44f")};
`;
