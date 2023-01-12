import { useState, useCallback } from "react";
import { Pressable, Text } from "react-native";
import Todos from "./Todos";

export const App = () => {
  
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <>
        <Text>Count: {count}</Text>
        <Pressable onPress={increment}>
          <Text>+</Text>
        </Pressable>
      </>
    </>
  );

}