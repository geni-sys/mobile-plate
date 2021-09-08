import React from "react";

import {
  BINInput,
  ButtonText,
  Container,
  Content,
  Text,
  DefaultNextButton,
  Header,
  Main,
} from "./styles";

function SignIn() {
  return (
    <Container>
      <Header />
      <Main>
        <Content>
          <Text>Bom te ver novamente! Para entrar, digite o seu BIN</Text>
          <BINInput />
          <Text>é novo por aqui? Começar</Text>
        </Content>

        <DefaultNextButton>
          <ButtonText>Continuar</ButtonText>
        </DefaultNextButton>
      </Main>
    </Container>
  );
}

export { SignIn };
