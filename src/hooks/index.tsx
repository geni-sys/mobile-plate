import React, { ReactNode } from "react";

import { AuthProvider } from "./auth";

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProviderProps) => (
  <AuthProvider>{children}</AuthProvider>
);

export { AppProvider };
