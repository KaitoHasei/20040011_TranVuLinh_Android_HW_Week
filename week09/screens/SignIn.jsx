import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useStore } from "react-redux";

const SignIn = ({ navigation }) => {
  const store = useStore();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handlePressSignUp = async () => {
    if (!userName.trim() || !password.trim()) return console.log("require!");

    const response = await fetch(
      "https://6554326e63cafc694fe63887.mockapi.io/api/users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    const user = data.find((item) => item?.username === userName);

    if (!user) return console.log("user not exists!");

    if (user?.password !== password)
      return console.log("password is not correct!");

    store.dispatch({ type: "user/setUser", payload: user });
  };

  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: 800 }}>Sign In</Text>
      <View style={{ minWidth: "60%", marginBottom: "10px" }}>
        <Text>Username</Text>
        <View style={{ borderWidth: "1px", borderColor: "#000000" }}>
          <TextInput
            style={{ padding: "5px" }}
            onChangeText={(data) => setUserName(data)}
          />
        </View>
      </View>
      <View style={{ minWidth: "60%", marginBottom: "10px" }}>
        <Text>Password</Text>
        <View style={{ borderWidth: "1px", borderColor: "#000000" }}>
          <TextInput
            style={{ padding: "5px" }}
            onChangeText={(data) => setPassword(data)}
          />
        </View>
      </View>
      <Button title="Sign In" onPress={handlePressSignUp} />
      <Text onPress={() => navigation.navigate("SignUp")}>Sign Up</Text>
    </View>
  );
};

export default SignIn;
