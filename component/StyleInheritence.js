import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function StyleInheritence() {
  return (
    <View style={style.container}>
        <View style={style.darkMode}>
            <Text style={style.darkModeText}>
                Style <Text style={style.boldText}>Inheritence</Text>
            </Text>
        </View>
      <View style={[style.box,style.lightBlueBox ,style.boxShadow]}>
        <Text style={{borderRadius:5,backgroundColor:"red"}}>lightblue Box</Text>
      </View>
      <View style={[style.box,style.lightGreenBox , style.androidShadow] }>
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
  darkMode:{
    backgroundColor:"black",
    color:"white"
  },
  darkModeText:{
    color:"white"
  },
  boldText:{
    fontWeight:"bold"
  },
  box:{
    // width: "25%" ,
    // height: "25%",
    width:250,
    height:250,
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
  boxShadow:{
    shadowColor: "#333333",
    shadowOffset: {width:6 , height:6},
    shadowOpacity:0.6,
    shadowRadius:5
  },
  androidShadow:{
    elevation:10
  }
});
