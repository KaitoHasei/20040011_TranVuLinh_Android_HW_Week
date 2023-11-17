import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./Product";
import Home from "./Home";
import { Icon } from "react-native-paper";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

const AppScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1BA9FF",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: 600,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Chat"
        component={ProductScreen}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ paddingHorizontal: "20px" }}>
              <Icon size={20} source="cart" color="#ffffff" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppScreen;
