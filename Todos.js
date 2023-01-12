import { memo } from "react";
import { View, Pressable, Text } from "react-native";

const Todos = ({ todos, addTodo }) => {
  console.log('child render');
  return (
    <>
      <Text>My Todos</Text>
      <View>
        {todos.map((todo, index) => {
          return <Text key={index}>{todo}</Text>;
        })}
      </View>
        <Pressable onPress={addTodo}>
          <Text>Add Todo</Text>
        </Pressable>
    </>
  );
};

export default memo(Todos);
