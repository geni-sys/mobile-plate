import React, { createContext, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  BIN: string;
  password: string;
};

interface ISignInCredentials {
  BIN: string;
  password: string;
}

interface IAuthContextData {
  user: User;
  signIn: (credenciais: ISignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

interface IAuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: IAuthProviderProps) {
  const [data, setData] = useState<User>({} as User);

  /**
   * - set user information on local database
   * - update current user login
   */
  async function signIn({ BIN, password }: ISignInCredentials) {
    try {
      await AsyncStorage.setItem("@gs_bank.user_bin", String(BIN));
      await AsyncStorage.setItem("@gs_bank.user_password", String(password));

      setData({ BIN, password });
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async function signOut(): Promise<void> {
    try {
      await AsyncStorage.removeItem("@gs_bank.user_bin");
      await AsyncStorage.removeItem("@gs_bank.user_password");

      setData({} as User);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadUserData() {
      try {
        const BIN = (await AsyncStorage.getItem("@gs_bank.user_bin")) as string;
        const password = (await AsyncStorage.getItem(
          "@gs_bank.user_password"
        )) as string;

        setData({ BIN, password });
      } catch (error: any) {
        throw new Error(error);
      }
    }

    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
