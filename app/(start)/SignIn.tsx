import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const autheticateUser = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#ffff",
            margin: 20,
            textAlign: "center",
          }}
        >
          Welcome to unisnack
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Enter username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginbtn} onPress={autheticateUser}>
        <Text style={styles.logintxt}>Login</Text>
      </TouchableOpacity>

      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              height: 1,
              marginTop: 40,
              backgroundColor: "#fff",
            }}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                router.navigate("Register");
              }}
            >
              <Text
                style={{
                  width: 100,
                  padding: 0,
                  marginTop: 40,
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              marginTop: 40,
              backgroundColor: "#fff",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#151515",
  },
  signtab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffff",
    marginTop: 80,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    borderRadius: 5,
  },
  tabitem: {
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 0,
    marginBottom: 0,
  },
  Logo: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10, // to constants
    margin: 10, // to constants
    height: 50,
    borderRadius: 5,
    // borderWidth: 2,
    borderColor: "#ccc",
  },
  loginbtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DC5F00",
    margin: 10,
    padding: 10,
    height: 50,
    borderRadius: 5,
  },
  logintxt: {
    color: "#fff",
    fontSize: 20,
  },
});
