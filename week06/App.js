import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import AppScreen from "./screens";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppScreen />
      </NavigationContainer>
    </PaperProvider>
  );
}
