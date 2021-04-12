import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colorPalette from "../colors/colorHex";
import { Button } from "react-native-elements";
import "../media/welcome.gif";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeMessage}>
        <Text
          style={{
            color: colorPalette.gray,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Welcome to PetPowerPack
        </Text>
      </View>

      <View style={styles.introAnimation}>
        <Image
          style={{ width: "70%", height: "50%" }}
          source={require("../media/welcome.gif")}
        />
      </View>

      <View style={styles.buttonGroup}>
        <View style={{ minWidth: "75%", marginBottom: 20 }}>
          <Button
            buttonStyle={{ width: "100%", backgroundColor: colorPalette.blue }}
            raised
            title="Create an Account"
            accessibilityLabel="Learn more about this purple button"
            onPress={() => console.log("Button was pressed.")}
          />
        </View>

        <View style={{ minWidth: "50%" }}>
          <Button
            buttonStyle={{
              width: "100%",
              backgroundColor: colorPalette.muiBlue,
            }}
            raised
            title="Sign In"
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
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "column",
  },
  welcomeMessage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  introAnimation: {
    flex: 2,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGroup: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
});

export default LoginScreen;
