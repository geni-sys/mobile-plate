import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
    </Navigator>
  );
}
