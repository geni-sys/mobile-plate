import React, { useState, useCallback } from "react";
import { KeyboardAvoidingView, StatusBar, Platform } from "react-native";
import { mask, unMask } from "remask";

import { Feather } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthStackParamList } from "../../routes/auth.routes";
import {
  Container,
  Content,
  Text,
  Header,
  Main,
  Bottom,
  HandleCloseScreen,
  WantSignUp,
  ToStart,
  ToStartButton,
} from "./styles";

type IProps = StackScreenProps<AuthStackParamList, "SignInFirstStep">;

function SignIn({ navigation }: IProps) {
  const [BIN, setBIN] = useState("");

  const handleBINMaskOnChange = useCallback((value: string) => {
    setBIN(mask(unMask(value), ["999.999.999-99"]));
  }, []);

  const navigateToSingUpScreen = useCallback(() => {
    navigation.navigate("SignUpFistStep");
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      style={{ flex: 1 }}
    >
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <Header />

        <Main>
          <Content>
            <HandleCloseScreen
              onPress={() => navigation.dispatch(CommonActions.goBack())}
            >
              <Feather name="x" size={34} color="#121214" />
            </HandleCloseScreen>
            <Text>Bom te ver novamente! Para entrar, digite o seu BIN</Text>
            <Input
              autoFocus
              keyboardType="numeric"
              maxLength={11}
              iconName="cast"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleBINMaskOnChange}
              value={BIN}
            />
            <Text>{BIN}</Text>
          </Content>

          <Bottom>
            <WantSignUp>
              <ToStart>é novo por aqui? </ToStart>
              <ToStartButton onPress={navigateToSingUpScreen}>
                <ToStart highlight>Começar</ToStart>
              </ToStartButton>
            </WantSignUp>
            <Button title="Continuar" />
          </Bottom>
        </Main>
      </Container>
    </KeyboardAvoidingView>
  );
}

export { SignIn };
