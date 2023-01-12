import { useState, useEffect, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const previousInputValue = useRef("");

  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Text>Render Count: {count.current} </Text>
      <Text>Input Value: {inputValue}</Text>
      <Text>Previous Value: {previousInputValue.current}</Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
