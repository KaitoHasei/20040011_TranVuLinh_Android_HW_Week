import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <View
      style={{
        paddingRight: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: "1px",
        borderBottomColor: "#C4C4C4",
      }}
    >
      <View>
        <Image
          style={{ width: "80px", height: "80px" }}
          source={require("../assets/images/product-image.png")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: "5px" }}>{product.name}</Text>
        <Text style={{ color: "#7D5B5B" }}>
          Shop <Text>{product.shop}</Text>
        </Text>
      </View>
      <View>
        <Button
          mode="contained"
          buttonColor="#F31111"
          style={{ borderRadius: "3px" }}
        >
          Chat
        </Button>
      </View>
    </View>
  );
};

export default ProductItem;
