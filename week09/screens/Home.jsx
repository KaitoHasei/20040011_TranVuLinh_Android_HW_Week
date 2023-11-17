import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useStore } from "react-redux";

const Home = ({ navigation, route }) => {
  const store = useStore();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        "https://6554326e63cafc694fe63887.mockapi.io/api/todos",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      setTodos(data);
    };

    getTodos();
  }, [route]);

  const handlePressTodo = (item) => {
    store.dispatch({ type: "todo/setTodo", payload: item });
    return navigation.navigate("Detail", { type: "edit" });
  };

  const handlePressCreate = () => {
    return navigation.navigate("Detail", { type: "create" });
  };

  return (
    <View style={{ padding: 15 }}>
      <View>
        <View
          style={{
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#000000",
            borderRadius: 20,
          }}
        >
          <TextInput style={{ padding: 10 }} placeholder="Search to do" />
        </View>
        <View>
          <FlatList
            data={todos}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    marginBottom: 15,
                    padding: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#bfbbbb",
                    borderWidth: 1,
                    borderColor: "#000000",
                    borderRadius: 10,
                  }}
                  onPress={() => handlePressTodo(item)}
                >
                  <View style={{ flex: 1 }}>
                    <Text numberOfLines={1}>{item?.name}</Text>
                  </View>
                  <View style={{ borderRadius: 100 }}>
                    <Button title="X" color={"red"} />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{ borderRadius: 100 }}>
          <Button title="+" onPress={handlePressCreate} />
        </View>
      </View>
    </View>
  );
};

export default Home;
