import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import products from "../data/shop.json";
import ProductItem from "../components/ProductItem";

const ProductScreen = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            paddingHorizontal: "30px",
            paddingVertical: "20px",
            borderBottomColor: "#C4C4C4",
            borderBottomWidth: "1px",
          }}
        >
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ProductItem key={index} product={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductScreen;
