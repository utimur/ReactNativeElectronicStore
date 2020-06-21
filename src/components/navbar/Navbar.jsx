import React from 'react';
import {View, StyleSheet, Text, Button} from "react-native"

const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Device Store</Text>
            <Button style={styles.button} title="Menu" color="red"/>
        </View>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        backgroundColor:"black",
        height:50,
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent:"space-between",
    },
    text: {
        color:"white",
        fontSize: 24,
    },
    button: {
        color:"white",
        padding:10
    }
})