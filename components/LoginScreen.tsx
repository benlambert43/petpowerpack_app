import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import colorPalette from "../colors/colorHex";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeMessage}>
        <Text
          style={{
            color: colorPalette.gray,
            fontWeight: "bold",
            fontSize: 20,
            padding: 20,
          }}
        >
          Welcome to PetPowerPack
        </Text>
      </View>
      <View style={styles.introAnimation}></View>
      <View style={styles.buttonGroup}>
        <View style={{ padding: 20 }}>
          <Button
            title="Create an Account"
            color={colorPalette.blue}
            accessibilityLabel="Learn more about this purple button"
            onPress={() => console.log("Button was pressed.")}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Button
            title="Sign In"
            color={colorPalette.blue}
            accessibilityLabel="Learn more about this purple button"
            onPress={() => console.log("Button was pressed.")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeMessage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  introAnimation: {
    flex: 2,
  },
  buttonGroup: {
    flex: 3,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
});

export default LoginScreen;
