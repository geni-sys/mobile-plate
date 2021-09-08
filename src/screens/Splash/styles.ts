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

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.Text`
  font-size: 37px;
  font-family: "IBMPlexSans_600SemiBold";
  color: #dfdfdf;
`;
export const LogoText = styled.Text`
  font-size: 17px;
  font-family: "IBMPlexSans_600SemiBold";
  color: #dfdfdf;
  margin-left: 7px;
`;

export const Country = styled.View`
  padding: 4px 17px;
  border-radius: 5px;
  background: #dedede;
`;
export const CountryText = styled.Text`
  font-size: 16px;
`;

export const Content = styled.View`
  max-height: 500px;
`;

export const Text = styled.Text`
  max-width: 300px;
  font-size: 37px;
  font-family: "IBMPlexSans_600SemiBold";
  color: #dfdfdf;
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
  font-weight: bold;
`;

export const GettingStartButton = styled.TouchableOpacity`
  ${defaultButtonStyles}
  background: #f8faf8;
`;
export const GettingStartButtonText = styled.Text`
  color: #2ea44f;
  font-size: 20px;
`;

export const SignInButton = styled.TouchableOpacity`
  ${defaultButtonStyles}
  background: transparent;
  margin-top: 17px;
`;
export const SignInButtonText = styled.Text`
  color: #fd951f;
  font-size: 20px;
`;
