import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function BoxModal() {
  return (
    <View style={style.container}>
      <View style={[style.box,style.lightBlueBox]}>
        <Text style={{borderRadius:5,backgroundColor:"red"}}>lightblue Box</Text>
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
    width: "25%" ,
    height: "25%",
    // padding: 10,
    paddingHorizontal:10,
    paddingVertical:20,
    // margin:10,
    marginVertical:10,
    borderWidth:2,
    borderColor:"purple",
    borderStyle:"solid",
    borderRadius:5
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
   
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
    
  },
});
