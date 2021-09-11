import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/auth";
import { AppStackRoutes } from "./app.stack.routes";
import { AuthRoutes } from "./auth.routes";

function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.BIN ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

export { Routes };
