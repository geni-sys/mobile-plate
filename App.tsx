import "react-native-gesture-handler";

import AppLoading from "expo-app-loading";
import React from "react";
// import { ThemeProvider } from "styled-components";

import {
  useFonts,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";

import { AppProvider } from "./src/hooks";
import { Routes } from "./src/routes";
// import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    IBMPlexSans_600SemiBold,
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
