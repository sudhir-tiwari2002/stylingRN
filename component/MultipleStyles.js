import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function MultipleStyles() {
  return (
    <View style={style.container}>
      <View style={[style.box,style.lightBlueBox]}>
        <Text>lightblue Box</Text>
      </View>
      <View style={[style.box,style.lightGreenBox] }>
        <Text>lightgreen Box</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box:{
    width: 100,
    height: 100,
    padding: 10,
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
   
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
    
  },
});
