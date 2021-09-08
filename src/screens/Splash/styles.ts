import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  position: relative;

  flex: 1;
  padding: 0 24px;
  justify-content: space-between;

  /* background: linear-gradient(180deg, #9d9d9d 0%, rgba(9, 9, 9, 0) 100%);
  background-blend-mode: luminosity; */
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Header = styled.View`
  width: 100%;
  height: 70px;
  margin-top: ${getStatusBarHeight()}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  max-height: 400px;
`;

export const Buttons = styled.View`
  align-items: center;
  justify-content: center;
  margin: 24px 0;
`;

const defaultButtonStyles = css`
  width: 100%;
  border: 0;
  height: 50px;
  border-radius: 3px;

  align-items: center;
  justify-content: center;
`;

export const GettingStartButton = styled.View`
  ${defaultButtonStyles}
  background: #121221;
`;
export const GettingStartButtonText = styled.Text`
  color: #2ea44f;
`;

export const SignInButton = styled.View`
  ${defaultButtonStyles}
  background: #dedede;
`;
