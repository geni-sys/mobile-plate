import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/signUp";
import { Splash } from "../screens/Splash";

export type AuthStackParamList = {
  Splash: undefined;
  SignInFirstStep: undefined;
  SignUpFistStep: undefined;
};

const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();

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
      <Screen
        options={{ headerShown: false }}
        name="SignUpFistStep"
        component={SignUp}
      />
    </Navigator>
  );
}

export { AuthRoutes };
