// import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

import {
  Container,
  Gradient,
  Header,
  Content,
  Buttons,
  GettingStartButton,
  GettingStartButtonText,
  SignInButton,
} from "./styles";

function Splash() {
  return (
    <Container>
      <Gradient colors={["#4c669f", "#3b5998", "#192f6a"]} />

      <Header>
        <Text>GS bank</Text>

        <View>
          <Text>Angola</Text>
        </View>
      </Header>
      <Content>
        <Text>Um mundo financeiro sem complexidade</Text>

        <Buttons>
          <GettingStartButton>
            <GettingStartButtonText>Começar</GettingStartButtonText>
          </GettingStartButton>
          <SignInButton>
            <Text>Entrar na minha conta</Text>
          </SignInButton>
        </Buttons>
      </Content>
    </Container>
  );
}

export { Splash };
