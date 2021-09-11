import React, { useCallback, useState } from "react";
import { StatusBar } from "react-native";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  Text,
  HeaderNav,
  Content,
  BottomNav,
  CardBlock,
  SettingsButton,
  ProfileButton,
  CardTop,
  CardTypeText,
  CardBottom,
  TextBalanceStatus,
  BalanceText,
} from "./styles";

function Home() {
  const [eyeIsUp, setEyeIsUp] = useState(true);

  const changeEyeState = useCallback(() => {
    setEyeIsUp(!eyeIsUp);
  }, [eyeIsUp]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <Text>Olá, elias</Text>

        <HeaderNav>
          <ProfileButton>
            <Feather name="user" size={25} color="#dedede" />
          </ProfileButton>
          <SettingsButton>
            {eyeIsUp ? (
              <Feather
                onPress={changeEyeState}
                name="eye"
                size={25}
                color="#dedede"
              />
            ) : (
              <Feather
                onPress={changeEyeState}
                name="eye-off"
                size={25}
                color="#dedede"
              />
            )}
          </SettingsButton>
        </HeaderNav>
      </Header>

      <Content>
        <CardBlock>
          <CardTop>
            <Feather size={30} color="#999999" name="calendar" />
            <CardTypeText>Conta</CardTypeText>
          </CardTop>
          <CardBottom show={eyeIsUp}>
            <TextBalanceStatus>Saldo disponível</TextBalanceStatus>
            <BalanceText>R$ 0,00</BalanceText>
          </CardBottom>
        </CardBlock>
      </Content>

      <BottomNav>
        <Text>Olá, elias</Text>
      </BottomNav>
    </Container>
  );
}

export { Home };
