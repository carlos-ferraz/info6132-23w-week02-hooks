import React, { useEffect, useState, useContext, createContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

const Toolbar = (props) => {
  return (
      <View style = {
        {
          flex:1,
          padding: 20,
          flexDirection: "column",
          justifyContent: "center"
        }
      }>
        <ThemedButton/>
      </View>
  );
}

const ThemedButton = () => {
  const themeContext = useContext(ThemeContext); 
  console.log('theme', themeContext);
  return (    
    <Pressable 
      style={{backgroundColor:themes[themeContext.theme].background, borderRadius:20}}
      onPress={()=>{
        themeContext.setTheme(themeContext.theme == "light" ? "dark" : "light");
      }}
    >
      <Text 
        style={{textAlign:"center", padding: 10, color: themes[themeContext.theme].foreground}}>
        I am styled by theme context!
      </Text>
    </Pressable>
  );
}


