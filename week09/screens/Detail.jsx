import { useRef } from "react";
import { Button, TextInput, View } from "react-native";
import { useStore } from "react-redux";

const Detail = ({ route, navigation }) => {
  const store = useStore();
  const { type } = route?.params;
  const { todo } = store.getState();
  const inputRef = useRef("");

  const handlePressSave = async () => {
    if (!inputRef.current.value.trim()) return;

    console.log(todo);

    if (type === "edit") {
      const response = await fetch(
        `https://6554326e63cafc694fe63887.mockapi.io/api/todos/${todo?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputRef.current?.value,
          }),
        }
      );

      if (response.ok) return navigation.navigate("Home");

      return console.log("cap nhat khong thanh cong");
    }

    const response = await fetch(
      "https://6554326e63cafc694fe63887.mockapi.io/api/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputRef.current?.value,
        }),
      }
    );

    if (!response.ok) return console.log("khong tao duoc");

    return navigation.navigate("Home");
  };

  return (
    <View style={{ padding: 10, minHeight: "100%" }}>
      <View style={{ marginBottom: 10, borderWidth: 1, borderRadius: 20 }}>
        <TextInput
          ref={inputRef}
          style={{ padding: 10 }}
          placeholder="name todo"
          defaultValue={type === "edit" ? todo?.name : ""}
          onChangeText={(data) => (inputRef.current.value = data)}
        />
      </View>
      <Button title="Save" onPress={handlePressSave} />
    </View>
  );
};

export default Detail;
