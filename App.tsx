import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import colorPalette from "./colors/colorHex";

export default function App() {
  const userLoggedIn = false;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {userLoggedIn ? <HomeScreen /> : <LoginScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
