import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Home";
import FoodScreen from "./Food";
import FoodDetail from "./Food/FoodDetail";

const Stack = createNativeStackNavigator();

const Screen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="Food" component={FoodScreen} />
      <Stack.Screen name="Detail" component={FoodDetail} />
    </Stack.Navigator>
  );
};

export default Screen;
