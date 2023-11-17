import { Image, TouchableOpacity, View } from "react-native";
import { Button, Icon, Text } from "react-native-paper";

const FoodItem = ({ food, onPress }) => {
  const handlePressFood = () => {
    return onPress(food);
  };

  return (
    <TouchableOpacity onPress={handlePressFood}>
      <View
        style={{
          position: "relative",
          marginVertical: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F4DDDD",
          borderRadius: "10px",
        }}
      >
        <View>
          <Icon size={130} source="image" />
        </View>
        <View>
          <Text style={{ fontWeight: 700 }} variant="headlineSmall">
            {food.name}
          </Text>
          <Text
            style={{ fontWeight: 600, color: "#000000", opacity: 0.54 }}
            variant="titleMedium"
          >
            {food.des}
          </Text>
          <Text style={{ fontWeight: 700 }} variant="headlineSmall">
            ${food.price}
          </Text>
        </View>
        <Button
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            borderRadius: "10px",
          }}
          mode="contained"
        >
          +
        </Button>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;
