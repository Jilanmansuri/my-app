import React from 'react'
import {View, Text,Button,Alert,Pressable,TextInput} from "react-native"
import { StyleSheet } from 'react-native';
const Setting = () => {

  const[name,setName]=React.useState("")
  return (
    <View style={styles.container}>
       <Text>write something </Text>
       <TextInput placeholder="Enter text here..." value={name} onChangeText={setName} />
       <Text>Name: {name}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default Setting