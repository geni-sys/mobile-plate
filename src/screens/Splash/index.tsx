import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";

import {
  Header,
  Content,
  Buttons,
  GettingStartButton,
  SignInButton,
} from "./styles";

function Splash() {
  return (
    <SafeAreaView style={styles.container}>
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
            <Text>Começar</Text>
          </GettingStartButton>
          <SignInButton>
            <Text>Entrar na minha conta</Text>
          </SignInButton>
        </Buttons>
      </Content>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Splash };
