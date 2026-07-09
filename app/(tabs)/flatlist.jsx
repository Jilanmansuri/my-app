import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react';

const users = [
    { id: '1', name: 'Rahul' },
    { id: '2', name: 'priya' },
    { id: '3', name: 'aman' },
    { id: '4', name: 'sneha' }
]

const flatlist = () => {
    return (
        <View style={styles.container}>
            <Text>flatlist</Text>

            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
                keyExtractor={(item) => item.id}
            />

        </View>
    )
}

export default flatlist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },

    input: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 8,
        padding: 12,
        backgroundColor: "#fff",
        marginTop: 15,
    },

    text: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "600",
    },
});