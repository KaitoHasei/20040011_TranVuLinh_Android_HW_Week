import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { store } from "./store";

import Screen from "./screens";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screen />
      </NavigationContainer>
    </Provider>
  );
}
