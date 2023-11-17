import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useStore } from "react-redux";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import { useState } from "react";
import Avatar from "../components/Avatar";
import { Image, Text, View } from "react-native";
import Detail from "./Detail";

const Stack = createNativeStackNavigator();

const Screen = () => {
  const store = useStore();
  const [isAuthenticated, setAuthenticate] = useState(false);

  store.subscribe(() => store.getState()?.user && setAuthenticate(true));

  return (
    <>
      {!isAuthenticated ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => {
                const { user } = store.getState();

                return (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ width: 50, height: 50, borderRadius: 100 }}
                      source={{
                        uri: user?.avatar,
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 18, fontWeight: 800 }}>
                        {user?.username}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={({ route }) => ({
              headerTitle: route.params?.type === "edit" ? "Edit" : "Create",
            })}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Screen;
