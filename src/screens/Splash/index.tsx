// import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import {
  Container,
  Gradient,
  Header,
  LogoContainer,
  Logo,
  LogoText,
  Country,
  CountryText,
  Content,
  Text as MyText,
  Buttons,
  GettingStartButton,
  GettingStartButtonText,
  SignInButton,
  SignInButtonText,
} from "./styles";

type SplashProps = {
  navigation: {
    navigate: (routeName: string, options?: {}) => void;
  };
};

function Splash({ navigation }: SplashProps) {
  return (
    <Container>
      <Gradient colors={["#4c669f", "#3b5998", "#192f6a"]} />

      <Header>
        <LogoContainer>
          <Logo>GS</Logo>
          <LogoText>finance</LogoText>
        </LogoContainer>

        <Country>
          <CountryText>Angola</CountryText>
        </Country>
      </Header>
      <Content>
        <MyText>Um mundo financeiro sem complexidade</MyText>

        <Buttons>
          <GettingStartButton
            onPress={() => navigation.navigate("SignInFirstStep")}
          >
            <GettingStartButtonText>Começar</GettingStartButtonText>
          </GettingStartButton>
          <SignInButton>
            <SignInButtonText>Entrar na minha conta</SignInButtonText>
          </SignInButton>
        </Buttons>
      </Content>
    </Container>
  );
}

export { Splash };
