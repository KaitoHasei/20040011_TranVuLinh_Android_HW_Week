import { View } from "react-native";
import { Button } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <View
      style={{ height: "100vh", display: "flex", justifyContent: "center" }}
    >
      <Button mode="contained" onPress={() => navigation.navigate("Food")}>
        Search food
      </Button>
    </View>
  );
};

export default Home;
