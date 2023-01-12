import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useCallback } from 'react';
import Todos from './Todos';

export default function App() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <View style={styles.container}>
      <Todos todos={todos} addTodo={addTodo}/>
      <View>
        <Text>Count: {count}</Text>
        <Pressable onPress={increment}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
