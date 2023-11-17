import { useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Text, TextInput, ToggleButton } from "react-native-paper";

import Donut from "../../data/product.json";
import FoodItem from "./FoodItem";

const FoodScreen = ({ navigation }) => {
  const handlePressFood = (food) => {
    console.log(food);
    return navigation.navigate("Detail", {
      food,
    });
  };

  return (
    <View style={{ padding: "10px" }}>
      <View>
        <Text style={{ color: "#000000", opacity: 0.65 }} variant="titleMedium">
          Welcome, Jala!
        </Text>
        <Text style={{ fontWeight: 700 }} variant="headlineSmall">
          Choice your Best food
        </Text>
      </View>
      <View style={{ marginVertical: "20px" }}>
        <TextInput mode="outlined" placeholder="Search food" />
      </View>
      <View>
        <FlatList
          keyExtractor={(_, index) => index}
          data={Donut}
          renderItem={({ item, index }) => (
            <FoodItem key={index} food={item} onPress={handlePressFood} />
          )}
        />
      </View>
    </View>
  );
};

export default FoodScreen;
