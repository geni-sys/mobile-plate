import React, { useCallback, useState } from "react";
import { KeyboardAvoidingView, StatusBar, Platform, Alert } from "react-native";
import * as Yup from "yup";

import { Feather } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { AuthStackParamList } from "../../../routes/auth.routes";
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
} from "../styles";

type IProps = StackScreenProps<AuthStackParamList, "SignInSecondStep">;

function SignInSecondStep({ navigation }: IProps) {
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required("senha é obrigatório"),
      });

      await schema.validate({ password });

      navigation.navigate("SignInSecondStep");
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique as credenciais"
        );
      }
    }
  }, [password]);

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
            <Text>Qual é a sua senha de acesso do aplicativo?</Text>
            <Input
              autoFocus
              secureTextEntry
              maxLength={4}
              keyboardType="numeric"
              keyboardAppearance="light"
              iconName="lock"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />
          </Content>

          <Bottom>
            <WantSignUp>
              <ToStartButton>
                <ToStart highlight>Esqueci minha senha</ToStart>
              </ToStartButton>
            </WantSignUp>
            <Button onPress={handleLogin} title="Entrar" />
          </Bottom>
        </Main>
      </Container>
    </KeyboardAvoidingView>
  );
}

export { SignInSecondStep };
