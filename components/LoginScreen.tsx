import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colorPalette from "../colors/colorPalette";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <View style={metastyles.container}>
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

        <View style={styles.intro}>
          <View style={styles.todoList}>
            <View style={styles.todoListItem}>
              <Ionicons
                name="checkmark-outline"
                size={32}
                color={colorPalette.darkGreen}
              />
            </View>
            <View style={styles.todoListItem}>
              <Text style={{ color: colorPalette.gray, textAlign: "center" }}>
                Create an account
              </Text>
            </View>
          </View>
          <View style={styles.todoList}>
            <View style={styles.todoListItem}>
              <Ionicons
                name="checkmark-outline"
                size={32}
                color={colorPalette.darkGreen}
              />
            </View>
            <View style={styles.todoListItem}>
              <Text style={{ color: colorPalette.gray, textAlign: "center" }}>
                Sign in on two devices
              </Text>
            </View>
          </View>
          <View style={styles.todoList}>
            <View style={styles.todoListItem}>
              <Ionicons
                name="checkmark-outline"
                size={32}
                color={colorPalette.darkGreen}
              />
            </View>
            <View style={styles.todoListItem}>
              <Text style={{ color: colorPalette.gray, textAlign: "center" }}>
                Give one device to your pet
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={{ minWidth: "75%", marginBottom: 20 }}>
            <Button
              buttonStyle={{
                width: "100%",
                backgroundColor: colorPalette.blue,
              }}
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
    </View>
  );
};

const metastyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "column",
  },
  welcomeMessage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  intro: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonGroup: {
    alignItems: "center",
    flex: 1,
  },
  todoList: {
    flexDirection: "row",
  },
  todoListItem: {
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
