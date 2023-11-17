import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const SignUp = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handlePressSignUp = async () => {
    if (!userName.trim() || !password.trim()) return console.log("require!");

    const response = await fetch(
      "https://6554326e63cafc694fe63887.mockapi.io/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password,
        }),
      }
    );

    if (response.ok) navigation.navigate("SignIn");
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
      <Text style={{ fontSize: 25, fontWeight: 800 }}>Sign Up</Text>
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
      <Button title="Sign Up" onPress={handlePressSignUp} />
    </View>
  );
};

export default SignUp;
