import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AppStackRoutes } from "./app.stack.routes";
import { AuthRoutes } from "./auth.routes";

function Routes() {
  const [user] = useState(true);

  return (
    <NavigationContainer>
      {user ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

export { Routes };
