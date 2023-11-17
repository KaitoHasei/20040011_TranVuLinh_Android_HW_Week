import { View } from "react-native";
import { Button } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button mode="contained" onPress={() => navigation.navigate("Chat")}>
        Product List
      </Button>
    </View>
  );
};

export default Home;
