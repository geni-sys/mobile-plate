import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { Splash } from "../screens/Splash";

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
  return (
    <Navigator initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}

export { AuthRoutes };
