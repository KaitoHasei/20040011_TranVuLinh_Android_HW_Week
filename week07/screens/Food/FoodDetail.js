import { useState } from "react";
import { View } from "react-native";
import { Button, Icon, IconButton, Text } from "react-native-paper";

const FoodDetail = ({ route }) => {
  const { food } = route.params;
  const [quantity, setQuantity] = useState(0);

  const onIncrease = () => {
    return setQuantity((prev) => ++prev);
  };

  const onDecrease = () => {
    if (quantity === 0) return;
    return setQuantity((prev) => --prev);
  };

  return (
    <View>
      <Icon size={350} source="image" />
      <View style={{ paddingHorizontal: "20px" }}>
        <Text style={{ fontWeight: 700 }} variant="headlineSmall">
          {food.name}
        </Text>
        <View
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "#000000", opacity: "0.54" }}
            variant="titleMedium"
          >
            {food.des}
          </Text>
          <Text style={{ fontWeight: 700 }} variant="headlineSmall">
            ${food.price}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ display: "flex", alignItems: "center" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon size={20} source="clock-outline" />
              <Text
                style={{
                  marginLeft: "10px",
                  color: "#000000",
                  opacity: "0.54",
                }}
                variant="titleMedium"
              >
                Delivery in
              </Text>
            </View>
            <Text style={{ fontWeight: 700 }} variant="headlineSmall">
              30
            </Text>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                iconColor="#F1B000"
                size={30}
                icon="minus-box"
                onPress={onDecrease}
              />
              <Text>{quantity}</Text>
              <IconButton
                iconColor="#F1B000"
                size={30}
                icon="plus-box"
                onPress={onIncrease}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontWeight: 700 }} variant="headlineSmall">
            Restaurants info
          </Text>
          <Text style={{ color: "#000000", opacity: 0.67 }}>
            Order a Large Pizza but the size is the equivalent of a medium/small
            from other places at the same price range.
          </Text>
          <Button
            style={{ marginTop: "30px" }}
            buttonColor="#F1B000"
            mode="contained"
          >
            <Text
              style={{ color: "#ffffff", fontWeight: 700 }}
              variant="headlineMedium"
            >
              Add to cart
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;
