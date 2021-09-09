import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface IContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<IContainerProps>`
  flex-direction: row;
  align-items: center;

  margin: 8px 0;
  border-radius: 2px;
  height: 50px;
  border: 0.5px solid black;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #2ea44f;
    `};
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 0.4px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  color: #121213;
  font-family: "IBMPlexSans_400Regular";
  font-size: ${RFValue(19)}px;
  padding: 0 10px;
`;
