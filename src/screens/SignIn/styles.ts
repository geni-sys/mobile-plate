import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IToStartProps {
  highlight?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #121214;
`;
export const Header = styled.View`
  width: 100%;
  height: 70px;
  margin-top: ${getStatusBarHeight()}px;
  background: #121214;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: space-between;

  background: #fcfcfe;
`;

export const Content = styled.View`
  padding: 0 20px;
`;
export const HandleCloseScreen = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;

  padding: 0;
  margin: 5px 0;
  margin-bottom: 10px;
  width: 50px;
  border-radius: 6px;
`;
export const Text = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: "IBMPlexSans_400Regular";
`;

export const Bottom = styled.View`
  max-height: 200px;
`;

export const WantSignUp = styled.View`
  flex-direction: row;
  padding: 5px 20px;
`;
export const ToStartButton = styled.TouchableOpacity``;
export const ToStart = styled.Text<IToStartProps>`
  font-size: ${RFValue(17)}px;
  font-family: "IBMPlexSans_400Regular";
  color: ${({ highlight }) => (highlight ? "#FD951F" : "#121214")};
`;
