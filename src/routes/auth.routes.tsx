import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { SignInSecondStep } from "../screens/SignIn/SignInSecondStep";
import { SignUp } from "../screens/signUp";
import { Splash } from "../screens/Splash";

export type AuthStackParamList = {
  Splash: undefined;
  SignInFirstStep: undefined;
  SignInSecondStep: { user_document: string } | undefined;
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
      {/* SignIn Screens */}
      <Screen
        options={{ headerShown: false }}
        name="SignInFirstStep"
        component={SignIn}
      />
      <Screen
        options={{ headerShown: false }}
        name="SignInSecondStep"
        component={SignInSecondStep}
      />
      {/* SignUP Screens */}
      <Screen
        options={{ headerShown: false }}
        name="SignUpFistStep"
        component={SignUp}
      />
    </Navigator>
  );
}

export { AuthRoutes };
