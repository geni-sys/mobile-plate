import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface IContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<IContainerProps>`
  flex-direction: row;
  margin-bottom: 8px;
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
  margin-right: 2px;
  background-color: #dedede;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: #dedede;
  color: #121213;
  font-family: "IBMPlexSans_400Regular";
  font-size: ${RFValue(15)}px;
  padding: 0 23px;
`;
