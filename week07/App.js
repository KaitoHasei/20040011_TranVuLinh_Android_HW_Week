import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Screen from "./screens";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Screen />
      </NavigationContainer>
    </PaperProvider>
  );
}
