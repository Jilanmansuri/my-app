// import React, { useReducer } from "react";
// import { View, Text, TextInput, StyleSheet } from "react-native";

// // Initial State
// const initialState = {
//   name: "",
// };

// // Reducer
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_NAME":
//       return {
//         ...state,
//         name: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// const Setting = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Write Something</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter text here..."
//         value={state.name}
//         // editable={true}
//         // autoCorrect={false}
//         // autoCapitalize="none"
//         onChangeText={(text) => {
//           console.log(text);
//           dispatch({
//             type: "SET_NAME",
//             payload: text,
//           });
//         }}
//       />

//       <Text style={styles.text}>Name: {state.name}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f2f2f2",
//     padding: 20,
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },

//   input: {
//     width: "90%",
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#000",
//     borderRadius: 8,
//     backgroundColor: "#fff",
//     paddingHorizontal: 10,
//   },

//   text: {
//     marginTop: 20,
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default Setting;


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
export default Setting;