import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

const PADDING_LIMITER = 24;

const defaultButtonStyles = css`
  border: 0;
  border-radius: 50px;
  padding: 10px;
  background: #29931d;
`;

interface ICardBlockBottom {
  show?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #2ea44f;
`;
export const Header = styled.View`
  width: 100%;
  height: 130px;
  margin-top: ${getStatusBarHeight()}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${PADDING_LIMITER}px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(35)}px;
  font-family: "IBMPlexSans_600SemiBold";
  color: #ffffff;
`;

export const HeaderNav = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileButton = styled.TouchableOpacity`
  ${defaultButtonStyles};
  margin-right: 10px;
`;

export const SettingsButton = styled.TouchableOpacity`
  ${defaultButtonStyles};
`;

export const Content = styled.ScrollView`
  padding: 0 ${PADDING_LIMITER}px;
`;

export const CardBlock = styled.View`
  justify-content: space-between;

  background: #f8f8f8;

  border-radius: 2px;
  height: 170px;
  padding: 20px ${PADDING_LIMITER}px;
  margin-bottom: ${PADDING_LIMITER}px;
`;
export const CardTop = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const CardTypeText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: "IBMPlexSans_500Medium";
  margin-left: 14px;
  color: #413f3f;
`;
export const CardBottom = styled.View<ICardBlockBottom>`
  display: ${({ show }) => (show ? "flex" : "none")};
`;
export const TextBalanceStatus = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: "IBMPlexSans_400Regular";
  color: #413f3f;
`;
export const BalanceText = styled.Text`
  margin-top: 2px;
  font-size: ${RFValue(37)}px;
  font-family: "IBMPlexSans_600SemiBold";
  color: #192f6a;
`;

export const BottomNav = styled.View``;
