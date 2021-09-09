import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { Splash } from "../screens/Splash";

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Splash"
      defaultScreenOptions={{ headerShown: false }}
    >
      <Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <Screen
        options={{ headerShown: false }}
        name="SignInFirstStep"
        component={SignIn}
      />
    </Navigator>
  );
}

export { AuthRoutes };
