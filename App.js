import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MultipleStyles from './component/MultipleStyles';
import BoxModal from './component/Boxmodal';

export default function App() {
  return (
    // <MultipleStyles/>
    <BoxModal/>
    // <View style={style.container}>
    //   <Text style={style.title}>StyleSheet API</Text>
      
    // </View>
  );
}

// const style =StyleSheet.create({
//   container:{flex:1,backgroundColor:"plum",padding:60},
//   title : {color:'green'}
// })
