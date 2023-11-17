import { Image, View } from "react-native";

const Avatar = ({ width, height, source = { uri: "" } }) => {
  return (
    <View>
      <Image
        width={width}
        height={height}
        source={source.uri ? { uri: source.uri } : source}
      />
    </View>
  );
};

export default Avatar;
