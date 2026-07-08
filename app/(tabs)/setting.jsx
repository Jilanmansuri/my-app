import React from "react";
import { View, Text, Button, Alert, StyleSheet, Pressable } from "react-native";

const setting = () => {

    const handlePress = () => {
        console.log("pressed")
        Alert.alert("Success", "Button Pressed")
    }
    
    return (
        <View style={styles.container}>

            <Pressable
                onPress={handlePress}
                style={({ pressed }) => [
                    styles.button,
                    { opacity: pressed ? 0.5 : 1 }
                ]}
            >
                <Text style={styles.buttonText}>Button</Text>
            </Pressable>

            <Button title='Click Me' onPress={() => alert("Clicked")} />

            <Button title="Login" onPress={handlePress} />

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    button: {
        backgroundColor: "black",
        paddingVertical: 8,
        paddingHorizontal: 13

    },
    buttonText: {
        backgroundColor: "blue",
        color: "white"
    }
})

export default setting